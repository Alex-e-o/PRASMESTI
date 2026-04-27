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

function CheckboxCell({ name }: { name: string }) {
  return (
    <label className="private-questionnaire-check">
      <input type="checkbox" name={name} />
      <span />
    </label>
  );
}

function MatrixSection({
  title,
  rows,
}: {
  title: string;
  rows: string[];
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
              <th className="is-yn">Oui</th>
              <th className="is-yn">Non</th>
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
                <td><CheckboxCell name={`${title}-yes-${index}`} /></td>
                <td><CheckboxCell name={`${title}-no-${index}`} /></td>
                {sectorColumns.map((column, columnIndex) => (
                  <td key={`${row}-${column}`}>
                    <CheckboxCell name={`${title}-sector-${index}-${columnIndex}`} />
                  </td>
                ))}
                <td className="is-notes">
                  <textarea rows={2} name={`${title}-note-${index}`} />
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
  return (
    <div className="private-page-stack">
      <section className="private-surface-card private-questionnaire-shell">
        <div className="private-questionnaire-header">
          <p className="private-section-kicker">Collecte regionale harmonisee</p>
          <h2 className="private-section-title">Questionnaire sur l'alignement aux documents cadres en education</h2>
          <p className="private-section-body">
            Premiere reunion des Ministres en charge de l'education, des sciences, de la technologie et de l'innovation.
            Ce formulaire numerique reprend la structure du questionnaire de reference pour une saisie plus lisible.
          </p>
        </div>

        <section className="private-questionnaire-meta">
          <label className="private-form-field">
            <span>Pays</span>
            <input placeholder="Renseigner le pays" />
          </label>
          <label className="private-form-field">
            <span>Point focal</span>
            <input placeholder="Nom du responsable" />
          </label>
          <label className="private-form-field">
            <span>Email de retour</span>
            <input defaultValue="david.ossene@ceeac-eccas.org" />
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
                  <th rowSpan={2} className="is-question">Niveau de formation</th>
                  <th colSpan={3}>Etablissements publics d'enseignement general</th>
                  <th colSpan={9}>Etablissements publics d'enseignement technique et de formation professionnelle</th>
                  <th colSpan={2}>Outils mis en place</th>
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
                  <th>Oui</th>
                  <th>Non</th>
                </tr>
              </thead>
              <tbody>
                {generalRows.map((row, index) => (
                  <tr key={row}>
                    <td className="is-question">{row}</td>
                    {Array.from({ length: 12 }).map((_, cellIndex) => (
                      <td key={cellIndex}>
                        <input
                          type="number"
                          min="0"
                          name={`general-${index}-${cellIndex}`}
                          className="private-questionnaire-number"
                        />
                      </td>
                    ))}
                    <td><CheckboxCell name={`general-tool-yes-${index}`} /></td>
                    <td><CheckboxCell name={`general-tool-no-${index}`} /></td>
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
                  <th className="is-question">Secteur</th>
                  <th>Oui</th>
                  <th>Non</th>
                  <th>Avant 2015</th>
                  <th>Apres 2015</th>
                  <th>Dispositions prises</th>
                  <th>Obstacles politiques</th>
                  <th>Obstacles financiers</th>
                  <th>Obstacles administratifs</th>
                  <th className="is-notes">Autres difficultes</th>
                </tr>
              </thead>
              <tbody>
                {policyRows.map((row, index) => (
                  <tr key={row}>
                    <td className="is-question">{row}</td>
                    <td><CheckboxCell name={`policy-yes-${index}`} /></td>
                    <td><CheckboxCell name={`policy-no-${index}`} /></td>
                    <td><CheckboxCell name={`policy-before-${index}`} /></td>
                    <td><CheckboxCell name={`policy-after-${index}`} /></td>
                    <td className="is-notes"><textarea rows={2} name={`policy-dispositions-${index}`} /></td>
                    <td><CheckboxCell name={`policy-pol-${index}`} /></td>
                    <td><CheckboxCell name={`policy-fin-${index}`} /></td>
                    <td><CheckboxCell name={`policy-admin-${index}`} /></td>
                    <td className="is-notes"><textarea rows={2} name={`policy-note-${index}`} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <MatrixSection
          title="III - Prise en compte des six principes directeurs de la CESA 16-25"
          rows={sectionThreeRows}
        />

        <MatrixSection
          title="IV - Prise en compte des sept piliers de la CESA 16-25"
          rows={sectionFourRows}
        />

        <MatrixSection
          title="V - Tendance vers la realisation des douze objectifs strategiques de la CESA 16-25"
          rows={sectionFiveRows}
        />

        <MatrixSection
          title="VI - Prise en compte des cibles specifiques en education des ODD"
          rows={sectionSixRows}
        />

        <section className="private-questionnaire-section">
          <div className="private-questionnaire-section-head">
            <h3 className="private-questionnaire-section-title">
              3 - Ces documents sont-ils devenus des instruments normatifs adoptes et mis en oeuvre ?
            </h3>
          </div>
          <div className="private-form-grid">
            <label className="private-form-field">
              <span>Loi</span>
              <textarea rows={4} placeholder="Preciser les lois concernees..." />
            </label>
            <label className="private-form-field">
              <span>Chartes / decrets</span>
              <textarea rows={4} placeholder="Preciser les chartes ou decrets..." />
            </label>
            <label className="private-form-field private-form-field-wide">
              <span>Commentaires complementaires</span>
              <textarea rows={5} placeholder="Ajouter toute precision utile..." />
            </label>
          </div>
        </section>

        <div className="private-form-actions">
          <button type="button" className="private-button private-button-secondary">Enregistrer en brouillon</button>
          <button type="button" className="private-button">Soumettre le questionnaire</button>
        </div>
      </section>
    </div>
  );
}

export default PrivateQuestionnairePage;
