import styles from "./NewCollection.module.css";
import styles2 from "../Trending/Trending.module.css";
import ProductCard from "../ProductCard/ProductCard";

export default function({products}){
    const product = products.map((p) => {
        return(
            <ProductCard title={p.name} imgSrc={p.img} price={p.price} key={p.id}/>
        )
    });
    
    return(
        <div>
            {/* NEW COLLECTION div */}
            <div className={styles2.trendingTxtWithHr} id="newCollection">
                <p>NEW COLLECTION</p>
                <span> Introducing Our Latest Collection Of Products! </span>
            </div>

            {/* all products rendered div */}
            <div className={styles.allProductsDiv}>
                {product}   
            </div>
        </div>
    )
}