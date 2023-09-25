import { Link } from "react-router-dom";
import styles from "./Card.module.css";

const Card = ({ icon, title, info }) => {
  return (
    <>
        <div className={styles.containerCard}>
          <article className={styles.card}>
            <div className={styles.icon}>{icon}</div>
            <h3>{title}</h3>
            <p>
              {info}
            </p>
            <div className={styles.containerIcons}>
              <Link to="https://facebook.com/alazlogistica" target="_blank">
                <i
                  className="fa-brands fa-square-facebook fa-lg"
                ></i>
              </Link>
              <Link to="https://instagram.com/alazlogistica/" target="_blank">
                <i
                  className="fa-brands fa-instagram fa-lg"
                ></i>
              </Link>
              <Link to="https://whatsapp.com/" target="_blank">
                <i
                  className="fa-brands fa-whatsapp fa-lg"
                ></i>
              </Link>
            </div>
          </article>
        </div>
    </>
  );
};

export default Card;
