import { getProducts } from "@/services/products";
import { getSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styles2 from "../../components/NewCollection/NewCollection.module.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import ProductCard from "@/components/ProductCard/ProductCard";
import { FaLeaf } from "react-icons/fa";
import styles from "./search.module.css";


export default function({products}){
    const router = useRouter();
    const {item} = router.query;
    const itemTosearch = item.toLowerCase();
    const [mappedProducts,setMappedProducts] = useState();

    const searchedItem = [];

    products.forEach((p) => {
        if(itemTosearch.includes(p.category) || (p.category).includes(itemTosearch)){
            searchedItem.push(p);
        }
    });


    useEffect(() => {
        if(searchedItem.length !== 0){
            const mappedProducts = searchedItem.map((p) => {
                return(
                    <ProductCard title={p.name} imgSrc={p.img} price={p.price} key={p.id}/>
                )
            });
            setMappedProducts(mappedProducts);
        } else{
            setMappedProducts();
        }
    },[item]);
    
    

    return(
        <div>
            <Header/>
            {/* if the search product is not found then show no result found else show count of found product */}
            {mappedProducts ? <div className={styles.itemCountDiv} >
                    <span>{`Found ${mappedProducts.length} product(s) for ${item}`}</span>
            </div>
            :
            <div className={styles.noProductFoundDiv} >
                {`No result found for "${item}"`}
            </div>
            }

            {/* rendering all the found products */}
            <div className={styles2.allProductsDiv} style={{
                padding:"var(--body-margin)"
            }}>
                {mappedProducts}   
            </div>

            <Footer/> 
        </div>
    )
}

export async function getServerSideProps({req}){
    const session = await getSession({req});
    if(!session){
      return{
        redirect:{
          destination:"/auth/login",
          permanent:false
        }
      }
    }

    const products = await getProducts();
    return{
        props:{
            products
        }
    }
}
