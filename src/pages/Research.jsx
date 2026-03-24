import { BookMarked, ExternalLink } from 'lucide-react'
import PageHero from '../components/PageHero'
import styles from './InfoPage.module.css'
import rstyles from './Research.module.css'

const officialResources = [
  {
    title: 'CDC — Alpha-gal Syndrome',
    org: 'Centers for Disease Control and Prevention',
    desc: 'The CDC\'s primary AGS information hub covering diagnosis, symptoms, tick prevention, and healthcare provider guidance. Updated regularly as new data emerges.',
    url: 'https://www.cdc.gov/alpha-gal/index.html',
  },
  {
    title: 'NIH — Alpha-gal Syndrome Overview',
    org: 'National Institutes of Health',
    desc: 'NIH MedlinePlus and related pages covering the molecular basis of AGS, IgE testing, and clinical management summaries.',
    url: 'https://www.ncbi.nlm.nih.gov/pmc/search/?term=alpha-gal+syndrome',
  },
  {
    title: 'PubMed — Alpha-Gal Syndrome Research',
    org: 'National Library of Medicine',
    desc: 'Comprehensive database of peer-reviewed studies on AGS. Search for "alpha-gal syndrome," "galactose-alpha-1,3-galactose allergy," or specific topics like vectors, treatments, and epidemiology.',
    url: 'https://pubmed.ncbi.nlm.nih.gov/?term=alpha-gal+syndrome',
  },
  {
    title: 'FDA — Cetuximab & Alpha-Gal',
    org: 'U.S. Food and Drug Administration',
    desc: 'FDA safety communications related to alpha-gal IgE, cetuximab hypersensitivity reactions, and drug labeling updates.',
    url: 'https://www.fda.gov/drugs/drug-safety-and-availability/fda-drug-safety-communication-serious-allergic-reactions-cancer-drug-erbitux-cetuximab',
  },
  {
    title: 'AAAAI — Alpha-Gal Allergy',
    org: 'American Academy of Allergy, Asthma & Immunology',
    desc: 'Patient and provider resources from the leading U.S. allergy professional society, including guidance on diagnosis and management.',
    url: 'https://www.aaaai.org/tools-for-the-public/conditions-library/allergies/alpha-gal',
  },
  {
    title: 'ACAAI — Meat Allergy',
    org: 'American College of Allergy, Asthma & Immunology',
    desc: 'Patient-facing overview of meat allergy (alpha-gal), including symptom guidance and how to find a board-certified allergist.',
    url: 'https://acaai.org/allergies/allergic-conditions/food/meat-allergy/',
  },
]

const keyStudies = [
  {
    title: 'Cetuximab-Induced Anaphylaxis and IgE Specific for Galactose-α-1,3-Galactose',
    authors: 'Chung CH, Mirakhur B, Chan E, et al.',
    journal: 'New England Journal of Medicine, 2008',
    desc: 'The landmark study identifying pre-existing IgE to alpha-gal as the cause of severe hypersensitivity reactions to cetuximab — the discovery that launched AGS research.',
    url: 'https://pubmed.ncbi.nlm.nih.gov/18216353/',
  },
  {
    title: 'Delayed Anaphylaxis, Angioedema, or Urticaria after Consumption of Red Meat in Patients with IgE Antibodies Specific for Galactose-alpha-1,3-Galactose',
    authors: 'Commins SP, Satinover SM, Hosen J, et al.',
    journal: 'Journal of Allergy and Clinical Immunology, 2009',
    desc: 'The first clinical description of delayed allergic reactions to red meat caused by IgE to alpha-gal — establishing AGS as a distinct syndrome.',
    url: 'https://pubmed.ncbi.nlm.nih.gov/19070355/',
  },
  {
    title: 'The Relevance of Tick Bites to the Production of IgE Antibodies to the Mammalian Oligosaccharide Galactose-α-1,3-Galactose',
    authors: 'Commins SP, James HR, Kelly LA, et al.',
    journal: 'Journal of Allergy and Clinical Immunology, 2011',
    desc: 'Confirmed the link between Lone Star tick bites and sensitization to alpha-gal, establishing tick exposure as the primary cause of AGS.',
    url: 'https://pubmed.ncbi.nlm.nih.gov/21453960/',
  },
  {
    title: 'Alpha-Gal Syndrome: Experimental Proof of Concept with Tick Saliva',
    authors: 'Platts-Mills TAE, et al.',
    journal: 'Journal of Allergy and Clinical Immunology, 2020',
    desc: 'Research confirming that tick saliva specifically contains compounds that drive alpha-gal IgE production, advancing understanding of the sensitization mechanism.',
    url: 'https://pubmed.ncbi.nlm.nih.gov/?term=platts-mills+alpha-gal+tick+saliva',
  },
  {
    title: 'Estimated Burden of Alpha-gal Syndrome — United States, 2010–2022',
    authors: 'Frank A, et al.',
    journal: 'MMWR Morbidity and Mortality Weekly Report, CDC, 2023',
    desc: 'CDC report estimating 450,000+ potential U.S. cases, documenting provider awareness gaps, and outlining the public health burden of AGS.',
    url: 'https://www.cdc.gov/mmwr/volumes/72/wr/mm7225a2.htm',
  },
  {
    title: 'Omalizumab as a Treatment for Alpha-Gal Syndrome',
    authors: 'Multiple authors — see PubMed',
    journal: 'Various journals, 2020–present',
    desc: 'A growing body of case reports and small studies examining omalizumab (Xolair) as a potential therapy to reduce AGS reaction severity.',
    url: 'https://pubmed.ncbi.nlm.nih.gov/?term=omalizumab+alpha-gal',
  },
  {
    title: 'SAAT for Allergy Desensitization — Soliman Auricular Allergy Treatment',
    authors: 'Soliman N, et al.',
    journal: 'Medical Acupuncture & peer publications',
    desc: 'Published work and case documentation by Dr. Nader Soliman on the auricular acupuncture protocol used by some AGS patients. Search PubMed for the most current evidence.',
    url: 'https://pubmed.ncbi.nlm.nih.gov/?term=soliman+auricular+allergy+treatment',
  },
]

const vectorResearch = [
  {
    title: 'Mosquitoes as Potential Vectors',
    status: 'No established evidence',
    statusLevel: 'none',
    desc: 'As of 2025, no peer-reviewed studies have confirmed mosquitoes as a vector for alpha-gal sensitization. The sensitization mechanism is thought to require specific compounds in tick saliva. Community-level reports exist but lack clinical validation. Search PubMed for "alpha-gal mosquito" for the latest publications.',
    url: 'https://pubmed.ncbi.nlm.nih.gov/?term=alpha-gal+mosquito',
  },
  {
    title: 'Chigger Mites (Trombiculidae) as Potential Vectors',
    status: 'Under investigation',
    statusLevel: 'investigating',
    desc: 'Some researchers have noted geographic correlations between chigger populations and AGS cases, particularly in areas where Lone Star ticks are less prevalent. Active research is ongoing but no definitive causal link has been established.',
    url: 'https://pubmed.ncbi.nlm.nih.gov/?term=alpha-gal+chigger',
  },
  {
    title: 'Lone Star Tick Range Expansion',
    status: 'Well documented',
    statusLevel: 'confirmed',
    desc: 'Multiple studies confirm the northward and westward expansion of Amblyomma americanum in the U.S., driven by climate change and deer population growth. This expansion is directly increasing the geographic risk of AGS.',
    url: 'https://pubmed.ncbi.nlm.nih.gov/?term=amblyomma+americanum+range+expansion',
  },
  {
    title: 'Asian Longhorned Tick (Haemaphysalis longicornis) in the U.S.',
    status: 'Emerging concern',
    statusLevel: 'investigating',
    desc: 'This invasive tick, established in the eastern U.S. since around 2017, is a known alpha-gal vector in Asia. Research is ongoing into whether its U.S. presence will meaningfully increase AGS rates.',
    url: 'https://pubmed.ncbi.nlm.nih.gov/?term=haemaphysalis+longicornis+alpha-gal',
  },
]

const community = [
  {
    title: 'Alpha-Gal Information & Support (Facebook Group)',
    desc: 'One of the largest patient community groups, with hundreds of thousands of members sharing experiences, recipes, and medical resources.',
    url: 'https://www.facebook.com/groups/alphagalinformation',
  },
  {
    title: 'Alpha-Gal Awareness',
    desc: 'A nonprofit organization dedicated to AGS patient advocacy, provider education, and research funding.',
    url: 'https://www.alphagalawareness.org',
  },
  {
    title: 'Tick-Borne Conditions United',
    desc: 'Advocacy organization covering AGS and other tick-borne conditions, working with legislators and health agencies.',
    url: 'https://tbcunited.org',
  },
]

const statusColors = {
  none: { bg: '#fef2f2', color: '#dc2626', border: '#fca5a5' },
  investigating: { bg: '#fef3c7', color: '#d97706', border: '#fcd34d' },
  confirmed: { bg: '#f0f7ff', color: 'var(--green-700)', border: 'var(--green-300)' },
}

export default function Research() {
  return (
    <div>
      <PageHero
        icon={BookMarked}
        title="Research & Resources"
        subtitle="Peer-reviewed studies, authoritative health agencies, vector research, and patient community resources — all in one place."
      />
      <section className={rstyles.content}>
        <div className={rstyles.inner}>

          {/* Official Resources */}
          <h2 className={styles.sectionTitle}>Official Health Agency Resources</h2>
          <div className={rstyles.resourceGrid}>
            {officialResources.map(({ title, org, desc, url }) => (
              <a key={title} href={url} target="_blank" rel="noopener noreferrer" className={rstyles.resourceCard}>
                <div className={rstyles.resourceOrg}>{org}</div>
                <h3 className={rstyles.resourceTitle}>{title}</h3>
                <p className={rstyles.resourceDesc}>{desc}</p>
                <span className={rstyles.resourceLink}><ExternalLink size={13} /> Visit Resource</span>
              </a>
            ))}
          </div>

          {/* Key Studies */}
          <h2 className={styles.sectionTitle}>Key Published Studies</h2>
          <div className={styles.callout} style={{ marginBottom: '1.25rem' }}>
            <h3>About These Citations</h3>
            <p>
              Links go directly to PubMed or the source publication. Full text may require institutional
              access; PubMed often links to free PMC versions where available. Use the DOI or PMID to
              locate articles through your local library if needed.
            </p>
          </div>
          <div className={rstyles.studyList}>
            {keyStudies.map(({ title, authors, journal, desc, url }) => (
              <div key={title} className={rstyles.studyCard}>
                <div className={rstyles.studyMeta}>
                  <span className={rstyles.studyJournal}>{journal}</span>
                  <span className={rstyles.studyAuthors}>{authors}</span>
                </div>
                <h3 className={rstyles.studyTitle}>{title}</h3>
                <p className={rstyles.studyDesc}>{desc}</p>
                <a href={url} target="_blank" rel="noopener noreferrer" className={rstyles.studyLink}>
                  <ExternalLink size={13} /> View on PubMed
                </a>
              </div>
            ))}
          </div>

          {/* Vector Research */}
          <h2 className={styles.sectionTitle}>Vector Research — What Spreads AGS?</h2>
          <div className={rstyles.vectorList}>
            {vectorResearch.map(({ title, status, statusLevel, desc, url }) => {
              const s = statusColors[statusLevel]
              return (
                <div key={title} className={rstyles.vectorCard}>
                  <div className={rstyles.vectorHeader}>
                    <h3>{title}</h3>
                    <span
                      className={rstyles.vectorStatus}
                      style={{ background: s.bg, color: s.color, border: `1px solid ${s.border}` }}
                    >
                      {status}
                    </span>
                  </div>
                  <p>{desc}</p>
                  <a href={url} target="_blank" rel="noopener noreferrer" className={rstyles.studyLink}>
                    <ExternalLink size={13} /> Search current studies
                  </a>
                </div>
              )
            })}
          </div>

          {/* Community */}
          <h2 className={styles.sectionTitle}>Patient Communities & Advocacy</h2>
          <div className={rstyles.resourceGrid}>
            {community.map(({ title, desc, url }) => (
              <a key={title} href={url} target="_blank" rel="noopener noreferrer" className={rstyles.resourceCard}>
                <h3 className={rstyles.resourceTitle}>{title}</h3>
                <p className={rstyles.resourceDesc}>{desc}</p>
                <span className={rstyles.resourceLink}><ExternalLink size={13} /> Visit</span>
              </a>
            ))}
          </div>

          <div className={styles.callout}>
            <h3>Staying Current</h3>
            <p>
              AGS research is advancing rapidly. To stay up to date, set a PubMed alert for
              "alpha-gal syndrome" or follow the CDC's AGS page. New studies on vectors, treatments,
              and prevalence are published regularly. Your allergist is also a key resource for
              interpreting new findings in the context of your personal health.
            </p>
          </div>

        </div>
      </section>
    </div>
  )
}
