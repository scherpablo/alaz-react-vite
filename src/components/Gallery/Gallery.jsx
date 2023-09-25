import { useState } from 'react';
import styles from './Gallery.module.css';
import Modal from '../Modal/Modal';

const Gallery = () => {
  const [modalImage, setModalImage] = useState(null);

  const openModal = (imageUrl) => {
    setModalImage(imageUrl);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  return (
    <>
      <section className={`${styles.containerGallery} ${styles.section}`}>
        <h2 className={`${styles.title} ${styles.galleryTitle}`}>Galeria de Imagenes</h2>
        <article className={styles.galleryContent}>
          <img
            src="/img/gallery/gallery01.png"
            alt=""
            onClick={() => openModal("/img/gallery/gallery01.png")}
          />
          <img
            src="/img/gallery/gallery02.png"
            alt=""
            onClick={() => openModal("/img/gallery/gallery02.png")}
          />
          <img
            src="/img/gallery/gallery03.png"
            alt=""
            onClick={() => openModal("/img/gallery/gallery03.png")}
          />
          <img
            src="/img/gallery/gallery04.png"
            alt=""
            onClick={() => openModal("/img/gallery/gallery04.png")}
          />
          <img
            src="/img/gallery/gallery05.png"
            alt=""
            onClick={() => openModal("/img/gallery/gallery05.png")}
          />
          <img
            src="/img/gallery/gallery06.png"
            alt=""
            onClick={() => openModal("/img/gallery/gallery06.png")}
          />
        </article>
      </section>
      {modalImage && <Modal imageUrl={modalImage} onClose={closeModal} />}
    </>
  );
};

export default Gallery;





