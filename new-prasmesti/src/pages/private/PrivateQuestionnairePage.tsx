import { useEffect, useRef, useState } from 'react';
import { usePrivateAuth } from '../../private/PrivateAuthContext';
import { countryNameBySlug } from '../../data/eccasFlags';
import { usePrivateI18n } from '../../private/privateI18n';
import {
  getCountryReport,
  saveDraft,
  submitReport,
  type QuestionnaireAnswers,
  type ReportStatus,
} from '../../lib/countryStore';

type TriState = '' | 'oui' | 'non';

function TriStateCell({ name, initial, label }: { name: string; initial?: string; label?: string }) {
  const [value, setValue] = useState<TriState>((initial as TriState) || '');
  const cycle = () =>
    setValue((current) => (current === '' ? 'oui' : current === 'oui' ? 'non' : ''));
  const stateClass = value === '' ? 'is-empty' : `is-${value}`;
  const stateText = value === 'oui' ? 'Oui' : value === 'non' ? 'Non' : 'non renseigné';
  return (
    <>
      <button
        type="button"
        onClick={cycle}
        className={`private-questionnaire-tristate ${stateClass}`}
        aria-label={`${label ?? name} : ${stateText}`}
      >
        {value === 'oui' ? 'Oui' : value === 'non' ? 'Non' : ''}
      </button>
      <input type="hidden" name={name} value={value} readOnly />
    </>
  );
}

function MatrixSection({
  title,
  name,
  rows,
  answers,
}: {
  title: string;
  /** Préfixe stable des noms de champs (sert au calcul des indicateurs). */
  name: string;
  rows: string[];
  answers: QuestionnaireAnswers;
}) {
  const { t, list } = usePrivateI18n();
  const sectorColumns = list('sectorColumns');
  return (
    <section className="private-questionnaire-section">
      <div className="private-questionnaire-section-head">
        <h3 className="private-questionnaire-section-title">{title}</h3>
      </div>

      <div className="private-table-wrap">
        <table className="private-questionnaire-table private-questionnaire-table-matrix">
          <thead>
            <tr>
              <th scope="col" className="is-question">{t('colQuestionAxis')}</th>
              {sectorColumns.map((column) => (
                <th scope="col" key={column}>{column}</th>
              ))}
              <th scope="col" className="is-notes">{t('colObservations')}</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr key={row}>
                <th scope="row" className="is-question">{row}</th>
                {sectorColumns.map((column, columnIndex) => {
                  const field = `${name}-sector-${index}-${columnIndex}`;
                  return (
                    <td key={`${row}-${column}`} className="is-tristate">
                      <TriStateCell name={field} initial={answers[field]} label={`${row} — ${column}`} />
                    </td>
                  );
                })}
                <td className="is-notes">
                  <textarea
                    rows={2}
                    name={`${name}-note-${index}`}
                    defaultValue={answers[`${name}-note-${index}`] ?? ''}
                    aria-label={`${t('colObservations')} — ${row}`}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

function PrivateQuestionnairePage() {
  const { user } = usePrivateAuth();
  const { t, list, language } = usePrivateI18n();
  // Un compte pays remplit son propre questionnaire ; l'admin, faute de pays
  // rattaché, travaille sur celui du pays hôte du siège de la CEEAC.
  const slug = user?.countrySlug ?? 'gabon';
  const countryLabel = countryNameBySlug(slug, language);

  const [answers, setAnswers] = useState<QuestionnaireAnswers | null>(null);
  const [reportStatus, setReportStatus] = useState<ReportStatus | null>(null);
  const [savedAt, setSavedAt] = useState<string | undefined>(undefined);
  const [status, setStatus] = useState<'idle' | 'savingDraft' | 'draftSaved' | 'submitting' | 'submitted' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const formRef = useRef<HTMLFormElement>(null);
  // Sans cette référence, la minuterie d'un message précédent efface le suivant :
  // soumettre juste après avoir enregistré un brouillon faisait disparaître la
  // confirmation de soumission au bout du délai restant du premier message.
  const resetTimer = useRef<number | undefined>(undefined);

  useEffect(() => () => window.clearTimeout(resetTimer.current), []);

  const generalRows = list('generalRows');
  const policyRows = list('policyRows');
  const zoneCodes = [
    t('zoneUrban'), t('zoneSemi'), t('zoneRural'),
    'SP urbain', 'SS urbain', 'ST urbain', 'SP semi', 'SS semi', 'ST semi', 'SP rural', 'SS rural', 'ST rural',
  ];

  useEffect(() => {
    let active = true;
    void getCountryReport(slug).then((report) => {
      if (!active) return;
      setAnswers(report?.answers ?? {});
      setReportStatus(report?.status ?? null);
      setSavedAt(report?.updatedAt);
    });
    return () => {
      active = false;
    };
  }, [slug]);

  const save = async (mode: 'draft' | 'submit') => {
    if (!formRef.current) return;
    window.clearTimeout(resetTimer.current);
    setStatus(mode === 'submit' ? 'submitting' : 'savingDraft');
    setErrorMessage('');

    const formData = new FormData(formRef.current);
    const next: QuestionnaireAnswers = {};
    formData.forEach((value, key) => {
      next[key] = typeof value === 'string' ? value : '';
    });

    const result =
      mode === 'submit'
        ? await submitReport(slug, next) // recalcule et publie les indicateurs publics
        : await saveDraft(slug, next); // réponses seules, rien n'est publié

    // Un échec doit se voir : la version précédente laissait croire à un
    // enregistrement réussi même quand la base l'avait refusé.
    if (!result.ok) {
      setErrorMessage(result.error);
      setStatus('error');
      return;
    }

    setAnswers(next);
    setReportStatus(mode === 'submit' ? 'submitted' : 'draft');
    setSavedAt(new Date().toISOString());
    setStatus(mode === 'submit' ? 'submitted' : 'draftSaved');
    resetTimer.current = window.setTimeout(() => setStatus('idle'), 6000);
  };

  if (!answers) {
    return (
      <div className="private-page-stack">
        <section className="private-surface-card private-questionnaire-shell">
          <p className="private-section-body">{t('qLoading')}</p>
        </section>
      </div>
    );
  }

  return (
    <div className="private-page-stack">
      <form
        ref={formRef}
        onSubmit={(event) => {
          event.preventDefault();
          void save('submit');
        }}
        className="private-surface-card private-questionnaire-shell"
      >
        <div className="private-questionnaire-header">
          <p className="private-section-kicker">{t('qKicker')} — {countryLabel}</p>
          <h2 className="private-section-title">{t('qTitle')}</h2>
          <p className="private-section-body">{t('qBody')}</p>
          {reportStatus ? (
            <p className="private-questionnaire-state">
              <span className={`private-table-badge is-${reportStatus === 'submitted' ? 'statusSubmitted' : 'statusDraft'}`}>
                {reportStatus === 'submitted' ? t('qStatusSubmitted') : t('qStatusDraft')}
              </span>
              {savedAt ? (
                <span className="private-questionnaire-state-date">
                  {t('qSavedAt')} {new Date(savedAt).toLocaleString(language)}
                </span>
              ) : null}
            </p>
          ) : null}
        </div>

        <section className="private-questionnaire-meta">
          <label className="private-form-field">
            <span>{t('metaCountry')}</span>
            <input name="meta-pays" defaultValue={answers['meta-pays'] || countryLabel} placeholder={t('metaCountryPh')} />
          </label>
          <label className="private-form-field">
            <span>{t('metaFocal')}</span>
            <input name="meta-point-focal" defaultValue={answers['meta-point-focal'] ?? ''} placeholder={t('metaFocalPh')} />
          </label>
          <label className="private-form-field">
            <span>{t('metaEmail')}</span>
            <input name="meta-email" defaultValue={answers['meta-email'] || 'david.ossene@ceeac-eccas.org'} />
          </label>
        </section>

        <section className="private-questionnaire-section">
          <div className="private-questionnaire-section-head">
            <h3 className="private-questionnaire-section-title">{t('sectionGeneral')}</h3>
          </div>

          <div className="private-table-wrap">
            <table className="private-questionnaire-table">
              <thead>
                <tr>
                  <th rowSpan={3} scope="col" className="is-question">{t('q1Level')}</th>
                  <th colSpan={12} scope="colgroup">{t('q1Tools')}</th>
                </tr>
                <tr>
                  <th colSpan={3} scope="colgroup">{t('q1GenEstab')}</th>
                  <th colSpan={9} scope="colgroup">{t('q1TechEstab')}</th>
                </tr>
                <tr>
                  {zoneCodes.map((code) => (
                    <th key={code} scope="col">{code}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {generalRows.map((row, index) => (
                  <tr key={row}>
                    <th scope="row" className="is-question">{row}</th>
                    {Array.from({ length: 12 }).map((_, cellIndex) => {
                      const field = `general-${index}-${cellIndex}`;
                      return (
                        <td key={cellIndex} className="is-tristate">
                          <TriStateCell name={field} initial={answers[field]} label={`${row} — ${zoneCodes[cellIndex]}`} />
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="private-questionnaire-section">
          <div className="private-questionnaire-section-head">
            <h3 className="private-questionnaire-section-title">{t('sectionII')}</h3>
          </div>

          <div className="private-table-wrap">
            <table className="private-questionnaire-table private-questionnaire-table-policy">
              <thead>
                <tr>
                  <th rowSpan={2} scope="col" className="is-question">{t('q2Sector')}</th>
                  <th rowSpan={2} scope="col">{t('q2Dispositions')}</th>
                  <th colSpan={2} scope="colgroup">{t('q2ObsPol')}</th>
                  <th colSpan={2} scope="colgroup">{t('q2ObsFin')}</th>
                  <th colSpan={2} scope="colgroup">{t('q2ObsAdmin')}</th>
                  <th rowSpan={2} scope="col" className="is-notes">{t('q2OtherDiff')}</th>
                </tr>
                <tr>
                  <th scope="col">{t('before2015')}</th>
                  <th scope="col">{t('after2015')}</th>
                  <th scope="col">{t('before2015')}</th>
                  <th scope="col">{t('after2015')}</th>
                  <th scope="col">{t('before2015')}</th>
                  <th scope="col">{t('after2015')}</th>
                </tr>
              </thead>
              <tbody>
                {policyRows.map((row, index) => (
                  <tr key={row}>
                    <th scope="row" className="is-question">{row}</th>
                    <td className="is-notes"><textarea rows={2} name={`policy-dispositions-${index}`} defaultValue={answers[`policy-dispositions-${index}`] ?? ''} aria-label={`${t('q2Dispositions')} — ${row}`} /></td>
                    <td className="is-tristate"><TriStateCell name={`policy-pol-before-${index}`} initial={answers[`policy-pol-before-${index}`]} label={`${row} — ${t('q2ObsPol')} ${t('before2015')}`} /></td>
                    <td className="is-tristate"><TriStateCell name={`policy-pol-after-${index}`} initial={answers[`policy-pol-after-${index}`]} label={`${row} — ${t('q2ObsPol')} ${t('after2015')}`} /></td>
                    <td className="is-tristate"><TriStateCell name={`policy-fin-before-${index}`} initial={answers[`policy-fin-before-${index}`]} label={`${row} — ${t('q2ObsFin')} ${t('before2015')}`} /></td>
                    <td className="is-tristate"><TriStateCell name={`policy-fin-after-${index}`} initial={answers[`policy-fin-after-${index}`]} label={`${row} — ${t('q2ObsFin')} ${t('after2015')}`} /></td>
                    <td className="is-tristate"><TriStateCell name={`policy-admin-before-${index}`} initial={answers[`policy-admin-before-${index}`]} label={`${row} — ${t('q2ObsAdmin')} ${t('before2015')}`} /></td>
                    <td className="is-tristate"><TriStateCell name={`policy-admin-after-${index}`} initial={answers[`policy-admin-after-${index}`]} label={`${row} — ${t('q2ObsAdmin')} ${t('after2015')}`} /></td>
                    <td className="is-notes"><textarea rows={2} name={`policy-note-${index}`} defaultValue={answers[`policy-note-${index}`] ?? ''} aria-label={`${t('q2OtherDiff')} — ${row}`} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <MatrixSection title={t('sectionIII')} name="principes" rows={list('sectionThreeRows')} answers={answers} />
        <MatrixSection title={t('sectionIV')} name="piliers" rows={list('sectionFourRows')} answers={answers} />
        <MatrixSection title={t('sectionV')} name="objectifs" rows={list('sectionFiveRows')} answers={answers} />
        <MatrixSection title={t('sectionVI')} name="cibles" rows={list('sectionSixRows')} answers={answers} />

        <section className="private-questionnaire-section">
          <div className="private-questionnaire-section-head">
            <h3 className="private-questionnaire-section-title">{t('extraQTitle')}</h3>
          </div>
          <div className="private-form-grid">
            <label className="private-form-field">
              <span>{t('extraLaw')}</span>
              <textarea rows={4} name="extra-loi" defaultValue={answers['extra-loi'] ?? ''} placeholder={t('extraLawPh')} />
            </label>
            <label className="private-form-field">
              <span>{t('extraCharters')}</span>
              <textarea rows={4} name="extra-chartes" defaultValue={answers['extra-chartes'] ?? ''} placeholder={t('extraChartersPh')} />
            </label>
            <label className="private-form-field private-form-field-wide">
              <span>{t('extraComments')}</span>
              <textarea rows={5} name="extra-commentaires" defaultValue={answers['extra-commentaires'] ?? ''} placeholder={t('extraCommentsPh')} />
            </label>
          </div>
        </section>

        <div className="private-form-actions">
          <button
            type="button"
            className="private-button private-button-secondary"
            onClick={() => void save('draft')}
            disabled={status === 'savingDraft' || status === 'submitting'}
          >
            {status === 'savingDraft' ? t('saving') : status === 'draftSaved' ? t('draftSaved') : t('saveDraft')}
          </button>
          <button
            type="submit"
            className="private-button"
            disabled={status === 'savingDraft' || status === 'submitting'}
          >
            {status === 'submitting' ? t('submitting') : status === 'submitted' ? t('submitted') : t('submitQuestionnaire')}
          </button>
        </div>

        {status === 'draftSaved' && (
          <p className="private-form-message is-draft">{t('msgDraft')}</p>
        )}
        {status === 'submitted' && (
          <p className="private-form-message is-success">
            {t('msgSubmittedA')} {countryLabel} {t('msgSubmittedB')}
          </p>
        )}
        {status === 'error' && (
          <p className="private-form-message is-error" role="alert">
            {t('msgError')} {errorMessage}
          </p>
        )}
      </form>
    </div>
  );
}

export default PrivateQuestionnairePage;
