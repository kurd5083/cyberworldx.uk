import { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import styles from "./BurgerMenu.module.scss";
import logo_icon from '/src/assets/logo_icon.svg';
import basket_icon from '/src/assets/basket_icon.svg';
import close_menu_icon from "/src/assets/close_menu_icon.svg"
import { popup_data } from "../../data/popup";
import { usePopupStore } from "../../store/popupStore";
import { useCartStore } from "../../store/cartStore";
import { useAuthStore } from "../../store/authStore";
import { useMenuStore } from '../../store/menuStore';
import { useSearchStore } from "../../store/searchStore";
import { navArr } from "../../data/navigate";
import SearchModal from "../SearchModal/SearchModal";

const BurgerMenu = () => {
    const navigate = useNavigate();
    const { totalItems } = useCartStore();
    const { openPopup } = usePopupStore();
    const { menu, isMenuOpen, closeMenu } = useMenuStore();
    const { user, logout, isAuthenticated } = useAuthStore();
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 992 && menu) {
                closeMenu();
            }
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [menu, closeMenu]);

    const { query, isOpen, setQuery } = useSearchStore();

    const handleSearchChange = (e) => {
        setQuery(e.target.value);
    };


    if (!isMenuOpen()) return null;
    return (
        <section
            className={styles.burger_overlay}
            onClick={() => closeMenu()}
        >
            <div
                className={styles.burger_menu}
                onClick={(e) => e.stopPropagation()}
            >
                <div className={styles.burger_menu_header}>
                    <img
                        className={styles.burger_menu_img}
                        onClick={() => {
                            closeMenu();
                            navigate('/');
                        }
                        }
                        src={logo_icon}
                        alt="Company logo, homepage link"
                    />
                    <button className={styles.close_button} onClick={() => closeMenu()}>
                        <img src={close_menu_icon} alt="Close menu" />
                    </button>
                </div>
                <button onClick={() => {
                    closeMenu()
                    navigate('/cart')
                }} className={styles.burger}>
                    <img className={styles.burger_ico} src={basket_icon} alt="Shopping basket icon" />
                    <span className={styles.burger_title}>CART</span>
                    <span className={styles.burger_quantity}>{totalItems() || 0}</span>
                </button>
                <div className={styles.burger_search_block}>
                    <input
                        className={styles.burger_input}
                        type="text"
                        placeholder="Search"
                        value={query}
                        onChange={handleSearchChange}
                    />
                    {isOpen && (<SearchModal />)}
                    <nav className={styles.burger_navigate}>
                        <ul className={styles.burger_navigate_list}>
                            {navArr.map((category) => (
                                <li key={category}>
                                    <NavLink
                                        to={`/catrgory/${category}`}
                                        className={({ isActive }) =>
                                            isActive ? `${styles.active}` : ''
                                        }
                                        onClick={() => closeMenu()}
                                    >
                                        {category.split('_').map(word =>
                                            word.charAt(0).toUpperCase() + word.slice(1)
                                        ).join(' ')}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
                {isAuthenticated ? (
                    <div className={styles.burger_buttons}>
                        <p className={styles.burger_mail}>{user?.email}</p>
                        <button
                            className={`${styles.burger_btn} ${styles.logout}`}
                            onClick={() => logout()}
                        >
                            LOG out
                        </button>
                    </div>
                ) : (
                    <div className={styles.burger_buttons}>
                        <button
                            className={`${styles.burger_btn} ${styles.login}`}
                            onClick={() => {
                                closeMenu();
                                openPopup(popup_data.login);
                                
                            }}
                        >Login</button>
                        <button
                            className={`${styles.burger_btn} ${styles.register}`}
                            onClick={() => {
                                closeMenu();
                                openPopup(popup_data.register);
                            }}
                        >Register</button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default BurgerMenu;
