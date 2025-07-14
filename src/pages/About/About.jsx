import styles from "./About.module.scss";

const About = () => {
    return (
        <section className={styles.about}>
            <h2 className={styles.about_head}>About Us</h2>
            <div className={styles.about_block}>
                <p>Welcome to GameSphere – your ultimate destination for premium PC games at unbeatable prices. Established in the heart of the UK, we’ve been committed to providing gamers with outstanding value and a flawless gaming experience since 2017.</p>
                <p>Whether you’re into heart-racing action, captivating RPGs, or thrilling online competitions, we have something for every type of gamer.</p>
                <p>We take pride in our rapid key delivery, secure payment methods, and customer support that’s always ready to assist you. All our game keys are 100% genuine and delivered straight to your inbox as soon as your purchase is finalized.</p>
                <p>Become part of a thriving community of gamers who rely on GameSphere for their digital gaming needs. Enhance your library and embark on your next adventure today!</p>
            </div>
        </section>
    )
}

export default About
