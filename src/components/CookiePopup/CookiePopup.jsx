import { useState, useEffect } from 'react'
import styles from "./CookiePopup.module.scss";
import { Link } from "react-router-dom";
const CookiePopup = () => {
	const [visible, setVisible] = useState(false);
	useEffect(() => {
		let cookieChoice = localStorage.getItem('cookieChoice');
		if (!cookieChoice) {
			setVisible(true)
		}
	}, [])
	const handleAccept = () => {
		localStorage.setItem('cookieChoice', 'accepted')
		setVisible(false)
	}

	if (!visible) return null;
	return (
	
			<div className={styles.cookie_content}>
				<h4 className={styles.cookie_content_title}>🍪 We value your privacy</h4>
				<p className={styles.cookie_desc}>This website uses cookies or similar technologies, to enhance your browsing experience and provide personalized recommendations. By continuing to use our website, you agree to our 
					<Link to="/privacy_policy"> Privacy Policy</Link>.
				</p>
				<div className={styles.cookie_buttons}>
					<Link to="/privacy_policy">
						<button className={`${styles.cookie_button} ${styles._cookie_button_more}`}>
							Read More
						</button>
					</Link>
					<button className={`${styles.cookie_button} ${styles.cookie_button_accept}`} onClick={handleAccept}>
						Accept All
					</button>
				</div>
			</div>
	
	)
}

export default CookiePopup
