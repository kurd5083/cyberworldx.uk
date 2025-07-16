import { Link } from 'react-router-dom';
import styles from "./GameCard.module.scss";

const GameCard = ({ product }) => {

    return (
        <article className={styles.game_card}>
            <Link to={`/games/game/${product.id}`}><img className={styles.game_img} src={product.cover} alt="Game cover" /></Link>
            <div className={styles.game_info}>
                <Link to={`/games/game/${product.id}`}>
                    <h4 className={styles.game_title}>{product.title}</h4>
                </Link>
                {product.discount ? (
                    <>
                        <s className={styles.game_oldprice}>£{product.price}</s>
                        <p className={styles.game_price}>£{(product.price - (product.price / 100) * product.discount).toFixed(2)}</p>
                    </>
                ) : (
                    <p className={styles.game_price}>£{product.price}</p>
                )}
                  {product.category == 'preorder' && (
                    <p className={styles.game_preorder}>PRE-ORDER</p>
                )}
                {product.discount && (<p className={styles.game_discount}>-{product.discount}%</p>)}
            </div>
        </article>
    )
}

export default GameCard
