import styles from "./Wave.module.css";

const Wave = () => {
  return (
    <>
      <div
        className={styles.containerWave}
        style={{ height: "150px", overflow: "hidden" }}
      >
        <svg
          viewBox="0 0 500 150"
          preserveAspectRatio="none"
          style={{ height: "100%", width: "100%" }}
        >
          <path
            d="M-0.00,49.85 C150.00,149.60 349.20,-49.85 500.00,49.85 L500.00,149.60 L-0.00,149.60 Z"
            style={{ stroke: "none", fill: "#0f547b" }}
          ></path>
        </svg>
      </div>
    </>
  );
};

export default Wave;
