import { getProducts } from "@/services/products";
import { useRouter } from "next/router";
import styles2 from "@/components/NewCollection/NewCollection.module.css";
import ProductCard from "@/components/ProductCard/ProductCard";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { getSession } from "next-auth/react";

export default function({products}){
    const router = useRouter();
    const {category} = router.query;

    //required trending product array for ex watches or perfumes or shoes
    const sortedProduct = [];

    //checking to show specific product then pushing to sortedProduct then mapping it
    products.forEach((p) => {
        if(category.includes(p.category)){
            sortedProduct.push(p);
        }
    });

    const product = sortedProduct.map((p) => {
        return(
            <ProductCard title={p.name} imgSrc={p.img} price={p.price} key={p.id}/>
        );
    });
    
    return(
        <div>
            <Header/>

            <div className={styles2.allProductsDiv}  style={{
            padding:"var(--body-margin)"
            }}>
                {product}   
            </div>

            <Footer/>
            
        </div>
    )
}

export async function getServerSideProps({req}){
    //if no session then direct to login
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