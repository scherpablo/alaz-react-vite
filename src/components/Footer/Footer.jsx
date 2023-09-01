import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <>
      <footer id="contact" className={styles.footer}>
        <div className={styles.containerFooter}>
          {/* REDES */}
          <div className={styles.socialNetworks}>
            <div className={styles.containerIcon}>
              <i
                className="fa-brands fa-square-facebook fa-lg"
                style={{ color: "#c1da99" }}
              ></i>
              <a href="https://facebook.com/alazlogistica">Facebook</a>
            </div>
            <div className={styles.containerIcon}>
              <i
                className="fa-brands fa-instagram fa-lg"
                style={{ color: "#c1da99" }}
              ></i>
              <a href="https://instagram.com/alazlogistica/">Instagram</a>
            </div>
            <div className={styles.containerIcon}>
              <i
                className="fa-brands fa-whatsapp fa-lg"
                style={{ color: "#c1da99" }}
              ></i>
              <a href="https://whatsapp.com/">WhatsApp</a>
            </div>
            <div className={styles.containerIcon}>
              <i
                className="fa-regular fa-envelope fa-lg"
                style={{ color: "#c1da99" }}
              ></i>
              <p>info@alazlogistica.com.ar</p>
            </div>
          </div>

          {/* FOOTER BAR  */}
          <div className={styles.linksFooter}>
            <div className={styles.containerIcon}>
              <i
                className="fa-regular fa-user fa-lg"
                style={{ color: "#c1da99" }}
              ></i>
              <a href="#us">Nosotros</a>
            </div>
            <div className={styles.containerIcon}>
              <i
                className="fa-solid fa-truck-fast fa-lg"
                style={{ color: "#c1da99" }}
              ></i>
              <a href="#services">Servicios</a>
            </div>
            <div className={styles.containerIcon}>
              <i
                className="fa-solid fa-sitemap fa-lg"
                style={{ color: "#c1da99" }}
              ></i>
              <a href="#directDivision">Division Directa</a>
            </div>
            <div className={styles.containerIcon}>
              <i
                className="fa-solid fa-cart-shopping fa-lg"
                style={{ color: "#c1da99" }}
              ></i>
              <a href="#clients">Clientes</a>
            </div>
          </div>
        </div>
        <div className={styles.containerCopyright}>
          <p>
            Copyright {String.fromCharCode(169)} 2023 | Desarrollado por
            <a href="https://facilitadora.com.ar"> Facilitadora.</a>
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
