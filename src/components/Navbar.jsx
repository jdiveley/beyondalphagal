import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Menu, X, Leaf } from 'lucide-react'
import styles from './Navbar.module.css'

const links = [
  { to: '/',             label: 'Home' },
  { to: '/history',      label: 'History' },
  { to: '/symptoms',     label: 'Symptoms' },
  { to: '/global-stats', label: 'Global Stats' },
  { to: '/treatments',   label: 'Treatments' },
  { to: '/foods-to-avoid', label: 'Foods to Avoid' },
  { to: '/safe-foods',   label: 'Safe Foods' },
  { to: '/recipes',      label: 'Recipes' },
  { to: '/research',     label: 'Research' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className={styles.nav}>
      <div className={styles.inner}>
        <NavLink to="/" className={styles.brand} onClick={() => setOpen(false)}>
          <Leaf size={24} />
          <span>Beyond Alpha Gal</span>
        </NavLink>

        <button
          className={styles.burger}
          onClick={() => setOpen(o => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>

        <ul className={`${styles.links} ${open ? styles.linksOpen : ''}`}>
          {links.map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  `${styles.link} ${isActive ? styles.active : ''}`
                }
                onClick={() => setOpen(false)}
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
