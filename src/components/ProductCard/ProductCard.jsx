import styles from "./ProductCard.module.css";

export default function({title,imgSrc,price}){
    return(
        <div className={styles.cardBody}>
            <img src={imgSrc} alt="product" className={styles.img}/>
            <span className={styles.name}>{title}</span>
            <span className={styles.price}>{`Rs: ${price}.00`}</span>
        </div>     
    )
}