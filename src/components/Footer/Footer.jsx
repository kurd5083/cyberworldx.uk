import { useState } from "react";
import styles from "./Footer.module.scss";
import logo_icon from '/src/assets/logo_icon.svg'
import apple_icon from '/src/assets/apple_icon.svg'
import google_icon from '/src/assets/google_icon.svg'
import visa_icon from '/src/assets/visa_icon.svg'
import mastercard_icon from '/src/assets/mastercard_icon.svg'
import klarna_icon from '/src/assets/klarna_icon.svg'
import { Link } from "react-router-dom";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setEmail("");
    setTimeout(() => setIsSubmitted(false), 2000);
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.footer_content}>
        <section className={styles.footer_top}>
          <div className={styles.order_request}>
            <Link to="/"><img className={styles.footer_logo} src={logo_icon} alt="" /></Link>
            <div className={styles.order_request_content}>
              <h3 className={styles.footer_top_title}>Submit Your Order Request</h3>
              <p className={styles.footer_top_desc}>Leave your email below — your personal promo code is coming soon!</p>
              {isSubmitted ? (
                <div className={styles.success_message}>
                  Success! Your promo code is on its way to your email.
                </div>
              ) : (
                <form className={styles.footer_top_form} onSubmit={handleSubmit}>
                  <input
                    className={styles.footer_top_input}
                    type="email"
                    placeholder="Enter your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <button className={styles.footer_top_btn} type="submit">
                    Make an order
                  </button>
                </form>
              )}
            </div>
          </div>
          <div className={styles.links}>
            <h4 className={styles.links_title}>Categories</h4>
            <ul className={styles.links_list}>
              <li><Link to="">Games</Link></li>
              <li><Link to="">Consoles</Link></li>
              <li><Link to="">Accessories</Link></li>
              <li><Link to="">Unboxed Games</Link></li>
              <li><Link to="">Trading Cards</Link></li>
              <li><Link to="">Manuals</Link></li>
              <li><Link to="">VHS</Link></li>
              <li><Link to="">Books</Link></li>
            </ul>
          </div>
          <div className={styles.links}>
            <h4 className={styles.links_title}>Links</h4>
            <ul className={styles.links_list}>
              <li><Link to="/terms_service">Terms of Service</Link></li>
              <li><Link to="/privacy_policy">Privacy Policy</Link></li>
              <li><Link to="/refund_policy">Refund Policy</Link></li>
              <li><Link to="/shipping_policy">Shipping Policy</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/payment_policy">Payment Policy</Link></li>
            </ul>
          </div>
        </section>
        <section className={styles.footer_bottom}>
          <div className={styles.footer_payment_method}>
            <img src={apple_icon} alt="" />
            <img src={google_icon} alt="" />
            <img src={visa_icon} alt="" />
            <img src={mastercard_icon} alt="" />
            <img src={klarna_icon} alt="" />
          </div>
          <p className={styles.footer_copyright}>Copyright © 2025</p>
        </section>
      </div>
    </footer>
  )
}

export default Footer
