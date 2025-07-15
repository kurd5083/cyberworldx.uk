import { useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from "./Catrgory.module.scss";
import { products } from '../../data/products';
import GameCard from '../../components/GameCard/GameCard';
import Navigate from "../../components/Navigate/Navigate";

const Catrgory = () => {
    const { subcategory } = useParams();
    const [sortType, setSortType] = useState('');
    const dataFilter = products.filter((p) => p.category.includes(subcategory))
    const getDiscountedPrice = (product) => {
        return product.discount
            ? product.price * (1 - product.discount / 100)
            : product.price;
    };

    const applySort = (type) => {
        let sortedGames = [...dataFilter];

        switch (type) {
            case 'price-asc':
                sortedGames.sort((a, b) => getDiscountedPrice(a) - getDiscountedPrice(b));
                break;
            case 'price-desc':
                sortedGames.sort((a, b) => getDiscountedPrice(b) - getDiscountedPrice(a));
                break;
            case 'name-asc':
                sortedGames.sort((a, b) => a.title.localeCompare(b.title));
                break;
            case 'name-desc':
                sortedGames.sort((a, b) => b.title.localeCompare(a.title));
                break;
            default:
                break;
        }

        return sortedGames;
    };

    const sortedProducts = applySort(sortType);
    return (
        <>
            <Navigate />
            <section className={styles.catrgory}>
                <header className={styles.catrgory_header}>
                    <div className={styles.catrgory_header_text}>
                        <h2 className={styles.catrgory_header_title}> 
                            {subcategory.split('_').map(word => word.charAt(0) + word.slice(1)).join(' ').toLocaleUpperCase()}
                        </h2>
                        <p className={styles.catrgory_header_desc}>Explore timeless titles for Game Boy, SNES, Sega Mega Drive, and more — all tested and ready for your next adventure.</p>
                    </div>
                    <div className={styles.catrgory_header_sort}>
                        <label className={styles.catrgory_header_label} htmlFor="sort">Sort by:</label>
                        <select
                            id="sort"
                            value={sortType}
                            className={styles.catrgory_header_select}
                            onChange={(e) => setSortType(e.target.value)}
                        >
                            <option value="">Default</option>
                            <option value="price-asc">Price: Low to High</option>
                            <option value="price-desc">Price: High to Low</option>
                            <option value="name-asc">Name: A-Z</option>
                            <option value="name-desc">Name: Z-A</option>
                        </select>
                    </div>
                </header>
                <div className={styles.game_cards}>
                    {sortedProducts.map((item) => (
                        <GameCard key={item.id} product={item} />
                    ))}
                </div>
            </section>

        </>
    )
}

export default Catrgory
