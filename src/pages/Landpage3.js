import styles from "./Landpage3.module.css";

const Landpage3 = () => {
    return (
        <div className={styles.landpage3}>
            <div className={styles.capturaDePantalla20231006} />
            <img className={styles.image2Icon} alt="" src="/image-2@2x.png" />
            <div className={styles.landpage3Child} />
            <b className={styles.shareYourEnergy}>Share your energy</b>
            <div className={styles.landpage3Item} />
            <b className={styles.boostYourEarningsContainer}>
                <p className={styles.boostYourEarnings}>Boost Your Earnings</p>
                <p className={styles.boostYourEarnings}>&nbsp;</p>
                <p className={styles.boostYourEarnings}>Grow Your Savings</p>
                <p className={styles.boostYourEarnings}>&nbsp;</p>
                <p className={styles.boostYourEarnings}>Empower Causes</p>
            </b>
            <div className={styles.landpage3Inner} />
            <div className={styles.ellipseDiv} />
            <div className={styles.landpage3Child1} />
            <img className={styles.phone1Icon} alt="" src="/phone-1@2x.png" />
        </div>
    );
};

export default Landpage3;