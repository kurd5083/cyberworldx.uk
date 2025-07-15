import styles from "./Navigate.module.scss";
import { NavLink } from "react-router-dom";

const navArr = [
  "games",
  "consoles",
  "accessories",
  "unboxed_games",
  "trading_cards",
  "manuals",
  "vhs",
  "books"
]

const Navigate = () => {
  return (
    <nav className={styles.navigate}>
      <ul className={styles.navigate_list}>

        {navArr.map((category) => (
          <li key={category}>
            <NavLink
              to={`/catrgory/${category}`}
              className={({ isActive }) =>
                isActive ? `${styles.active}` : ''
              }
            >
              {category.split('_').map(word =>
                word.charAt(0).toUpperCase() + word.slice(1)
              ).join(' ')}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navigate
