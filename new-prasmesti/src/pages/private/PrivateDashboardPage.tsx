import { Link } from 'react-router-dom';
import { Activity, BookOpen, FolderKanban, GraduationCap } from 'lucide-react';
import { usePrivateI18n, type PVKey } from '../../private/privateI18n';

const stats: {
  slug: string;
  labelKey: PVKey;
  value: string;
  delta: string;
  tone: string;
  icon: typeof BookOpen;
  detailKey: PVKey;
}[] = [
  { slug: 'etablissements', labelKey: 'statEstablishments', value: '34 123', delta: '+8,34%', tone: 'positive', icon: BookOpen, detailKey: 'detailEstablishments' },
  { slug: 'projets', labelKey: 'statProjects', value: '63', delta: '+12', tone: 'positive', icon: FolderKanban, detailKey: 'detailProjects' },
  { slug: 'alphabetisation', labelKey: 'statLiteracy', value: '78%', delta: '-2,64%', tone: 'negative', icon: Activity, detailKey: 'detailLiteracy' },
  { slug: 'formation', labelKey: 'statTraining', value: '6 482', delta: '+5,79%', tone: 'positive', icon: GraduationCap, detailKey: 'detailTraining' },
];

function PrivateDashboardPage() {
  const { t } = usePrivateI18n();
  return (
    <div className="private-page-stack">
      <section className="private-hero-card">
        <div>
          <p className="private-section-kicker">{t('overview')}</p>
          <h2 className="private-section-title">{t('dashboardTitle')}</h2>
          <p className="private-section-body">{t('dashboardBody')}</p>
        </div>
        <div className="private-hero-badge">2026</div>
      </section>

      <section className="private-stats-grid">
        {stats.map(({ slug, labelKey, value, delta, tone, icon: Icon, detailKey }) => (
          <Link key={slug} to={`/private/indicateur/${slug}`} className="private-stat-card private-stat-card-link">
            <div className="private-stat-head">
              <div className="private-stat-icon">
                <Icon size={18} />
              </div>
              <span className={`private-stat-delta is-${tone}`}>{delta}</span>
            </div>
            <p className="private-stat-label">{t(labelKey)}</p>
            <h3 className="private-stat-value">{value}</h3>
            <p className="private-stat-detail">{t(detailKey)}</p>
          </Link>
        ))}
      </section>
    </div>
  );
}

export default PrivateDashboardPage;
