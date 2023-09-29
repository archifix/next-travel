import Link from "next/link"
import styles from "./Header.module.scss"

export default function Header() {
  return (
    <header>
      <nav className={styles.navigate}>
        <div className={styles.menu}>
          <h1>Navigate</h1>
          <div className={styles.sub_menu}>
            <Link href="/" to="footer">
              {" "}
              Menu
            </Link>
            Menu Menu Menu Menu Menu
          </div>
        </div>
      </nav>
      <div className={styles.title} id="travel">
        <h1>Travel</h1>
      </div>
    </header>
  )
}
