import styles from "./Landpage1.module.css";

const Landpage1 = () => {
  return (
    <div className={styles.landpage1}>
      <div className={styles.capturaDePantalla20231006} />
      <div className={styles.anInnovativeAndContainer}>
        <p
          className={styles.anInnovativeAnd}
        >{`An innovative and sustainable way to manage your electricity `}</p>
        <p className={styles.anInnovativeAnd}>
          and strengthen bonds with your neighbors
        </p>
      </div>
      <b className={styles.discoverNeighborwattEnergyContainer}>
        <p className={styles.anInnovativeAnd}>Discover NeighborWatt:</p>
        <p className={styles.anInnovativeAnd}>
          Energy for the people, by the people
        </p>
      </b>
      <img
        className={styles.a2a9b3C71e4bf0B2961c87fb00Icon}
        alt=""
        src="/00a2a9b3c71e4bf0b2961c87fb00e9a8-1@2x.png"
      />
      <div className={styles.landpage1Child} />
      <img className={styles.image2Icon} alt="" src="/image-2@2x.png" />
      <div className={styles.landpage1Item} />
      <b className={styles.goGreen}>{`Go green `}</b>
      <div className={styles.landpage1Inner} />
      <b className={styles.homeFaqs}>HOME | FAQs | CONTACT | COMMUNITY</b>
      <img
        className={styles.logoNeighborwatt11}
        alt=""
        src="/logoneighborwatt-1-1@2x.png"
      />
      <div className={styles.ellipseDiv} />
    </div>
  );
};

export default Landpage1;
