import { useEffect } from "react";
import styles from "./SearchModal.module.scss";
import { useNavigate } from "react-router-dom";
import { useSearchStore } from "../../store/searchStore";
import { useMenuStore } from '../../store/menuStore';

const SearchModal = () => {
    const { results, clearSearch } = useSearchStore();
    const navigate = useNavigate();
    const { closeMenu } = useMenuStore();

    const handleResultClick = (id) => {
        navigate(`/games/game/${id}`);
        clearSearch();
        closeMenu();
    };
    
    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === "Escape") {
                clearSearch();
            }
        };
        window.addEventListener("keydown", handleEsc);
        return () => window.removeEventListener("keydown", handleEsc);
    }, [clearSearch]);

    return (
        <div className={styles.search_overlay}>
            <div className={styles.search_content}>
                <h3>Search Results</h3>
                <div className={styles.search_results}>
                    {results.length > 0 ? (
                        results.map(product => (
                            <div
                                key={product.id}
                                className={styles.search_results_item}
                                onClick={() => handleResultClick(product.id)}
                            >
                                <img src={product.cover} alt={product.name} className={styles.product_image} />
                                <div className={styles.product_info}>
                                    <h4>{product.title}</h4>
                                    <p>${product.price}</p>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>No results found.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SearchModal;
