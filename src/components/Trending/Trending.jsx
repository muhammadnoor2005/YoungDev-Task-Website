import styles from "./Trending.module.css";
import TrendingCard from "./TrendingCard/TrendingCard";

//trending section on home page
export default function(){
    return(
        <div className={styles.trendingMainDiv} id="trending">

            <div className={styles.trendingTxtWithHr}>
                <p>TRENDING PRODUCTS</p>
                <span> Introducing Our Latest Trending Collection! </span>             
            </div>

            <br />

            {/* 3 tredning cards */}
            <div className={styles.cardDiv}>
                <TrendingCard imgSrc={"/trending/perfume1.jpg"} title={"Perfume"}/>
                <TrendingCard imgSrc={"/trending/shoes.jpeg"} title={"Shoes"}/>
                <TrendingCard imgSrc={"/trending/watch.jpeg"} title={"Watches"}/>
            </div>
        </div>
    )
}