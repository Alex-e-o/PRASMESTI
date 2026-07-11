import { useEffect, useRef, useState } from 'react';
import { getPrivateUser } from '../../private/auth';
import { privateProfiles } from '../../data/countryProfiles';
import { usePrivateI18n } from '../../private/privateI18n';
import {
  getQuestionnaire,
  saveQuestionnaire,
  saveQuestionnaireDraft,
  type QuestionnaireAnswers,
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

function countryLabelFromSlug(slug: string): string {
  const profile = privateProfiles.find((p) => p.countrySlug === slug);
  if (profile) return profile.name.replace('Point focal — ', '');
  return slug.charAt(0).toUpperCase() + slug.slice(1);
}

function PrivateQuestionnairePage() {
  const user = getPrivateUser();
  const slug = user.countrySlug ?? 'gabon';
  const countryLabel = countryLabelFromSlug(slug);
  const { t, list } = usePrivateI18n();

  const [answers, setAnswers] = useState<QuestionnaireAnswers | null>(null);
  const [status, setStatus] = useState<'idle' | 'savingDraft' | 'draftSaved' | 'submitting' | 'submitted'>('idle');
  const formRef = useRef<HTMLFormElement>(null);

  const generalRows = list('generalRows');
  const policyRows = list('policyRows');
  const zoneCodes = [
    t('zoneUrban'), t('zoneSemi'), t('zoneRural'),
    'SP urbain', 'SS urbain', 'ST urbain', 'SP semi', 'SS semi', 'ST semi', 'SP rural', 'SS rural', 'ST rural',
  ];

  useEffect(() => {
    let active = true;
    getQuestionnaire(slug).then((data) => {
      if (active) setAnswers(data ?? {});
    });
    return () => {
      active = false;
    };
  }, [slug]);

  const save = async (mode: 'draft' | 'submit') => {
    if (!formRef.current) return;
    setStatus(mode === 'submit' ? 'submitting' : 'savingDraft');
    const formData = new FormData(formRef.current);
    const next: QuestionnaireAnswers = {};
    formData.forEach((value, key) => {
      next[key] = typeof value === 'string' ? value : '';
    });
    if (mode === 'submit') {
      await saveQuestionnaire(slug, next); // recalcule + publie les indicateurs publics
    } else {
      await saveQuestionnaireDraft(slug, next); // réponses seules, rien de publié
    }
    setAnswers(next);
    setStatus(mode === 'submit' ? 'submitted' : 'draftSaved');
    window.setTimeout(() => setStatus('idle'), 4000);
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
          <p className="private-section-body" style={{ marginTop: '0.75rem', color: '#47597a', fontWeight: 600 }}>
            {t('msgDraft')}
          </p>
        )}
        {status === 'submitted' && (
          <p className="private-section-body" style={{ marginTop: '0.75rem', color: '#2b7f5c', fontWeight: 600 }}>
            {t('msgSubmittedA')} {countryLabel} {t('msgSubmittedB')}
          </p>
        )}
      </form>
    </div>
  );
}

export default PrivateQuestionnairePage;
