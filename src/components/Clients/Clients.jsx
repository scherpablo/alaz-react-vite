import styles from "./Clients.module.css";

const Clients = () => {
  return (
    <>
      <section className={styles.containerClients} id="clients">
        <h2 className={`${styles.title} ${styles.clientsTitle}`}>Clientes</h2>
        <article className={styles.clientsContent}>
          <img src="/img/clients/pami.png" alt="" className={styles.galleryImg} />
          <img src="/img/clients/bagues.png" alt="" className={styles.galleryImg} />
          <img src="/img/clients/brilho.png" alt="" className={styles.galleryImg} />
          <img src="/img/clients/ohana.png" alt="" className={styles.galleryImg} />
          <img src="/img/clients/csea.png" alt="" className={styles.galleryImg} />
          <img src="/img/clients/pami.png" alt="" className={styles.galleryImg} />
        </article>
      </section>
      <div className={styles.logoSections}>
        <a href="#home">
          <img src="/img/us/logo-section.png" alt="" />
        </a>
      </div>
    </>
  );
};

export default Clients;
