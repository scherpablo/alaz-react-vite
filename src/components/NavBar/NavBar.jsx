import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
    <>
      <nav className={styles.navContainer}>
        <div className={styles.navLinks}>
          <a href="#us" className={styles.linksNav}>
            La Empresa
          </a>
          <a href="#services" className={styles.linksNav}>
            Servicios
          </a>
          <a href="#directDivision" className={styles.linksNav}>
            Division Directa
          </a>
          <a href="#clients" className={styles.linksNav}>
            Clientes
          </a>
          <a href="#contact" className={styles.linksNav}>
            Contacto
          </a>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
