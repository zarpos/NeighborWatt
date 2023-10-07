import styles from "./LandpageFooter.module.css";

const LandpageFooter = () => {
    return (
        <div className={styles.landpageFooter}>
            <div className={styles.capturaDePantalla20231006} />
            <div className={styles.landpageFooterChild} />
            <img className={styles.image2Icon} alt="" src="/image-2@2x.png" />
            <div className={styles.landpageFooterItem} />
            <b className={styles.yourInboxDeserves}>Your Inbox Deserves a Boost!</b>
            <b className={styles.subscribeToThe}>Subscribe to the WATTLetter</b>
            <div className={styles.landpageFooterInner} />
            <div className={styles.rectangleDiv} />
            <b className={styles.subscribe}>Subscribe</b>
            <div className={styles.enterEmail}>Enter email</div>
            <div className={styles.allRightsReserved}>
                © All rights reserved crypto Corporation
            </div>
            <img className={styles.nw1Icon} alt="" src="/nw-1@2x.png" />
            <div
                className={styles.faqsContact}
            >{`FAQs         |         Contact         |         Community         `}</div>
        </div>
    );
};

export default LandpageFooter;