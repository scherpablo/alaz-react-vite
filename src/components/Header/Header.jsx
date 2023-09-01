import styles from "./Header.module.css";

const Header = () => {
  return (
    <>
      <header className={styles.hero} id="home">
        <div className={styles.containerHero}>
          <div className={styles.logoContainer}>
            {/* <img src="../public/img/header/logo10años.png" alt="" className={styles.logo} /> */}
            <img src="/img/logo10años.png" alt="" className={styles.logo} />
          </div>
          <a href="https://whatsapp.com/" className={`${styles.ctaWhats} ${styles.cta}`}>
            WhatsApp
          </a>
        </div>
      </header>
    </>
  );
};

export default Header;
