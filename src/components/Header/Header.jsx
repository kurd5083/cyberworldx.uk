import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Header.module.scss";
import logo_icon from '/src/assets/logo_icon.svg';
import basket_icon from '/src/assets/basket_icon.svg';
import burger_icon from '/src/assets/burger_icon.svg';
import { usePopupStore } from '../../store/popupStore';
import { useMenuStore } from '../../store/menuStore';
import { useCartStore } from "../../store/cartStore";
import { popup_data } from '../../data/popup';
import { useAuthStore } from "../../store/authStore";
import { useSearchStore } from "../../store/searchStore";
import SearchModal from "../SearchModal/SearchModal";

const Header = () => {
  const { totalItems } = useCartStore();
  const navigate = useNavigate();
  const { openPopup } = usePopupStore();
  const { openMenu } = useMenuStore();
  const { user, logout, isAuthenticated } = useAuthStore();
  const { query, isOpen, setQuery, clearSearch } = useSearchStore();

  const handleSearchChange = (e) => {
    setQuery(e.target.value);
  };
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 992 && isOpen) {
        clearSearch();
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isOpen, clearSearch]);
  return (
    <header className={styles.header}>
      <div className={styles.header_content}>
        <section className={styles.header_left}>
          <img onClick={() => navigate('/')} src={logo_icon} alt="Company logo, homepage link" />
          <input
            className={styles.header_input}
            type="text"
            placeholder="Search"
            value={query}
            onChange={handleSearchChange}
          />
        </section>
        <section className={styles.header_right}>
          {isAuthenticated ? (
            <>
              <p className={styles.header_right_mail}>{user?.email}</p>
              <button
                className={`${styles.header_btn} ${styles.logout}`}
                onClick={() => logout()}
              >
                LOG out
              </button>
            </>
          ) : (
            <>
              <button
                className={`${styles.header_btn} ${styles.login}`}
                onClick={() => openPopup(popup_data.login)}
              >Login</button>
              <button
                className={`${styles.header_btn} ${styles.register}`}
                onClick={() => openPopup(popup_data.register)}
              >Register</button>
            </>
          )}
          <button onClick={() => navigate('/cart')} className={styles.basket}>
            <img src={basket_icon} alt="Shopping basket icon" />
            <span className={styles.basket_quantity}>{totalItems() || 0}</span>
          </button>
          <button className={styles.burger} onClick={openMenu}>
            <img src={burger_icon} alt="Menu icon" />
          </button>
        </section>
      </div>
      {isOpen && (<SearchModal />)}
    </header>
  );
};

export default Header;
