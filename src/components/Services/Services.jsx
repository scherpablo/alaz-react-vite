import Card from "../Card/Card";
import styles from "./Services.module.css";

const Services = () => {
  const cardsData = [
    {
      icon: <img src="img/services/camion.png" className={styles.imgIcon}></img>,
      title: "Distribución",
      info: "Si necesita de un proveedor estable, eficiente y eficaz que responda en tiempo y forma para realizar la distribución y el traslado de su mercadería, correo interno y/o insumos. Para ello diseñamos un servicio de distribución que cumpla con sus expectativas a través de la información que Ud. nos brinde y nuestra experiencia en logística."
    },
    {
      icon: <img src="img/services/repartidor.png" className={styles.imgIcon}></img>,
      title: "Puerta a Puerta",
      info: "Para que su negocio crezca tiene que tener la seguridad y confianza de que sus pedidos llegan en tiempo y forma a los destinos que Ud. desea. Para esto le ofrecemos este servicio que consiste en retirar y entregar su mercadería en los puntos que solicite, ya sea su empresa o en un proveedor o cliente, cumpliendo con la puntualidad y seriedad que se requiere"
    },
    {
      icon: <img src="img/services/redespacho.png" className={styles.imgIcon}></img>,
      title: "Redespacho",
      info: "Este Servicio se implementa para poder llevar su mercadería a los transportes o expresos con los que su empresa se maneja habitualmente para envíos al interior del país.  Se realiza en el día, con retiro y entrega a domicilio garantizando la seguridad de su envío y su arribo a destino con la responsabilidad y el compromiso que nos caracterizan."
    },
    {
      icon: <img src="img/services/reembolso.png" className={styles.imgIcon}></img>,
      title: "Contrareembolso",
      info: "Le damos la posibilidad al cliente de utilizar este servicio conjuntamente con el envío de su producto, de esa manera puede enviar la mercadería y en el mismo momento de la entrega se le cobra el total de su Factura haciéndonos cargo del cobro y pago del contra reembolso."
    },
    {
      icon: <img src="img/services/seguro.png" className={styles.imgIcon}></img>,
      title: "Seguro mercadería",
      info: "Los envíos que contengan “mercaderías” con un valor determinado podrán ser asegurados durante todo el trayecto: desde el retiro hasta la entrega al destinatario. De esta manera cuidamos tu mercadería y nos aseguramos de estar protegidos ante cualquier eventualidad."
    },
    {
      icon: <img src="img/services/inversa.png" className={styles.imgIcon}></img>,
      title: "Logística Inversa",
      info: "Gestionamos el retorno de productos y devoluciones de manera eficiente, reduciendo costos y mejorando la satisfacción del cliente. Realizamos estrictos controles de calidad para garantizar que la mercadería esté en condiciones óptimas antes de su distribucíon."
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
