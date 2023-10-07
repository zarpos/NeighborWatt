import styles from "./Landpage2.module.css";

const Landpage2 = () => {
  return (
    <div className={styles.landpage2}>
      <div className={styles.capturaDePantalla20231006} />
      <img className={styles.image2Icon} alt="" src="/image-2@2x.png" />
      <div className={styles.landpage2Child} />
      <div className={styles.landpage2Item} />
      <b className={styles.transparency}>Transparency</b>
      <div className={styles.landpage2Inner} />
      <div className={styles.ellipseDiv} />
      <div className={styles.landpage2Child1} />
      <b className={styles.letsBuildThe}>Let’s build the future</b>
      <b className={styles.connectPeople}>
        <p className={styles.connect}>{`Connect `}</p>
        <p className={styles.connect}>people</p>
      </b>
      <b className={styles.carbonNegative}>
        <p className={styles.connect}>Carbon</p>
        <p className={styles.connect}>negative</p>
      </b>
      <img className={styles.diamond1Icon} alt="" src="/diamond-1@2x.png" />
      <img className={styles.plant1Icon} alt="" src="/plant-1@2x.png" />
      <div className={styles.reduceYourCo2}>Reduce your CO2</div>
      <div className={styles.decentralized}>Decentralized</div>
      <div className={styles.shareYourElectricity}>Share your electricity</div>
      <img className={styles.connect1Icon} alt="" src="/Connect.png" />
    </div>
  );
};

export default Landpage2;