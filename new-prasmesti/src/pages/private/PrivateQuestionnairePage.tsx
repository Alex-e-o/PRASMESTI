import { useEffect, useRef, useState } from 'react';
import { getPrivateUser } from '../../private/auth';
import { privateProfiles } from '../../data/countryProfiles';
import {
  getQuestionnaire,
  saveQuestionnaire,
  type QuestionnaireAnswers,
} from '../../lib/countryStore';

type TriState = '' | 'oui' | 'non';

function TriStateCell({ name, initial }: { name: string; initial?: string }) {
  const [value, setValue] = useState<TriState>((initial as TriState) || '');
  const cycle = () =>
    setValue((current) => (current === '' ? 'oui' : current === 'oui' ? 'non' : ''));
  const stateClass = value === '' ? 'is-empty' : `is-${value}`;
  return (
    <>
      <button
        type="button"
        onClick={cycle}
        className={`private-questionnaire-tristate ${stateClass}`}
        aria-label={name}
      >
        {value === 'oui' ? 'Oui' : value === 'non' ? 'Non' : ''}
      </button>
      <input type="hidden" name={name} value={value} readOnly />
    </>
  );
}

const generalRows = [
  'Pré-primaire',
  'Primaire',
  'Secondaire - 1er cycle',
  'Secondaire - 2nd cycle',
  'ETFP',
  'Enseignement supérieur',
  'Recherche scientifique',
  'Développement technologique',
];

const policyRows = [
  'Développement de la petite enfance',
  "Éducation de la petite enfance",
  'Éducation primaire et secondaire',
  'Alphabétisation',
  'Enseignement technique et formation professionnelle',
  'Enseignement supérieur, développement technologique et innovation',
];

const sectorColumns = [
  'EDPE',
  'École primaire',
  '1er cycle secondaire',
  '2nd cycle secondaire',
  'Enseignement supérieur',
  'Recherche scientifique',
  'Développement technologique',
];

const sectionThreeRows = [
  "Les sociétés du savoir qu'appelle la réalisation de l'Agenda 2063 qui repose sur le capital humain ?",
  "L'éducation holistique, inclusive et équitable soutenue par des conditions d'apprentissage continu tout au long de la vie ?",
  'La bonne gouvernance, le leadership et la responsabilité ?',
  "La mobilité intra-africaine et l'intégration académique ?",
  "Le développement de la science, de la technologie et de l'innovation, impulsé par la créativité et l'esprit d'entreprise ?",
  "L'environnement propice à l'apprentissage, assuré par une bonne alimentation et un état physique et socio-psychologique adéquat ?",
];

const sectionFourRows = [
  "Une volonté politique de redynamiser le secteur de l'éducation et de la formation ?",
  'Une volonté de promouvoir un environnement de paix et de sécurité ?',
  "Une volonté de promouvoir une égalité des genres et une sensibilité aux différences culturelles ?",
  'Une volonté de mobiliser les ressources, notamment les ressources nationales ?',
  'Un renforcement de capacités institutionnel prenant en compte la bonne gouvernance et la transparence ?',
  "Une coalition des acteurs pour un processus participatif crédible autorisant des partenaires solides entre le gouvernement, la société civile et le secteur privé ?",
  "L'orientation et l'accompagnement des apprenants à tous les niveaux et dans les différents types de formation ?",
];

const sectionFiveRows = [
  "OS1 - Revitaliser la profession enseignante pour en assurer la qualité, la pertinence et l'adéquation à tous les niveaux d'éducation",
  "OS2 - Construire, réhabiliter et préserver les infrastructures scolaires et développer des politiques assurant un environnement serein et propice à l'apprentissage",
  "OS3 - Exploiter la capacité des TIC pour améliorer l'accès, la qualité de l'éducation et la gestion des systèmes éducatifs",
  "OS4 - Assurer l'acquisition des connaissances et compétences requises ainsi que l'amélioration des taux d'achèvement",
  "OS5 - Accélérer les processus conduisant à la parité et à l'équité des genres",
  "OS6 - Lancer des programmes ambitieux et efficaces pour éradiquer l'analphabétisme",
  'OS7 - Renforcer les programmes de sciences et de mathématiques chez les jeunes et promouvoir la culture scientifique',
  "OS8 - Accroître les potentialités en formation technique et professionnelle dans l'enseignement secondaire et supérieur",
  "OS9 - Redynamiser et accroître l'accès à l'enseignement supérieur, à la recherche et à l'innovation",
  "OS10 - Promouvoir l'éducation pour la paix, la prévention et la résolution des conflits à tous les niveaux",
  "OS11 - Améliorer l'administration du système éducatif et l'outil statistique",
  "OS12 - Organiser une coalition de toutes les parties prenantes en faveur de l'éducation",
];

const sectionSixRows = [
  "4.1 Faire en sorte que toutes les filles et tous les garçons suivent, sur un pied d'égalité, un cycle complet d'enseignement primaire et secondaire gratuit et de qualité d'ici 2030 ?",
  "4.2 Faire en sorte que toutes les filles et tous les garçons aient accès à des activités de développement et de soins de la petite enfance et à une éducation préscolaire de qualité ?",
  "4.3 Faire en sorte que les femmes et les hommes aient tous accès dans des conditions d'égalité à un enseignement technique, professionnel ou tertiaire de qualité et d'un coût abordable ?",
  "4.4 Augmenter considérablement le nombre de jeunes et d'adultes disposant des compétences, notamment techniques et professionnelles, nécessaires à l'emploi ?",
  "4.5 Éliminer les inégalités entre les sexes dans le domaine de l'éducation et assurer l'égalité d'accès des personnes vulnérables ?",
  "4.6 Veiller à ce que tous les jeunes et une proportion considérable d'adultes sachent lire, écrire et compter ?",
  "4.7 Faire en sorte que tous les élèves acquièrent les connaissances et compétences nécessaires pour promouvoir le développement durable ?",
  '4.a Faire construire des établissements scolaires adaptés aux enfants, aux personnes handicapées et aux deux sexes ?',
  "4.b D'ici à 2020, augmenter considérablement le nombre de bourses d'études offertes aux pays en développement ?",
  "4.c D'ici à 2030, accroître considérablement le nombre d'enseignants qualifiés, notamment au moyen de la coopération internationale ?",
];

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
  return (
    <section className="private-questionnaire-section">
      <div className="private-questionnaire-section-head">
        <h3 className="private-questionnaire-section-title">{title}</h3>
      </div>

      <div className="private-table-wrap">
        <table className="private-questionnaire-table private-questionnaire-table-matrix">
          <thead>
            <tr>
              <th className="is-question">Question / axe</th>
              {sectorColumns.map((column) => (
                <th key={column}>{column}</th>
              ))}
              <th className="is-notes">Observations</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr key={row}>
                <td className="is-question">{row}</td>
                {sectorColumns.map((column, columnIndex) => {
                  const field = `${name}-sector-${index}-${columnIndex}`;
                  return (
                    <td key={`${row}-${column}`} className="is-tristate">
                      <TriStateCell name={field} initial={answers[field]} />
                    </td>
                  );
                })}
                <td className="is-notes">
                  <textarea rows={2} name={`${name}-note-${index}`} defaultValue={answers[`${name}-note-${index}`] ?? ''} />
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

  const [answers, setAnswers] = useState<QuestionnaireAnswers | null>(null);
  const [status, setStatus] = useState<'idle' | 'saving' | 'saved'>('idle');
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    let active = true;
    getQuestionnaire(slug).then((data) => {
      if (active) setAnswers(data ?? {});
    });
    return () => {
      active = false;
    };
  }, [slug]);

  const save = async () => {
    if (!formRef.current) return;
    setStatus('saving');
    const formData = new FormData(formRef.current);
    const next: QuestionnaireAnswers = {};
    formData.forEach((value, key) => {
      next[key] = typeof value === 'string' ? value : '';
    });
    await saveQuestionnaire(slug, next);
    setAnswers(next);
    setStatus('saved');
    window.setTimeout(() => setStatus('idle'), 3000);
  };

  if (!answers) {
    return (
      <div className="private-page-stack">
        <section className="private-surface-card private-questionnaire-shell">
          <p className="private-section-body">Chargement du questionnaire…</p>
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
          void save();
        }}
        className="private-surface-card private-questionnaire-shell"
      >
        <div className="private-questionnaire-header">
          <p className="private-section-kicker">Collecte regionale harmonisee — {countryLabel}</p>
          <h2 className="private-section-title">Questionnaire sur l'alignement aux documents cadres en education</h2>
          <p className="private-section-body">
            Premiere reunion des Ministres en charge de l'education, des sciences, de la technologie et de l'innovation.
            Ce formulaire numerique reprend la structure du questionnaire de reference pour une saisie plus lisible.
          </p>
        </div>

        <section className="private-questionnaire-meta">
          <label className="private-form-field">
            <span>Pays</span>
            <input name="meta-pays" defaultValue={answers['meta-pays'] || countryLabel} placeholder="Renseigner le pays" />
          </label>
          <label className="private-form-field">
            <span>Point focal</span>
            <input name="meta-point-focal" defaultValue={answers['meta-point-focal'] ?? ''} placeholder="Nom du responsable" />
          </label>
          <label className="private-form-field">
            <span>Email de retour</span>
            <input name="meta-email" defaultValue={answers['meta-email'] || 'david.ossene@ceeac-eccas.org'} />
          </label>
        </section>

        <section className="private-questionnaire-section">
          <div className="private-questionnaire-section-head">
            <h3 className="private-questionnaire-section-title">I - Generalites</h3>
          </div>

          <div className="private-table-wrap">
            <table className="private-questionnaire-table">
              <thead>
                <tr>
                  <th rowSpan={3} className="is-question">Niveau de formation</th>
                  <th colSpan={12}>Outils mis en place</th>
                </tr>
                <tr>
                  <th colSpan={3}>Etablissements publics d'enseignement general</th>
                  <th colSpan={9}>Etablissements publics d'enseignement technique et de formation professionnelle</th>
                </tr>
                <tr>
                  <th>Zone urbaine</th>
                  <th>Zone semi-urbaine</th>
                  <th>Zone rurale</th>
                  <th>SP urbain</th>
                  <th>SS urbain</th>
                  <th>ST urbain</th>
                  <th>SP semi</th>
                  <th>SS semi</th>
                  <th>ST semi</th>
                  <th>SP rural</th>
                  <th>SS rural</th>
                  <th>ST rural</th>
                </tr>
              </thead>
              <tbody>
                {generalRows.map((row, index) => (
                  <tr key={row}>
                    <td className="is-question">{row}</td>
                    {Array.from({ length: 12 }).map((_, cellIndex) => {
                      const field = `general-${index}-${cellIndex}`;
                      return (
                        <td key={cellIndex} className="is-tristate">
                          <TriStateCell name={field} initial={answers[field]} />
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
            <h3 className="private-questionnaire-section-title">II - Documents cadres et dispositions nationales</h3>
          </div>

          <div className="private-table-wrap">
            <table className="private-questionnaire-table private-questionnaire-table-policy">
              <thead>
                <tr>
                  <th rowSpan={2} className="is-question">Secteur</th>
                  <th rowSpan={2}>Dispositions prises</th>
                  <th colSpan={2}>Obstacles politiques</th>
                  <th colSpan={2}>Obstacles financiers</th>
                  <th colSpan={2}>Obstacles administratifs</th>
                  <th rowSpan={2} className="is-notes">Autres difficultes</th>
                </tr>
                <tr>
                  <th>Avant 2015</th>
                  <th>Apres 2015</th>
                  <th>Avant 2015</th>
                  <th>Apres 2015</th>
                  <th>Avant 2015</th>
                  <th>Apres 2015</th>
                </tr>
              </thead>
              <tbody>
                {policyRows.map((row, index) => (
                  <tr key={row}>
                    <td className="is-question">{row}</td>
                    <td className="is-notes"><textarea rows={2} name={`policy-dispositions-${index}`} defaultValue={answers[`policy-dispositions-${index}`] ?? ''} /></td>
                    <td className="is-tristate"><TriStateCell name={`policy-pol-before-${index}`} initial={answers[`policy-pol-before-${index}`]} /></td>
                    <td className="is-tristate"><TriStateCell name={`policy-pol-after-${index}`} initial={answers[`policy-pol-after-${index}`]} /></td>
                    <td className="is-tristate"><TriStateCell name={`policy-fin-before-${index}`} initial={answers[`policy-fin-before-${index}`]} /></td>
                    <td className="is-tristate"><TriStateCell name={`policy-fin-after-${index}`} initial={answers[`policy-fin-after-${index}`]} /></td>
                    <td className="is-tristate"><TriStateCell name={`policy-admin-before-${index}`} initial={answers[`policy-admin-before-${index}`]} /></td>
                    <td className="is-tristate"><TriStateCell name={`policy-admin-after-${index}`} initial={answers[`policy-admin-after-${index}`]} /></td>
                    <td className="is-notes"><textarea rows={2} name={`policy-note-${index}`} defaultValue={answers[`policy-note-${index}`] ?? ''} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <MatrixSection
          title="III - Prise en compte des six principes directeurs de la CESA 26-35"
          name="principes"
          rows={sectionThreeRows}
          answers={answers}
        />

        <MatrixSection
          title="IV - Prise en compte des sept piliers de la CESA 26-35"
          name="piliers"
          rows={sectionFourRows}
          answers={answers}
        />

        <MatrixSection
          title="V - Tendance vers la realisation des douze objectifs strategiques de la CESA 26-35"
          name="objectifs"
          rows={sectionFiveRows}
          answers={answers}
        />

        <MatrixSection
          title="VI - Prise en compte des cibles specifiques en education des ODD"
          name="cibles"
          rows={sectionSixRows}
          answers={answers}
        />

        <section className="private-questionnaire-section">
          <div className="private-questionnaire-section-head">
            <h3 className="private-questionnaire-section-title">
              3 - Ces documents sont-ils devenus des instruments normatifs adoptés et mis en œuvre ?
            </h3>
          </div>
          <div className="private-form-grid">
            <label className="private-form-field">
              <span>Loi</span>
              <textarea rows={4} name="extra-loi" defaultValue={answers['extra-loi'] ?? ''} placeholder="Preciser les lois concernees..." />
            </label>
            <label className="private-form-field">
              <span>Chartes / decrets</span>
              <textarea rows={4} name="extra-chartes" defaultValue={answers['extra-chartes'] ?? ''} placeholder="Preciser les chartes ou decrets..." />
            </label>
            <label className="private-form-field private-form-field-wide">
              <span>Commentaires complementaires</span>
              <textarea rows={5} name="extra-commentaires" defaultValue={answers['extra-commentaires'] ?? ''} placeholder="Ajouter toute precision utile..." />
            </label>
          </div>
        </section>

        <div className="private-form-actions">
          <button
            type="button"
            className="private-button private-button-secondary"
            onClick={() => void save()}
            disabled={status === 'saving'}
          >
            Enregistrer en brouillon
          </button>
          <button type="submit" className="private-button" disabled={status === 'saving'}>
            {status === 'saving' ? 'Enregistrement…' : status === 'saved' ? 'Enregistré ✓' : 'Soumettre le questionnaire'}
          </button>
        </div>

        {status === 'saved' && (
          <p className="private-section-body" style={{ marginTop: '0.75rem', color: '#2b7f5c', fontWeight: 600 }}>
            Réponses enregistrées. Les indicateurs publics « État de mise en œuvre » du {countryLabel} ont été recalculés.
          </p>
        )}
      </form>
    </div>
  );
}

export default PrivateQuestionnairePage;
