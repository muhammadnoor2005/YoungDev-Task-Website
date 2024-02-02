import Header from "@/components/Header/Header";
import styles from "./home.module.css";
import Footer from "@/components/Footer/Footer";
import LandingImage from "@/components/LandingImage/LandingImage";
import Trending from "@/components/Trending/Trending";
import NewCollection from "@/components/NewCollection/NewCollection";
import { getProducts } from "@/services/products";
import ScrollCtx from "@/context/ScrollCtx";
import { getSession } from "next-auth/react";

export default function({products}){
    const scrollDiv = (key)=>{
        const k = document.getElementById(key);
        window.scrollTo({top: k.offsetTop,behavior:"smooth",block:"start"});
    }
    return(
        <div >
            {/* wrapping in scroll ctx to prvide smooth scroll option across componenets */}
            <ScrollCtx.Provider value={{scrollDiv}}>
                <Header/>

                {/* main body of home page excluding header and footer */}
                <div className={styles.mainBody}>
                    <LandingImage/>
                    <Trending/>
                    <NewCollection products={products}/>
                </div>
            </ScrollCtx.Provider>
            
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

    const products =await getProducts();
    return{
        props:{
            products
        }
    }
}