import styles from "./Header.module.scss"

export default function Header() {
  return (
    <nav className={styles.navigate}>
      <h1>Navigate</h1>
      <div className={styles.menu}>Menu Menu Menu Menu Menu</div>
    </nav>
  )
}
