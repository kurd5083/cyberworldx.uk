import { useRef, useEffect, useState } from "react";
import styles from "./GameInfo.module.scss";
import { useParams } from 'react-router-dom'
import { products } from "../../data/products";
import { useCartStore } from '../../store/cartStore';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Thumbs } from 'swiper/modules';
import 'swiper/css';
import shopping_cart_icon from '/src/assets/shopping_cart_icon.svg';
import CategoryProductsList from "../../components/CategoryProductsList/CategoryProductsList";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";

const GameInfo = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);
  const { id } = useParams();
  const game = products.find((p) => p.id == id)
  const { addToCart } = useCartStore();
  const allImages = game.cover ? [game.cover, ...game.screenshots] : [];
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(0);
    }
  }, [id]);
  useEffect(() => {
    if (isAdded) {
      const timer = setTimeout(() => setIsAdded(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [isAdded]);

  if (!game) {
    return <div>Game not found</div>;
  }

  const handleDecrease = () => {
    setQuantity(prev => Math.max(1, prev - 1));
  };

  const handleIncrease = () => {
    setQuantity(prev => prev + 1);
  };

  const handleAddToCart = () => {
    addToCart(game, quantity);
    setIsAdded(true);
    setQuantity(1);
  };

  const categories = [
    { key: "like", title: "You may also like" },
  ];

  return (
    <>
      <Breadcrumbs name={game.title} category={game.category}/>
      <section className={styles.game_info}>
        <div className={styles.game_content}>
          <div className={styles.game_gallery}>
            <Swiper
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              slidesPerView="auto"
              spaceBetween={10}
              modules={[Thumbs]}
              thumbs={{ swiper: thumbsSwiper }}
              className={styles.swiper_container}
            >
              {allImages.map((img, index) => (
                <SwiperSlide key={index}>
                  <img
                    className={styles.slide_img}
                    src={img}
                    alt={img.alt ? img.alt : `Дополнительное изображение ${index}`}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            <aside className={styles.card_gallery_thumbs}>
              <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                direction="horizontal"
                className={styles.thumbs_swiper}
                slidesPerView='auto'
                watchSlidesProgress
                breakpoints={{
                  1201: {
                    direction: "vertical",
                  },
                }}
              >
                {allImages.map((img, index) => (
                  <SwiperSlide key={index} className={styles.thumb_slide}>
                    <img
                      src={img}
                      alt={img.alt ? img.alt : `Навигация ${index}`}
                      className={styles.thumb_img}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </aside>
          </div>
          <div className={styles.game_detail}>
            <h2 className={styles.game_detail_title}>{game.title}</h2>
            {game.discount && (<p className={styles.game_detail_discount}>-{game.discount}%</p>)}
            <p className={styles.game_detail_description}>{game.description}</p>
            {game.discount ? (
              <>
                <s className={styles.game_detail_oldprice}>£{game.price}</s>
                <p className={styles.game_detail_price}>£{(game.price - (game.price / 100) * game.discount).toFixed(2)}</p>
              </>
            ) : (
              <p className={styles.game_detail_price}>£{game.price}</p>
            )}
            <div className={styles.game_detail_buttons}>
              <div className={styles.game_detail_counter}>
                <button
                  className={styles.game_detail_counter_btn}
                  onClick={handleDecrease}
                >-</button>
                <p className={styles.game_detail_counter_value}>{quantity}</p>
                <button
                  className={styles.game_detail_counter_btn}
                  onClick={handleIncrease}
                >+</button>
              </div>
              <button
                className={`${styles.add_to_cart} ${isAdded ? styles.added : ''}`}
                onClick={handleAddToCart}
                disabled={isAdded}
              >
                <img src={shopping_cart_icon} alt="Shopping cart icon" />
                {isAdded ? 'Added!' : 'Add to Cart'}
              </button>
            </div>
          </div>
        </div>
        <div className={styles.game_specifications}>
          <div className={styles.game_specifications_item}>
            <p className={styles.game_specifications_title}>Date of release</p>
            <p className={styles.game_specifications_desc}>{game.releaseDate}</p>
          </div>
          <div className={styles.game_specifications_item}>
            <p className={styles.game_specifications_title}>Amount of players</p>
            <p className={styles.game_specifications_desc}>{game.amountPlayers}</p>
          </div>
        </div>
      </section>
      <CategoryProductsList like={game.like}  />
    </>
  )
}

export default GameInfo