import { Link } from 'react-router-dom'
import { BookOpen, Activity, Globe, Stethoscope, AlertTriangle, CheckCircle, ChefHat, BookMarked } from 'lucide-react'
import styles from './Home.module.css'

const cards = [
  { to: '/history',        icon: BookOpen,       label: 'History',         desc: 'How Alpha Gal Syndrome was discovered and recognized.' },
  { to: '/symptoms',       icon: Activity,       label: 'Symptoms',        desc: 'Reactions ranging from hives to anaphylaxis after red-meat consumption.' },
  { to: '/global-stats',   icon: Globe,          label: 'Global Stats',    desc: 'Infection rates, tick habitats, and worldwide prevalence data.' },
  { to: '/treatments',     icon: Stethoscope,    label: 'Treatments',      desc: 'Current management strategies and emerging research.' },
  { to: '/foods-to-avoid', icon: AlertTriangle,  label: 'Foods to Avoid',  desc: 'Red meats, hidden mammal-derived ingredients, and cross-contamination risks.' },
  { to: '/safe-foods',     icon: CheckCircle,    label: 'Safe Foods',      desc: 'Fruits, vegetables, poultry, seafood, and other AGS-friendly choices.' },
  { to: '/recipes',        icon: ChefHat,        label: 'Recipes',         desc: 'Delicious meals designed completely free of alpha-gal triggers.' },
  { to: '/research',       icon: BookMarked,     label: 'Research',        desc: 'Peer-reviewed studies, official health agencies, and vector research.' },
]

export default function Home() {
  return (
    <div>
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <span className={styles.badge}>Your Comprehensive Resource</span>
          <h1 className={styles.heroTitle}>Living <em>Beyond</em> Alpha Gal Syndrome</h1>
          <p className={styles.heroSub}>
            Alpha Gal Syndrome (AGS) is a tick-transmitted allergy to the carbohydrate
            alpha-gal, found in mammalian meat and byproducts. This site brings together
            everything you need to understand, manage, and thrive with AGS.
          </p>
          <div className={styles.heroActions}>
            <Link to="/symptoms" className={styles.btnPrimary}>Learn the Symptoms</Link>
            <Link to="/recipes"  className={styles.btnOutline}>Explore Recipes</Link>
          </div>
        </div>
      </section>

      <section className={styles.cards}>
        <div className={styles.cardsInner}>
          <h2 className={styles.cardsTitle}>Explore Topics</h2>
          <div className={styles.grid}>
            {cards.map(({ to, icon: Icon, label, desc }) => (
              <Link to={to} key={to} className={styles.card}>
                <div className={styles.cardIcon}><Icon size={28} /></div>
                <h3 className={styles.cardLabel}>{label}</h3>
                <p className={styles.cardDesc}>{desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.callout}>
        <div className={styles.calloutInner}>
          <h2>What is Alpha-Gal?</h2>
          <p>
            Alpha-gal (galactose-alpha-1,3-galactose) is a sugar molecule found in most mammals
            but <strong>not in humans, fish, or birds</strong>. When a Lone Star tick (or related
            species) bites a person, it can inject alpha-gal into the bloodstream, sensitizing the
            immune system. Future exposure through eating mammalian meat can then trigger an
            allergic reaction — sometimes hours after the meal.
          </p>
        </div>
      </section>
    </div>
  )
}
