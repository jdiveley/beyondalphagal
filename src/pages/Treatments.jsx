import { Stethoscope } from 'lucide-react'
import PageHero from '../components/PageHero'
import styles from './InfoPage.module.css'

const management = [
  {
    title: 'Strict Avoidance of Alpha-Gal',
    body: 'The primary treatment is eliminating mammalian meats and byproducts from the diet. This reduces antigen load and can lead to a gradual decrease in IgE levels over time — particularly if further tick bites are avoided.',
    level: 'safe',
  },
  {
    title: 'Epinephrine Auto-Injector (EpiPen)',
    body: 'Patients at risk of anaphylaxis should carry a prescribed epinephrine auto-injector at all times and know how to use it. Epinephrine is the first-line emergency treatment for anaphylaxis.',
    level: 'safe',
  },
  {
    title: 'Antihistamines',
    body: 'H1 antihistamines (e.g., diphenhydramine, cetirizine) can reduce mild symptoms like hives and itching. They are not sufficient to treat anaphylaxis and should not be used as a substitute for epinephrine.',
    level: 'safe',
  },
  {
    title: 'Oral Corticosteroids',
    body: 'Short-course prednisone may be prescribed for significant urticarial reactions that do not fully respond to antihistamines. Not for long-term use.',
    level: 'warning',
  },
  {
    title: 'Tick Bite Prevention',
    body: 'Avoiding future tick bites is critical. Each additional bite can re-boost IgE levels, maintaining or worsening sensitivity. Use DEET or permethrin repellents, wear protective clothing, and perform tick checks after outdoor activities.',
    level: 'safe',
  },
  {
    title: 'Medical Alert Identification',
    body: 'Wearing a medical alert bracelet or carrying an allergy card is strongly recommended, especially for patients with a history of severe reactions.',
    level: 'safe',
  },
]

const alternative = [
  {
    title: 'SAAT — Soliman Auricular Allergy Treatment',
    body: 'Developed by Dr. Nader Soliman, SAAT is a specialized acupuncture protocol that targets allergy desensitization through a single needle placement in the ear (auricle) at a precise point corresponding to the allergen. The needle is retained for 3–4 weeks under a small bandage. Several AGS patients report significant reduction in sensitivity after one or more SAAT sessions. It is not FDA-approved for AGS specifically, but is practiced by licensed acupuncturists and some integrative medicine physicians. Results vary widely.',
  },
  {
    title: 'NAET — Nambudripad\'s Allergy Elimination Technique',
    body: 'NAET combines concepts from acupuncture, acupressure, chiropractic, and kinesiology. Practitioners use muscle response testing to identify allergens and then apply spinal acupressure while the patient holds a vial containing the allergen. Multiple sessions target different substances. Some AGS patients report reduced reactions, though rigorous clinical evidence is limited. Seek a certified NAET practitioner.',
  },
  {
    title: 'Low-Dose Immunotherapy (LDI)',
    body: 'LDI involves administering extremely dilute doses of an antigen (in this case, alpha-gal) sublingually or by injection to gradually retrain immune tolerance. It is distinct from conventional allergy shots. Pioneered by integrative physicians, LDI for AGS is practiced by a small number of providers. Patient communities report mixed outcomes; no controlled trials exist for AGS specifically.',
  },
  {
    title: 'Acupuncture & Traditional Chinese Medicine (TCM)',
    body: 'Beyond SAAT, general acupuncture and TCM approaches aim to modulate immune hyper-reactivity through meridian-based treatments and herbal formulas. Some practitioners use points associated with the lung and spleen meridians to address allergic constitution. Evidence is anecdotal for AGS, though acupuncture has broader evidence for reducing mast cell degranulation in allergic conditions.',
  },
  {
    title: 'Low-Histamine Diet & Gut Healing Protocols',
    body: 'Some integrative practitioners hypothesize that intestinal permeability ("leaky gut") amplifies AGS reactions by allowing greater alpha-gal absorption. Gut-healing protocols — including bone broth avoidance (ironic for some), probiotics, L-glutamine, and low-histamine eating — are used by some AGS patients to reduce baseline inflammation and reaction frequency.',
  },
  {
    title: 'Mast Cell Stabilization Supplements',
    body: 'Natural mast cell stabilizers such as quercetin, vitamin C, stinging nettle, and diamine oxidase (DAO) enzyme supplements are used by some AGS patients to reduce histamine load and mast cell reactivity. These are not substitutes for epinephrine in anaphylaxis but may help reduce lower-grade chronic symptoms.',
  },
  {
    title: 'Homeopathic & Isopathic Approaches',
    body: 'Some patients explore homeopathic remedies or isopathic preparations (highly diluted alpha-gal preparations) intended to promote tolerance. Evidence is extremely limited and highly controversial within the medical community. These should never replace established emergency treatment protocols.',
  },
]

const emerging = [
  {
    title: 'Omalizumab (Xolair)',
    body: 'An anti-IgE monoclonal antibody approved for chronic urticaria and asthma. Case reports and small studies suggest it may reduce AGS reaction severity by binding free IgE. Clinical trials are ongoing.',
  },
  {
    title: 'Oral Immunotherapy (OIT)',
    body: 'Researched for other food allergies, OIT for AGS is under investigation. The challenge is the delayed reaction mechanism and the risk of inducing sensitization rather than tolerance.',
  },
  {
    title: 'IgE Desensitization Strategies',
    body: 'Novel biologics targeting IgE signaling pathways (e.g., ligelizumab) are in trials for various IgE-mediated conditions and may have future application in AGS.',
  },
  {
    title: 'Longitudinal IgE Monitoring',
    body: 'Some patients with no further tick exposure see IgE levels gradually decline. Allergists are studying whether structured re-introduction of small amounts of meat can be done safely once IgE is sufficiently low.',
  },
]

export default function Treatments() {
  return (
    <div>
      <PageHero
        icon={Stethoscope}
        title="Treatments & Management"
        subtitle="There is currently no cure for AGS, but symptoms can be effectively managed through avoidance strategies and medical support."
      />
      <section className={styles.content}>
        <div className={styles.inner}>
          <div className={styles.callout} style={{ marginTop: 0, marginBottom: '2rem' }}>
            <h3>Important: Work With Your Doctor</h3>
            <p>
              All treatment decisions should be made in consultation with a qualified allergist
              or physician. An allergy specialist can confirm AGS through IgE alpha-gal blood
              testing and help you build a personalized management plan.
            </p>
          </div>

          <h2 className={styles.sectionTitle}>Current Management Approaches</h2>
          <div className={styles.cards}>
            {management.map(({ title, body, level }) => (
              <div key={title} className={`${styles.card} ${styles[level]}`}>
                <h4>{title}</h4>
                <p>{body}</p>
              </div>
            ))}
          </div>

          <h2 className={styles.sectionTitle}>Alternative & Integrative Approaches</h2>
          <div className={styles.callout} style={{ marginBottom: '1.25rem', borderColor: 'var(--amber-600)', background: 'var(--amber-100)' }}>
            <h3 style={{ color: 'var(--amber-600)' }}>Discuss With Your Healthcare Provider</h3>
            <p>
              The following approaches are used by some AGS patients and integrative practitioners but lack
              large-scale clinical trials specifically for Alpha Gal Syndrome. They should complement —
              never replace — conventional emergency management (epinephrine, avoidance). Individual
              results vary significantly. Always inform your allergist of any alternative treatments you pursue.
            </p>
          </div>
          <div className={styles.cards}>
            {alternative.map(({ title, body }) => (
              <div key={title} className={`${styles.card} ${styles.warning}`}>
                <h4>{title}</h4>
                <p>{body}</p>
              </div>
            ))}
          </div>

          <h2 className={styles.sectionTitle}>Emerging & Investigational Treatments</h2>
          <p className={styles.prose} style={{ marginBottom: '1.25rem', fontSize: '0.9rem', color: 'var(--gray-700)' }}>
            Research into AGS is accelerating. None of the following are established standard-of-care
            for AGS without physician guidance, but they represent areas of active investigation.
          </p>
          <div className={styles.cards}>
            {emerging.map(({ title, body }) => (
              <div key={title} className={styles.card}>
                <h4>{title}</h4>
                <p>{body}</p>
              </div>
            ))}
          </div>

          <div className={styles.callout}>
            <h3>Can AGS Go Away?</h3>
            <p>
              For some people, strict avoidance of tick bites and alpha-gal-containing foods leads to
              gradually declining IgE levels — sometimes to the point where mild triggers no longer cause
              reactions. However, this is not universal, and IgE levels can rebound with another bite.
              Do not attempt to reintroduce red meat without medical supervision and repeat IgE testing.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
