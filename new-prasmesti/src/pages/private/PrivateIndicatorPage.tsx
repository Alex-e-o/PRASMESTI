import { Link, Navigate, useParams } from 'react-router-dom';
import { Activity, ArrowLeft, BookOpen, FolderKanban, GraduationCap } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { usePrivateI18n, type PVKey } from '../../private/privateI18n';

type Tone = 'positive' | 'negative' | 'neutral';
type Row = { pays: string; valeur: string; delta: string; tone: Tone };

type Indicator = {
  labelKey: PVKey;
  value: string;
  delta: string;
  tone: Tone;
  icon: LucideIcon;
  introKey: PVKey;
  kpis: { labelKey: PVKey; value: string }[];
  tableTitleKey: PVKey;
  columns: [PVKey, PVKey, PVKey];
  rows: Row[];
};

const COUNTRIES = [
  'République Démocratique du Congo',
  'Angola',
  'Cameroun',
  'Tchad',
  'République du Congo',
  'Gabon',
  'Rwanda',
  'Burundi',
  'Centrafrique',
  'Guinée équatoriale',
  'Sao Tomé-et-Principe',
];

const build = (values: [string, string, Tone][]): Row[] =>
  COUNTRIES.map((pays, i) => ({ pays, valeur: values[i][0], delta: values[i][1], tone: values[i][2] }));

const INDICATORS: Record<string, Indicator> = {
  etablissements: {
    labelKey: 'statEstablishments',
    value: '34 123',
    delta: '+8,34%',
    tone: 'positive',
    icon: BookOpen,
    introKey: 'indIntroEstab',
    kpis: [
      { labelKey: 'kpiPublic', value: '71%' },
      { labelKey: 'kpiPrivate', value: '29%' },
      { labelKey: 'kpiRural', value: '46%' },
    ],
    tableTitleKey: 'tableEstab',
    columns: ['colMemberState', 'statEstablishments', 'colEvolution'],
    rows: build([
      ['9 240', '+9,1%', 'positive'],
      ['5 180', '+7,4%', 'positive'],
      ['4 870', '+8,9%', 'positive'],
      ['2 960', '+6,2%', 'positive'],
      ['2 110', '+8,0%', 'positive'],
      ['1 740', '+5,1%', 'positive'],
      ['2 380', '+11,2%', 'positive'],
      ['1 990', '+7,7%', 'positive'],
      ['1 560', '+4,3%', 'positive'],
      ['1 290', '+6,8%', 'positive'],
      ['803', '+3,9%', 'positive'],
    ]),
  },
  projets: {
    labelKey: 'statProjects',
    value: '63',
    delta: '+12',
    tone: 'positive',
    icon: FolderKanban,
    introKey: 'indIntroProjects',
    kpis: [
      { labelKey: 'kpiRegional', value: '21' },
      { labelKey: 'kpiNational', value: '42' },
      { labelKey: 'kpiCofunded', value: '37' },
    ],
    tableTitleKey: 'tableProjects',
    columns: ['colMemberState', 'colProjectsShort', 'colNew'],
    rows: build([
      ['11', '+2', 'positive'],
      ['8', '+1', 'positive'],
      ['9', '+2', 'positive'],
      ['5', '+1', 'positive'],
      ['6', '+1', 'positive'],
      ['4', '+1', 'positive'],
      ['7', '+2', 'positive'],
      ['4', '+1', 'positive'],
      ['3', '0', 'neutral'],
      ['3', '+1', 'positive'],
      ['3', '0', 'neutral'],
    ]),
  },
  alphabetisation: {
    labelKey: 'statLiteracy',
    value: '78%',
    delta: '-2,64%',
    tone: 'negative',
    icon: Activity,
    introKey: 'indIntroLiteracy',
    kpis: [
      { labelKey: 'kpiWomen', value: '74%' },
      { labelKey: 'kpiMen', value: '82%' },
      { labelKey: 'kpiYouth', value: '85%' },
    ],
    tableTitleKey: 'tableLiteracy',
    columns: ['colMemberState', 'colRate', 'colEvolution'],
    rows: build([
      ['79%', '-1,8%', 'negative'],
      ['72%', '-3,1%', 'negative'],
      ['77%', '+0,9%', 'positive'],
      ['48%', '-4,2%', 'negative'],
      ['80%', '+1,2%', 'positive'],
      ['84%', '+0,6%', 'positive'],
      ['75%', '+2,4%', 'positive'],
      ['74%', '-2,0%', 'negative'],
      ['56%', '-5,1%', 'negative'],
      ['81%', '+0,3%', 'positive'],
      ['92%', '+1,5%', 'positive'],
    ]),
  },
  formation: {
    labelKey: 'statTraining',
    value: '6 482',
    delta: '+5,79%',
    tone: 'positive',
    icon: GraduationCap,
    introKey: 'indIntroTraining',
    kpis: [
      { labelKey: 'kpiInPerson', value: '64%' },
      { labelKey: 'kpiRemote', value: '36%' },
      { labelKey: 'kpiCertified', value: '88%' },
    ],
    tableTitleKey: 'tableTraining',
    columns: ['colMemberState', 'colTrained', 'colEvolution'],
    rows: build([
      ['1 640', '+6,2%', 'positive'],
      ['820', '+4,8%', 'positive'],
      ['980', '+7,1%', 'positive'],
      ['420', '+3,4%', 'positive'],
      ['510', '+5,5%', 'positive'],
      ['380', '+4,1%', 'positive'],
      ['760', '+9,3%', 'positive'],
      ['360', '+5,0%', 'positive'],
      ['240', '+2,2%', 'positive'],
      ['210', '+4,6%', 'positive'],
      ['162', '+3,0%', 'positive'],
    ]),
  },
};

function PrivateIndicatorPage() {
  const { slug } = useParams<{ slug: string }>();
  const { t } = usePrivateI18n();
  const data = slug ? INDICATORS[slug] : undefined;

  if (!data) {
    return <Navigate to="/private/dashboard" replace />;
  }

  const Icon = data.icon;

  return (
    <div className="private-page-stack">
      <Link to="/private/dashboard" className="private-backlink">
        <ArrowLeft size={16} />
        <span>{t('indBack')}</span>
      </Link>

      <section className="private-hero-card">
        <div>
          <p className="private-section-kicker">{t('indKicker')}</p>
          <h2 className="private-section-title">{t(data.labelKey)}</h2>
          <p className="private-section-body">{t(data.introKey)}</p>
        </div>
        <div className="private-hero-badge">
          <Icon size={30} />
        </div>
      </section>

      <section className="private-stats-grid">
        <article className="private-stat-card">
          <div className="private-stat-head">
            <div className="private-stat-icon">
              <Icon size={18} />
            </div>
            <span className={`private-stat-delta is-${data.tone}`}>{data.delta}</span>
          </div>
          <p className="private-stat-label">{t('indRegionalValue')}</p>
          <h3 className="private-stat-value">{data.value}</h3>
        </article>
        {data.kpis.map((kpi) => (
          <article key={kpi.labelKey} className="private-stat-card">
            <p className="private-stat-label">{t(kpi.labelKey)}</p>
            <h3 className="private-stat-value">{kpi.value}</h3>
          </article>
        ))}
      </section>

      <section className="private-surface-card">
        <div className="private-surface-head">
          <h3 className="private-surface-title">{t(data.tableTitleKey)}</h3>
        </div>
        <div className="private-table-wrap">
          <table className="private-questionnaire-table">
            <thead>
              <tr>
                <th scope="col" className="is-question">{t(data.columns[0])}</th>
                <th scope="col">{t(data.columns[1])}</th>
                <th scope="col">{t(data.columns[2])}</th>
              </tr>
            </thead>
            <tbody>
              {data.rows.map((row) => (
                <tr key={row.pays}>
                  <th scope="row" className="is-question">{row.pays}</th>
                  <td>{row.valeur}</td>
                  <td>
                    <span className={`private-stat-delta is-${row.tone}`}>{row.delta}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

export default PrivateIndicatorPage;
