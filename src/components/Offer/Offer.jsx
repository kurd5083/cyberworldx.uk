import { useState } from "react";
import styles from "./Offer.module.scss";
import banner_img from "/src/assets/banner_img.svg";
import banner_img_2 from "/src/assets/banner_img_2.png";
import banner_img_3 from "/src/assets/banner_img_3.png";

const Offer = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setEmail("");
    setTimeout(() => setIsSubmitted(false), 2000);
  };

  return (
    <section className={styles.offer_container}>
      <div className={styles.offer}>
        <img className={styles.offer_banner_img} src={banner_img} alt="" />
        <img className={styles.offer_banner_img_2} src={banner_img_2} alt="" />
        <img className={styles.offer_banner_img_3} src={banner_img_3} alt="" />
        <div className={styles.offer_conent}>
          <h3 className={styles.offer_conent_title}>
            Surprise! Enjoy a <span>50% Discount</span> on Your First Purchase
          </h3>
          <p className={styles.offer_conent_desc}>
            Please leave your email address below — your personal promo code is coming soon to your inbox!
          </p>
          {isSubmitted ? (
            <div className={styles.success_message}>
              Success! Your promo code is on its way to your email.
            </div>
          ) : (
            <form className={styles.offer_conent_form} onSubmit={handleSubmit}>
              <input
                className={styles.offer_conent_input}
                type="email"
                placeholder="Enter your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button className={styles.offer_conent_btn} type="submit">
                Take Promo
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Offer;