import styles from './TopSection.module.css';

const TopSection = () => {
  return (
    <>
      <section className={`${styles.topSection} ${styles.section}`}>
        <h1 className={styles.h1TopSection}>
          Brindamos el mejor servicio con la calidad y el compromiso que nos
          caracterizan.
        </h1>
        {/* <img src="../public/img/topSection/camionetas.png" alt="" /> */}
        <img src="/img/topSection/camionetas.png" alt="" />
      </section>
    </>
  );
};

export default TopSection;
