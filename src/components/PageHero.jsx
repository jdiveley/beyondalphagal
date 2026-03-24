import styles from './PageHero.module.css'

export default function PageHero({ title, subtitle, icon: Icon }) {
  return (
    <section className={styles.hero}>
      <div className={styles.inner}>
        {Icon && <Icon size={48} className={styles.icon} />}
        <h1 className={styles.title}>{title}</h1>
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
      </div>
    </section>
  )
}
