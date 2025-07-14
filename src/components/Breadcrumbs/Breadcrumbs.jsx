import styles from "./Breadcrumbs.module.scss";
import breadcrumbs_divider_icon from "/src/assets/breadcrumbs_divider_icon.svg";
import { Link } from "react-router-dom";

const Breadcrumbs = ({name}) => {
  return (
    <nav className={styles.breadcrumbs}>
      <ul className={styles.breadcrumbs_list}>
        <li><Link to="/">Home</Link></li>
        <img src={breadcrumbs_divider_icon} alt="" />
        <li>test</li>
        <img src={breadcrumbs_divider_icon} alt="" />
        <li>{name}</li>
      </ul>
    </nav>
  )
}

export default Breadcrumbs
