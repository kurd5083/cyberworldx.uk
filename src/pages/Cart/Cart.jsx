import { useState, useEffect } from "react";
import styles from "./Cart.module.scss";
import { useCartStore } from '../../store/cartStore';
import close from '/src/assets/close.svg';
import check_icon from '/src/assets/check_icon.svg';
import CategoryProductsList from "../../components/CategoryProductsList/CategoryProductsList";

const categories = [
  { key: "like", title: "You may also like" },
];

const Cart = () => {
  const { products, removeFromCart, updateQuantity, clearCart, totalItems, totalPrice, totalDiscountPrice } = useCartStore();
  const [email, setEmail] = useState("");
  const [promo, setPromo] = useState("");
  const [selectedItems, setSelectedItems] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedAll, setSelectedAll] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setEmail("");
    setPromo("");

    setTimeout(() => {
      setIsSubmitted(false)
      clearCart()
    }, 2000);
  };

  useEffect(() => {
    setSelectedAll(selectedItems.length === products.length && products.length > 0);
  }, [selectedItems, products]);

  const selectedCard = (id) => {
    setSelectedItems(prev => {
      if (prev.includes(id)) {
        return prev.filter(itemId => itemId !== id);
      } else {
        return [...prev, id];
      }
    });
  };

  const selectedAllCard = () => {
    if (selectedAll) {
      setSelectedItems([]);
    } else {
      setSelectedItems(products.map((p) => p.id));
    }
  };
  const deleteSelected = (productId) => {
    productId ? removeFromCart(productId) : selectedItems.forEach(id => removeFromCart(id));
    setSelectedItems([]);
  }

  return (
    <>
      <section className={styles.cart}>
        <header className={styles.cart_header}>
          <h2 className={styles.cart_title}>Basket</h2>
          <p className={styles.cart_quantity}>{totalItems()} item</p>
        </header>
        <div className={styles.cart_content}>
          {products.length === 0 ? (
            <p className={styles.empty_message}>Your cart is empty</p>
          ) : (
            <>
              <div className={styles.cart_content_left}>
                <div className={styles.cart_content_left_buttons}>
                  <button
                    className={`${styles.cart_content_left_btn_all} ${styles.cart_content_left_btn}`}
                    onClick={() => selectedAllCard()}
                  >
                    <img src={check_icon} alt="" />
                    Select all
                  </button>
                  <button
                    className={`${styles.cart_content_left_btn_del} ${styles.cart_content_left_btn}`}
                    onClick={() => deleteSelected()}
                  >
                    <img src={close} alt="" />
                    Delete selected
                  </button>
                </div>
                <ul className={styles.product_list}>
                  {products.map((product) => (
                    <li key={product.id} className={styles.product_item}>
                      <button
                        className={`${styles.product_item_select} ${selectedItems.includes(product.id) && styles.product_item_select_active}`}
                        onClick={() => selectedCard(product.id)}
                      ></button>
                      <img
                        src={product.cover}
                        alt={product.title}
                        className={styles.product_image}
                      />
                      <div className={styles.product_details}>
                        <div className={styles.product_details_content}>
                          <h4 className={styles.product_details_name}>{product.title}</h4>
                          <p className={styles.product_details_desc}>The Pikachu Edition is a special version of Nintendo’s iconic Game Boy Color, released to celebrate Pokémon’s global success. It features a bright yellow casing, blue buttons, and exclusive artwork of Pikachu and Pichu.
                            Compact, durable, and battery-powered, it offers a vibrant color display and works with all Game Boy and Game Boy Color games. A perfect collectible for Pokémon fans and retro gamers alike.</p>
                        </div>
                        <div className={styles.product_details_other}>
                          <div className={styles.product_details_price}>
                            {product.discount ? (
                              <>
                                <s className={styles.product_details_oldprice}>£{product.price}</s>
                                <p className={styles.product_details_price}>£{(product.price - (product.price / 100) * product.discount).toFixed(2)}</p>
                              </>
                            ) : (
                              <p className={styles.product_details_price}>£{product.price}</p>
                            )}
                            <div className={styles.quantity_control}>
                              <button
                                className={styles.quantity_button}
                                onClick={() => updateQuantity(product.id, Math.max(1, product.quantity - 1))}
                              >
                                -
                              </button>
                              <input
                                type="number"
                                min="1"
                                value={product.quantity}
                                onChange={(e) => {
                                  const newQuantity = parseInt(e.target.value) || 1;
                                  updateQuantity(product.id, Math.max(1, newQuantity));
                                }}
                                className={styles.quantity_input}
                              />
                              <button
                                className={styles.quantity_button}
                                onClick={() => updateQuantity(product.id, product.quantity + 1)}
                              >
                                +
                              </button>
                            </div>
                          </div>
                          <button
                            className={styles.product_details_del}
                            onClick={() => deleteSelected(product.id)}
                          >
                            <img src={close} alt="" />
                          </button>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={styles.cart_content_right}>
                <div className={styles.cart_content_right_content}>
                  <input
                    className={styles.cart_content_right_promo}
                    type="text"
                    placeholder="Enter promocode"
                    onChange={(e) => setPromo(e.target.value)}
                    value={promo}
                  />
                  <div className={styles.cart_content_right_blocks}>
                    <div className={styles.cart_content_right_block}>
                      <p>{totalItems()} item</p>
                      <p>£{totalPrice()}</p>
                    </div>
                    <div className={styles.cart_content_right_block}>
                      <p>Discount</p>
                      <p>£{totalDiscountPrice()}</p>
                    </div>
                    <div className={`${styles.cart_content_right_block} ${styles.cart_content_right_block_total}`}>
                      <h3>Total</h3>
                      <h3>£{(totalPrice() - totalDiscountPrice()).toFixed(2)}</h3>
                    </div>
                  </div>
                </div>
                {isSubmitted ? (
                  <div className={styles.success_message}>
                    <p>THANK YOU!</p>
                    <p>We will contact you shortly at the provided email address.</p>
                    <p>Your order is being processed.</p>
                  </div>
                ) : (
                  <form className={styles.cart_content_right_form} onSubmit={handleSubmit}>
                    <p className={styles.cart_content_right_form_subtext}>Enter your Email to confirm your purchase - quick and easy!</p>
                    <input
                      className={styles.cart_content_right_form_input}
                      type="email"
                      placeholder="Enter your Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required />
                    <button className={styles.cart_content_right_form_btn} type="submit">Complete your Purchase</button>
                  </form>
                )}
              </div>
            </>
          )}
        </div>
      </section>
      <CategoryProductsList categories={categories} />
    </>
  );
};

export default Cart;