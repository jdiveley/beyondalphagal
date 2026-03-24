import { Globe } from 'lucide-react'
import PageHero from '../components/PageHero'
import styles from './InfoPage.module.css'
import gstyles from './GlobalStats.module.css'

const regions = [
  {
    region: 'United States',
    tick: 'Lone Star Tick (Amblyomma americanum)',
    notes: 'Highest documented case burden globally. Southeastern states (Virginia, North Carolina, Tennessee, Missouri) are hotspots. CDC estimated 34,000+ suspected cases 2010–2018; true number likely 450,000+.',
    trend: 'Expanding northward and westward with climate change.',
  },
  {
    region: 'Australia',
    tick: 'Paralysis Tick (Ixodes holocyclus)',
    notes: 'Well-documented in eastern coastal regions. Australian researchers independently described the syndrome around the same time as U.S. researchers.',
    trend: 'Stable range; high awareness among Australian allergists.',
  },
  {
    region: 'Western Europe',
    tick: 'Castor Bean Tick (Ixodes ricinus)',
    notes: 'Cases reported in France, Germany, Sweden, Switzerland, and the UK. Prevalence lower than U.S. but growing recognition.',
    trend: 'Tick range expanding with warmer winters.',
  },
  {
    region: 'Central Europe',
    tick: 'Ixodes ricinus; Haemaphysalis spp.',
    notes: 'Cases described in Austria, Czech Republic, and surrounding countries. Less systematically studied than Western Europe.',
    trend: 'Emerging recognition; likely underdiagnosed.',
  },
  {
    region: 'East Asia',
    tick: 'Haemaphysalis longicornis (Asian Longhorned Tick)',
    notes: 'Cases documented in Japan and South Korea. The Asian Longhorned Tick has now invaded the eastern United States, raising new concerns.',
    trend: 'Invasive tick species in U.S. may increase future case counts.',
  },
  {
    region: 'South Africa',
    tick: 'Various Amblyomma & Rhipicephalus spp.',
    notes: 'Alpha-gal IgE documented in populations exposed to bites. Research is ongoing on clinical presentations.',
    trend: 'Emerging research; prevalence not fully characterized.',
  },
  {
    region: 'Central & South America',
    tick: 'Amblyomma spp.',
    notes: 'Limited published data, but serologic surveys suggest sensitization exists. Likely underdiagnosed due to limited allergy testing infrastructure.',
    trend: 'Needs further epidemiological study.',
  },
]

const stats = [
  { label: 'Estimated U.S. Cases (2010–2022)', value: '450,000+', note: 'CDC estimate; true number unknown due to underdiagnosis' },
  { label: 'Avg. Time to Diagnosis', value: '7 years', note: 'Many patients see multiple physicians before AGS is identified' },
  { label: 'Countries with Reported Cases', value: '15+', note: 'Cases described across six continents' },
  { label: 'IgE Alpha-Gal Test Sensitivity', value: '~97%', note: 'When performed by specialized labs' },
  { label: 'U.S. States with Lone Star Tick', value: '35+', note: 'Range expanding northward annually' },
  { label: 'Annual New U.S. Cases (est.)', value: '96,000', note: 'Based on tick bite rates and sensitization studies' },
]

export default function GlobalStats() {
  return (
    <div>
      <PageHero
        icon={Globe}
        title="Global Statistics & Distribution"
        subtitle="Alpha Gal Syndrome is a worldwide phenomenon tied to tick species on every inhabited continent."
      />
      <section className={styles.content}>
        <div className={styles.inner}>
          <h2 className={styles.sectionTitle}>Key Numbers</h2>
          <div className={gstyles.statsGrid}>
            {stats.map(({ label, value, note }) => (
              <div key={label} className={gstyles.statCard}>
                <div className={gstyles.statValue}>{value}</div>
                <div className={gstyles.statLabel}>{label}</div>
                <div className={gstyles.statNote}>{note}</div>
              </div>
            ))}
          </div>

          <h2 className={styles.sectionTitle}>Regional Breakdown</h2>
          <div className={gstyles.regionList}>
            {regions.map(({ region, tick, notes, trend }) => (
              <div key={region} className={gstyles.regionCard}>
                <div className={gstyles.regionHeader}>
                  <h3>{region}</h3>
                  <span className={gstyles.tickBadge}>{tick}</span>
                </div>
                <p>{notes}</p>
                <p className={gstyles.trend}><strong>Trend:</strong> {trend}</p>
              </div>
            ))}
          </div>

          <div className={styles.callout}>
            <h3>Why Is AGS Underdiagnosed?</h3>
            <p>
              The delayed reaction (3–6 hours post-meal), the variability of symptoms across
              individuals, and the fact that many physicians were unfamiliar with AGS until
              recently all contribute to chronic underdiagnosis. Patients often present to
              emergency departments overnight with unexplained anaphylaxis and are discharged
              without an allergy referral. Increased education for primary care providers and
              emergency medicine physicians is a key public health priority.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
