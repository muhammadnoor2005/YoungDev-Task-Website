import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import styles from "./Footer.module.css";
import { useRouter } from "next/router";

export default function(){
    const router = useRouter();
    return(
        <div className={styles.posRelDiv}>
            <div className={styles.footer}>
                <div className={styles.footerBody}>

                    {/* LOGO in footer */}
                    <div className={styles.logoHeadingInFooter}>
                        <span className={styles.logoName}>LOGO</span>
                    </div>
                    
                    {/* Trending column in footer */}
                    <div className={styles.footerTrending}>
                        <p className={styles.trendingHeading}>TRENDING</p>
                        
                        <span onClick={() => {router.push("/search/shirts")}}>Shirts</span>
                        <span onClick={() => {router.push("/search/shoes")}}>Shoes</span>
                        <span onClick={() => {router.push("/search/perfume")}}>Perfume</span>
                        <span onClick={() => {router.push("/search/jeans")}}>Jeans</span>
                    </div>

                    {/* POPULAR column in footer */}
                    <div className={styles.footerTrending}>
                        <p className={styles.trendingHeading}>POPULAR</p>
                        
                        <span onClick={() => {router.push("/search/watch")}}>Watch</span>
                        <span onClick={() => {router.push("/search/gloves")}}>Gloves</span>
                        <span onClick={() => {router.push("/search/chain")}}>Chain</span>
                        <span onClick={() => {router.push("/search/jwellery")}}>Jwellery</span>
                    </div>

                    {/* FOLLOW US section in footer */}
                    <div className={styles.followusDiv}>
                        <p className={styles.trendingHeading}>FOllOW US</p>
                        
                        <div >
                            <FaFacebook/>
                            <FaTwitter/>
                            <FaInstagram/>
                            <FaYoutube/>
                        </div>
                    </div>
                </div>

                <div className={styles.copyrightDiv}>
                    <span>LOGO - All rights reserved</span>
                </div>
            </div>
        </div>
    )
}