import { BookOpen } from 'lucide-react'
import PageHero from '../components/PageHero'
import styles from './InfoPage.module.css'

const timeline = [
  {
    year: '2002',
    title: 'Cetuximab Mystery',
    body: 'Oncologists in the American Southeast noticed a puzzling cluster of severe allergic reactions to cetuximab (Erbitux), a cancer drug, occurring specifically before the first infusion — not after repeat doses, as is typical. Reactions were geographically concentrated in the southern United States.',
  },
  {
    year: '2006',
    title: 'Alpha-Gal Antibodies Identified',
    body: 'Dr. Thomas Platts-Mills and colleagues at the University of Virginia discovered that patients reacting to cetuximab had pre-existing IgE antibodies to the carbohydrate alpha-gal (galactose-alpha-1,3-galactose) — a sugar molecule present on the drug\'s surface because it is produced in mouse cells.',
  },
  {
    year: '2008',
    title: 'Link to Tick Bites Established',
    body: 'Researchers identified a geographic correlation: patients with anti-alpha-gal IgE were concentrated in areas with high Lone Star tick (Amblyomma americanum) populations. This led to the hypothesis that tick bites were sensitizing people to alpha-gal.',
  },
  {
    year: '2009',
    title: 'Red Meat Allergy Described',
    body: 'Platts-Mills\'s team published the first clinical description of delayed allergic reactions — appearing 3–6 hours after eating red meat — caused by IgE to alpha-gal. This was a landmark: an allergy to a carbohydrate (not a protein) with an unusual delayed onset.',
  },
  {
    year: '2011',
    title: 'Global Recognition',
    body: 'Similar cases began appearing in Australia (linked to Ixodes holocyclus), Europe (Ixodes ricinus), and Asia. The syndrome was recognized as a global phenomenon tied to tick species that feed on mammals carrying alpha-gal.',
  },
  {
    year: '2015–2018',
    title: 'CDC & Mainstream Awareness',
    body: 'The U.S. Centers for Disease Control and Prevention (CDC) began tracking AGS cases. Awareness grew among allergists, and IgE testing for alpha-gal became more widely available.',
  },
  {
    year: '2021',
    title: 'Over 34,000 Suspected U.S. Cases',
    body: 'The CDC estimated more than 34,000 suspected cases in the United States between 2010 and 2018, with the actual number likely far higher due to underdiagnosis. The Lone Star tick\'s range was also expanding northward.',
  },
  {
    year: '2023',
    title: 'FDA Label Update',
    body: 'The U.S. FDA updated labeling on cetuximab to include AGS-related warnings. Research into cofactors (exercise, alcohol, NSAIDs) that worsen reactions intensified, and scientists began exploring connections between AGS and other conditions.',
  },
]

export default function History() {
  return (
    <div>
      <PageHero
        icon={BookOpen}
        title="History of Alpha Gal Syndrome"
        subtitle="From a mysterious drug reaction to a global tick-transmitted allergy — the story of how AGS was uncovered."
      />
      <section className={styles.content}>
        <div className={styles.inner}>
          <div className={styles.timeline}>
            {timeline.map(({ year, title, body }) => (
              <div key={year} className={styles.timelineItem}>
                <div className={styles.timelineYear}>{year}</div>
                <div className={styles.timelineCard}>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.callout}>
            <h3>Key Researcher: Dr. Thomas Platts-Mills</h3>
            <p>
              Dr. Platts-Mills, an allergist and immunologist at the University of Virginia,
              is widely credited with elucidating the mechanism behind AGS. His team's work
              connecting tick exposure, IgE sensitization to alpha-gal, and delayed meat
              allergy transformed understanding of food allergy and tick-borne disease.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
