import styles from "./Header.module.css";
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
      <header className={styles.hero} id="home">
        <div className={styles.containerHero}>
          <div className={styles.logoContainer}>
            <img
              src="/img/header/logo10years.png"
              alt=""
              className={styles.logo}
            />
          </div>   
          <Link to="https://whatsapp.com/" target="_blank">
          <button>
              <div>
                <span>
                  <p className={styles.contact}>Contacto</p>
                </span>
              </div>
              <div>
                <span>
                  <p className={styles.whats}>WhatsApp</p>
                </span>
              </div>
            </button>
          </Link>
        </div>
      </header>
    </>
  );
};

export default Header;
