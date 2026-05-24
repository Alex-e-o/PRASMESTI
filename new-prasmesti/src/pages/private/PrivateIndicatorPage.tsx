import { Link, Navigate, useParams } from 'react-router-dom';
import { Activity, ArrowLeft, BookOpen, FolderKanban, GraduationCap } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

type Tone = 'positive' | 'negative' | 'neutral';
type Row = { pays: string; valeur: string; delta: string; tone: Tone };

type Indicator = {
  label: string;
  value: string;
  delta: string;
  tone: Tone;
  icon: LucideIcon;
  intro: string;
  kpis: { label: string; value: string }[];
  tableTitle: string;
  columns: [string, string, string];
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
  'Guinée Équatoriale',
  'Sao Tomé-et-Principe',
];

const build = (values: [string, string, Tone][]): Row[] =>
  COUNTRIES.map((pays, i) => ({ pays, valeur: values[i][0], delta: values[i][1], tone: values[i][2] }));

const INDICATORS: Record<string, Indicator> = {
  etablissements: {
    label: 'Établissements',
    value: '34 123',
    delta: '+8,34%',
    tone: 'positive',
    icon: BookOpen,
    intro:
      "Répartition des établissements d'éducation, de formation, de sciences et de technologie recensés dans l'espace CEEAC.",
    kpis: [
      { label: 'Public', value: '71%' },
      { label: 'Privé', value: '29%' },
      { label: 'Zones rurales', value: '46%' },
    ],
    tableTitle: 'Établissements recensés par État membre',
    columns: ['État membre', 'Établissements', 'Évolution'],
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
    label: 'Projets en cours',
    value: '63',
    delta: '+12',
    tone: 'positive',
    icon: FolderKanban,
    intro:
      'Projets régionaux et nationaux actuellement financés et en cours de mise en œuvre dans le secteur EFSTI.',
    kpis: [
      { label: 'Régionaux', value: '21' },
      { label: 'Nationaux', value: '42' },
      { label: 'Cofinancés', value: '37' },
    ],
    tableTitle: 'Projets actifs par État membre',
    columns: ['État membre', 'Projets', 'Nouveaux'],
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
    label: 'Alphabétisation',
    value: '78%',
    delta: '-2,64%',
    tone: 'negative',
    icon: Activity,
    intro:
      "Taux d'alphabétisation moyen de la région et son évolution récente par État membre.",
    kpis: [
      { label: 'Femmes', value: '74%' },
      { label: 'Hommes', value: '82%' },
      { label: 'Jeunes 15-24', value: '85%' },
    ],
    tableTitle: "Taux d'alphabétisation par État membre",
    columns: ['État membre', 'Taux', 'Évolution'],
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
    label: 'Formation',
    value: '6 482',
    delta: '+5,79%',
    tone: 'positive',
    icon: GraduationCap,
    intro:
      'Enseignants et formateurs formés dans le cadre des programmes régionaux de renforcement des capacités.',
    kpis: [
      { label: 'Présentiel', value: '64%' },
      { label: 'À distance', value: '36%' },
      { label: 'Certifiés', value: '88%' },
    ],
    tableTitle: 'Enseignants formés par État membre',
    columns: ['État membre', 'Formés', 'Évolution'],
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
  const data = slug ? INDICATORS[slug] : undefined;

  if (!data) {
    return <Navigate to="/private/dashboard" replace />;
  }

  const Icon = data.icon;

  return (
    <div className="private-page-stack">
      <Link to="/private/dashboard" className="private-backlink">
        <ArrowLeft size={16} />
        <span>Retour au tableau de bord</span>
      </Link>

      <section className="private-hero-card">
        <div>
          <p className="private-section-kicker">Indicateur</p>
          <h2 className="private-section-title">{data.label}</h2>
          <p className="private-section-body">{data.intro}</p>
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
          <p className="private-stat-label">Valeur régionale</p>
          <h3 className="private-stat-value">{data.value}</h3>
        </article>
        {data.kpis.map((kpi) => (
          <article key={kpi.label} className="private-stat-card">
            <p className="private-stat-label">{kpi.label}</p>
            <h3 className="private-stat-value">{kpi.value}</h3>
          </article>
        ))}
      </section>

      <section className="private-surface-card">
        <div className="private-surface-head">
          <h3 className="private-surface-title">{data.tableTitle}</h3>
        </div>
        <div className="private-table-wrap">
          <table className="private-questionnaire-table">
            <thead>
              <tr>
                <th className="is-question">{data.columns[0]}</th>
                <th>{data.columns[1]}</th>
                <th>{data.columns[2]}</th>
              </tr>
            </thead>
            <tbody>
              {data.rows.map((row) => (
                <tr key={row.pays}>
                  <td className="is-question">{row.pays}</td>
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
