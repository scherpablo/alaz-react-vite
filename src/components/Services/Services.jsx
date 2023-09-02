import Card from "../Card/Card";
import styles from "./Services.module.css";

const Services = () => {
  const cardsData = [
    {
      icon: <i className="fa-solid fa-truck fa-2xl"></i>,
      title: "Card 1",
      info: "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.",
    },
    {
      icon: <i className="fa-solid fa-truck fa-2xl"></i>,
      title: "Card 2",
      info: "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.",
    },
    {
      icon: <i className="fa-solid fa-truck fa-2xl"></i>,
      title: "Card 3",
      info: "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.",
    },
    {
      icon: <i className="fa-solid fa-truck fa-2xl"></i>,
      title: "Card 4",
      info: "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.",
    },
    {
      icon: <i className="fa-solid fa-truck fa-2xl"></i>,
      title: "Card 5",
      info: "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.",
    },
    {
      icon: <i className="fa-solid fa-truck fa-2xl"></i>,
      title: "Card 6",
      info: "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.",
    },
  ];

  return (
    <>
      <section className={styles.containerCards} id="services">
        <h2 className={`${styles.title} ${styles.serviceTitle}`}>Servicios</h2>
        <div className={styles.cards}>
          {cardsData.map((card, index) => (
            <Card
              key={index}
              icon={card.icon}
              title={card.title}
              info={card.info}
            />
          ))}
        </div>
      </section>
      <div className={styles.logoSections}>
        <a href="#home">
          <img src="/img/us/logo-section.png" alt="" />
        </a>
      </div>
    </>
  );
};

export default Services;
