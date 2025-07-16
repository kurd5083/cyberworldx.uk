import { useEffect, useState } from "react";
import styles from "./PopupEntrance.module.scss";
import { usePopupStore } from '../../store/popupStore';
import close from '/src/assets/close.svg';
import logo_popup_icon from '/src/assets/logo_popup_icon.svg';
import { popup_data } from '../../data/popup';
import { useAuthStore } from "../../store/authStore";
import eye_open_icon from "/src/assets/eye_open_icon.svg";
import eye_close_icon from "/src/assets/eye_close_icon.svg";

const PopupEntrance = () => {
    const { popup, openPopup, isPopupOpen, closePopup } = usePopupStore();
    const { login, register } = useAuthStore();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [error, setError] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const resetForm = () => {
        setEmail('');
        setPassword('');
        setRepeatPassword('');
        setError('');
    }

    useEffect(() => {
        if (isPopupOpen()) {
            resetForm();
        }
    }, [isPopupOpen(), popup]);

    if (!isPopupOpen()) return null;

    const handleLinkClick = () => {
        const newPopupType = popup.title === "Create Account" ? popup_data.login : popup_data.register;
        openPopup(newPopupType);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            if (popup.title === "Create Account") {
                register(email, password, repeatPassword);

            } else {
                login(email, password);
            }
            resetForm();
            closePopup();
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <section
            className={styles.popup_overlay}
            onClick={() => closePopup()}
        >
            <div className={styles.popup_content} onClick={(e) => e.stopPropagation()}>
                <button
                    className={styles.popup_close}
                    onClick={() => closePopup()}
                >
                    <img src={close} alt="Close" />
                </button>
                <img className={styles.popup_logo} src={logo_popup_icon} alt="Company logo" />
                <h2 className={styles.popup_title}>{popup.title}</h2>
                <p className={styles.popup_desc}>{popup.desc}</p>
                <form className={styles.popup_form} onSubmit={handleSubmit}>
                    <input
                        className={`${styles.popup_input} ${styles.popup_mail}`}
                        type="email"
                        placeholder="Enter your Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        autoComplete="off"
                    />
                    <div className={styles.popup_form_container}>
                    <input
                        className={`${styles.popup_input} ${styles.popup_password}`}
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter your Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        autoComplete="new-password"
                    />
                    <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className={styles.eye_button}
                    >
                        <img src={showPassword ? eye_open_icon : eye_close_icon} alt="Toggle password visibility" />
                    </button>
                    </div>
                    {popup.repeatPassword && (
                        <input
                            className={`${styles.popup_input} ${styles.popup_password}`}
                            type="password"
                            placeholder="Repeat your Password"
                            value={repeatPassword}
                            onChange={(e) => setRepeatPassword(e.target.value)}
                            required
                            autoComplete="new-password"
                        />
                    )}
                    <button
                        type="submit"
                        className={`${styles.popup_btn} ${styles.popup_btn_form}`}
                    >
                        {popup.btnForm}
                    </button>
                    {error && (<p className={styles.popup_error}>{error}</p>)}

                    <p className={styles.popup_subtext}>{popup.subtext}</p>
                    <button
                        type="button"
                        className={`${styles.popup_btn} ${styles.popup_btn_link}`}
                        onClick={handleLinkClick}

                    >{popup.btnLink}</button>
                </form>
            </div>
        </section>
    )
}

export default PopupEntrance
