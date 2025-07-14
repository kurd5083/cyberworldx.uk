import { useState, useEffect } from "react";
import styles from "./CategoryProductsList.module.scss";
import GameCard from "../../components/GameCard/GameCard";
import { products } from "../../data/products";

const CategoryProductsList = ({ categories }) => {
    const [expandedCategories, setExpandedCategories] = useState({});
    const [initialItemsToShow, setInitialItemsToShow] = useState(4);
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 1200) {
                setInitialItemsToShow(3)
            } else {
                setInitialItemsToShow(4)
            }
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    const toggleCategory = (categoryKey) => {
        setExpandedCategories(prev => ({
            ...prev,
            [categoryKey]: !prev[categoryKey]
        }));
    };
    return (
        <section className={styles.cards_section}>
            {categories.map((category) => {
                const categoryProducts = products.filter(
                    product => product.category.find((c) => c === category.key)
                );

                // Пропускаем пустые категории
                if (categoryProducts.length === 0) return null;

                const showAll = expandedCategories[category.key];
                const displayedProducts = showAll
                    ? categoryProducts
                    : categoryProducts.slice(0, initialItemsToShow);

                return (
                    <div key={category.key} className={styles.game_cards}>
                        <h3 className={styles.game_cards_title}>{category.title}</h3>
                        <div className={styles.game_row_cards}>
                            {displayedProducts.map((item) => (
                                <GameCard key={item.id} product={item} />
                            ))}
                        </div>
                        {categoryProducts.length > initialItemsToShow && (
                            <button
                                onClick={() => toggleCategory(category.key)}
                                className={styles.see_more_button}
                            >
                                {showAll ? "Show less" : `See more`}
                            </button>
                        )}
                    </div>
                );
            })}
        </section>
    )
}

export default CategoryProductsList
