import { Activity } from 'lucide-react'
import PageHero from '../components/PageHero'
import styles from './InfoPage.module.css'

const symptoms = [
  { title: 'Hives (Urticaria)', body: 'Raised, itchy welts on the skin — often the first noticeable sign. May appear anywhere on the body 3–6 hours after eating red meat.', level: 'warning' },
  { title: 'Angioedema', body: 'Swelling beneath the skin, commonly affecting the lips, tongue, throat, and eyelids. Throat swelling can be life-threatening.', level: 'danger' },
  { title: 'Gastrointestinal Distress', body: 'Nausea, vomiting, diarrhea, and severe abdominal cramping frequently accompany or precede skin symptoms.', level: 'warning' },
  { title: 'Anaphylaxis', body: 'A severe, potentially fatal reaction involving drop in blood pressure, loss of consciousness, and respiratory collapse. Requires immediate epinephrine.', level: 'danger' },
  { title: 'Flushing', body: 'Redness and warmth spreading across the face, neck, and chest. Can be mistaken for a hot flash or heat rash.', level: 'warning' },
  { title: 'Runny Nose / Rhinitis', body: 'Nasal congestion and discharge are common milder manifestations, particularly in lower-sensitivity individuals.', level: 'warning' },
  { title: 'Shortness of Breath', body: 'Bronchospasm or asthma-like symptoms may occur, especially in individuals with pre-existing respiratory conditions.', level: 'danger' },
  { title: 'Dizziness & Hypotension', body: 'A drop in blood pressure can cause lightheadedness, fainting, or cardiovascular collapse in severe reactions.', level: 'danger' },
]

const cofactors = [
  { title: 'Exercise', body: 'Physical activity shortly before or after consuming alpha-gal can amplify the reaction dramatically.' },
  { title: 'Alcohol', body: 'Alcohol accelerates digestion and increases intestinal permeability, intensifying exposure to alpha-gal.' },
  { title: 'NSAIDs', body: 'Aspirin and ibuprofen can enhance gut absorption of allergens, worsening reactions.' },
  { title: 'Fatty Meals', body: 'High-fat preparations (e.g., fried foods) slow digestion and may increase allergen load absorbed.' },
  { title: 'Illness / Infection', body: 'Being unwell can lower reaction thresholds, causing reactions from smaller alpha-gal doses than usual.' },
  { title: 'Additional Tick Bites', body: 'Each subsequent bite can boost IgE levels, increasing sensitivity and lowering the reaction threshold.' },
]

export default function Symptoms() {
  return (
    <div>
      <PageHero
        icon={Activity}
        title="Symptoms of Alpha Gal Syndrome"
        subtitle="Reactions are characteristically delayed 3–6 hours after consuming mammalian products, making AGS notoriously difficult to diagnose."
      />
      <section className={styles.content}>
        <div className={styles.inner}>
          <div className={styles.callout} style={{ marginTop: 0, marginBottom: '2rem' }}>
            <h3>The Delayed Onset — Why AGS Is Unique</h3>
            <p>
              Unlike most food allergies (which trigger within minutes), AGS reactions typically appear
              <strong> 3 to 6 hours</strong> after eating red meat or mammalian byproducts. This delay
              is because alpha-gal is absorbed more slowly from the gut than proteins, and often occurs
              in the middle of the night if the meal was dinner. This makes connecting the reaction to
              the trigger exceptionally difficult without medical testing.
            </p>
          </div>

          <h2 className={styles.sectionTitle}>Common Symptoms</h2>
          <div className={styles.cards}>
            {symptoms.map(({ title, body, level }) => (
              <div key={title} className={`${styles.card} ${styles[level]}`}>
                <h4>{title}</h4>
                <p>{body}</p>
              </div>
            ))}
          </div>

          <h2 className={styles.sectionTitle}>Reaction Cofactors</h2>
          <p className={styles.prose} style={{ marginBottom: '1.25rem' }}>
            These factors don't cause AGS reactions on their own, but can amplify them significantly — sometimes
            causing a reaction even when the alpha-gal dose alone would not have crossed the threshold.
          </p>
          <div className={styles.cards}>
            {cofactors.map(({ title, body }) => (
              <div key={title} className={styles.card}>
                <h4>{title}</h4>
                <p>{body}</p>
              </div>
            ))}
          </div>

          <div className={styles.callout}>
            <h3>When to Seek Emergency Care</h3>
            <p>
              Call 911 or go to the nearest emergency room immediately if you experience throat swelling,
              difficulty breathing, a sudden drop in blood pressure, or loss of consciousness.
              If you have a prescribed epinephrine auto-injector (EpiPen), use it and still seek emergency care.
              <strong> Do not wait to see if symptoms resolve on their own.</strong>
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
