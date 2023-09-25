import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <>
      <footer id="contact" className={styles.footer}>
        <div className={styles.containerFooter}>
          {/* REDES */}
          <div className={styles.socialNetworks}>
            <div className={styles.containerIcon}>
              <i className="fa-brands fa-square-facebook fa-lg"></i>
              <a href="https://facebook.com/alazlogistica/">Facebook</a>
            </div>
            <div className={styles.containerIcon}>
              <i className="fa-brands fa-instagram fa-lg"></i>
              <a href="https://instagram.com/alazlogistica/">Instagram</a>
            </div>
            <div className={styles.containerIcon}>
              <i className="fa-brands fa-whatsapp fa-lg"></i>
              <a href="https://whatsapp.com/">WhatsApp</a>
            </div>
            <div className={styles.containerIcon}>
              <i className="fa-regular fa-envelope fa-lg"></i>
              <p>info@alazlogistica.com.ar</p>
            </div>
          </div>

          {/* FOOTER BAR  */}
          <div className={styles.linksFooter}>
            <div className={styles.containerIcon}>
              <i className="fa-regular fa-user fa-lg"></i>
              <a href="#us">Nosotros</a>
            </div>
            <div className={styles.containerIcon}>
              <i className="fa-solid fa-truck-fast fa-lg"></i>
              <a href="#services">Servicios</a>
            </div>
            <div className={styles.containerIcon}>
              <i className="fa-solid fa-sitemap fa-lg"></i>
              <a href="#directDivision">Division Directa</a>
            </div>
            <div className={styles.containerIcon}>
              <i className="fa-solid fa-cart-shopping fa-lg"></i>
              <a href="#clients">Clientes</a>
            </div>
          </div>
        </div>
        <div className={styles.containerCopyright}>
          <div className={styles.containerCopyLinks}>
            <p>
              <a href="#home" className={styles.copyLink}>
                Alaz Logistica{" "}
              </a>
              <span>{String.fromCharCode(169)} 2023 | Desarrollado por</span>{" "}
              <Link
                to="https://facilitadora.com.ar"
                target="_blank"
                className={styles.copyLink}
              >
                Facilitadora
              </Link>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
