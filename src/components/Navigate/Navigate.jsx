import styles from "./Navigate.module.scss";
import { Link } from "react-router-dom";

const Navigate = () => {
  return (
    <nav className={styles.navigate}>
        <ul className={styles.navigate_list}>
            <li><Link to="">Games</Link></li>
            <li><Link to="">Consoles</Link></li>
            <li><Link to="">Accessories</Link></li>
            <li><Link to="">Unboxed Games</Link></li>
            <li><Link to="">Trading Cards</Link></li>
            <li><Link to="">Manuals</Link></li>
            <li><Link to="">VHS</Link></li>
            <li><Link to="">Books</Link></li>
        </ul>
    </nav>
  )
}

export default Navigate
