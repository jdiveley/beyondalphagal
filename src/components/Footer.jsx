import { Leaf, Heart } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <Leaf size={20} />
          <span>Beyond Alpha Gal</span>
        </div>
        <p className={styles.disclaimer}>
          This site is for informational purposes only and does not constitute medical advice.
          Always consult a qualified healthcare provider for diagnosis and treatment.
        </p>
        <p className={styles.credit}>
          Made with <Heart size={14} style={{ display: 'inline', verticalAlign: 'middle', color: '#f87171' }} /> for the Alpha Gal community &mdash; {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  )
}
