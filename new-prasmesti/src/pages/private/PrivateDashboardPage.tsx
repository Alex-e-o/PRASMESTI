import { Activity, BookOpen, FolderKanban, GraduationCap } from 'lucide-react';

const stats = [
  { label: 'Etablissements', value: '34 123', delta: '+8.34%', tone: 'positive', icon: BookOpen, detail: 'Liste des etablissements' },
  { label: 'Projets en cours', value: '63', delta: '+12', tone: 'positive', icon: FolderKanban, detail: 'Projets finances' },
  { label: 'Alphabetisation', value: '78%', delta: '-2.64%', tone: 'negative', icon: Activity, detail: "Taux d'alphabetisation" },
  { label: 'Formation', value: '6 482', delta: '+5.79%', tone: 'positive', icon: GraduationCap, detail: 'Enseignants formes' },
];

function PrivateDashboardPage() {
  return (
    <div className="private-page-stack">
      <section className="private-hero-card">
        <div>
          <p className="private-section-kicker">Vue d'ensemble</p>
          <h2 className="private-section-title">Tableau de bord decisionnel</h2>
          <p className="private-section-body">
            Un point d'entree plus lisible pour suivre les indicateurs de l'ecosysteme regional, les projets actifs et les zones qui demandent une intervention rapide.
          </p>
        </div>
        <div className="private-hero-badge">2026</div>
      </section>

      <section className="private-stats-grid">
        {stats.map(({ label, value, delta, tone, icon: Icon, detail }) => (
          <article key={label} className="private-stat-card">
            <div className="private-stat-head">
              <div className="private-stat-icon">
                <Icon size={18} />
              </div>
              <span className={`private-stat-delta is-${tone}`}>{delta}</span>
            </div>
            <p className="private-stat-label">{label}</p>
            <h3 className="private-stat-value">{value}</h3>
            <p className="private-stat-detail">{detail}</p>
          </article>
        ))}
      </section>

      <section className="private-two-col-grid">
        <article className="private-surface-card">
          <div className="private-surface-head">
            <h3 className="private-surface-title">Points de vigilance</h3>
          </div>
          <div className="private-alert-list">
            <div className="private-alert-row">
              <span className="private-alert-dot is-warning" />
              <div>
                <p className="private-alert-title">Donnees ETFP incompletes</p>
                <p className="private-alert-body">Trois pays n'ont pas finalise les chiffres ruraux du dernier trimestre.</p>
              </div>
            </div>
            <div className="private-alert-row">
              <span className="private-alert-dot is-positive" />
              <div>
                <p className="private-alert-title">Campagne de mise a jour relancee</p>
                <p className="private-alert-body">Le questionnaire harmonise est pret pour une nouvelle collecte.</p>
              </div>
            </div>
            <div className="private-alert-row">
              <span className="private-alert-dot is-danger" />
              <div>
                <p className="private-alert-title">Budget en baisse sur la formation</p>
                <p className="private-alert-body">Le rythme actuel ne couvre pas les besoins de renforcement des capacites prevus.</p>
              </div>
            </div>
          </div>
        </article>

        <article className="private-surface-card">
          <div className="private-surface-head">
            <h3 className="private-surface-title">Progression regionale</h3>
          </div>
          <div className="private-progress-stack">
            <div className="private-progress-row">
              <div className="private-progress-copy">
                <span>Questionnaires completes</span>
                <strong>72%</strong>
              </div>
              <div className="private-progress-bar"><span style={{ width: '72%' }} /></div>
            </div>
            <div className="private-progress-row">
              <div className="private-progress-copy">
                <span>Projets valides</span>
                <strong>58%</strong>
              </div>
              <div className="private-progress-bar"><span style={{ width: '58%' }} /></div>
            </div>
            <div className="private-progress-row">
              <div className="private-progress-copy">
                <span>Rapports consolides</span>
                <strong>81%</strong>
              </div>
              <div className="private-progress-bar"><span style={{ width: '81%' }} /></div>
            </div>
          </div>
        </article>
      </section>
    </div>
  );
}

export default PrivateDashboardPage;
