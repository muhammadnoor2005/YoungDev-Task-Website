import { useContext } from "react";
import styles from "./LandingImage.module.css";
import ScrollCtx from "@/context/ScrollCtx";

export default function(){
    const scrollCtx = useContext(ScrollCtx);

    return(
        <div className={styles.mainDiv} id="landingImg">
            {/* red leather background img */}
            <img src="/landingImg.png" alt="landingImg" className={styles.landingImg}/>
            {/* person img */}
            <img src="/personImg.png" alt="person" className={styles.personImg} />

            {/* THE BEST COLLECTION */}
            <div className={styles.landingTextDiv}>
                <div className={styles.theBestCollection}>
                    <span>THE BEST</span>
                    <br />
                    <span className={styles.collectionText}>COLLECTION</span>
                </div>

                <span className={styles.shortDescription}> Explore our carefully curated collections designed to inspire and empower you to express your unique style.</span>

                {/* SHOW NOW button div */}
                <div className={styles.shopNowButton}  onClick={() => {scrollCtx.scrollDiv("trending")}}>
                    <span>SHOP NOW</span>
                </div>

            </div>
        </div>
    )
}