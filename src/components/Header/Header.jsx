import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Header.module.scss";
import { products } from "../../data/products";
import logo_icon from '/src/assets/logo_icon.svg'
import basket_icon from '/src/assets/basket_icon.svg'
import burger_icon from '/src/assets/burger_icon.svg'
import { usePopupStore } from '../../store/popupStore';
import { useCartStore } from "../../store/cartStore";
import { popup_data } from '../../data/popup';
import { useAuthStore } from "../../store/authStore";

const Header = () => {
  const { totalItems } = useCartStore();
  const navigate = useNavigate();
  const { openPopup } = usePopupStore();
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const { logout, isAuthenticated } = useAuthStore();

  useEffect(() => {
    if (searchQuery.trim() === "") {
      setSearchResults([]);
      setIsSearchModalOpen(false);
      return;
    }

    const results = products.filter(product =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    setSearchResults(results);
    setIsSearchModalOpen(results.length > 0);
  }, [searchQuery]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchResult = (id) => {
    navigate(`/games/game/${id}`);
    setIsSearchModalOpen(false);
    setSearchQuery('');
  };

  return (
    <header className={styles.header}>
      <div className={styles.header_content}>
        <section className={styles.header_left}>
          <img onClick={() => navigate('/')} src={logo_icon} alt="" />
          <input
            className={styles.header_input}
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </section>
        <section className={styles.header_right}>
          {isAuthenticated ? (
            <button 
            className={`${styles.header_btn} ${styles.logout}`}
onClick={() => logout()}
            >
              Logout</button>
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
          <button onClick={() => navigate('/cart')} className={`${styles.basket}`}>
            <img src={basket_icon} alt="" />
            <span className={`${styles.basket_quantity}`}>{totalItems() || 0}</span>
          </button>
          <button className={`${styles.burger}`}>
            <img src={burger_icon} alt="" />
          </button>
        </section>
      </div>
      {isSearchModalOpen && (
        <div className={styles.search_overlay}>
          <div className={styles.search_content}>
            <h3>Search Results</h3>
            <div className={styles.search_results}>
              {searchResults.length > 0 && (
                searchResults.map(product => (
                  <div
                    key={product.id}
                    className={styles.search_results_item}
                    onClick={() => { handleSearchResult(product.id) }}
                  >
                    <img src={product.cover} alt={product.name} className={styles.product_image} />
                    <div className={styles.product_info}>
                      <h4>{product.title}</h4>
                      <p>${product.price}</p>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;