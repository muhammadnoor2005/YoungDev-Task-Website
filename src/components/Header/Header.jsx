import styles from "./Header.module.css";
import { IoIosSearch } from "react-icons/io";
import { BsHandbag } from "react-icons/bs";
import { Popconfirm, Popover } from "antd";
import { useContext, useEffect, useState } from "react";
import ScrollCtx from "@/context/ScrollCtx";
import { useRouter } from "next/router";
import { signOut } from "next-auth/react";


import { Input } from 'antd';
import SideMenu from "../SideMenu/SideMenu";

export default function(){
    const scrollCtx = useContext(ScrollCtx);
    const router = useRouter();
    const path = router.pathname;

    // search value from input field
    const [searchVal,setSearchVal] = useState();

    //shows nav bar only on home page
    const [isHomeBool,setHomeBool] = useState(false);

    //  if path is home then display nav bar in header only
    useEffect(() => {
        if(path === "/home"){
            setHomeBool(true);
        }
    },[]);

    //onsearch
    const search = (e) => {
        e.preventDefault();
        if(searchVal){
            router.push(`/search/${searchVal}`);
        }
    }
       
    return(
        <div className={styles.mainDiv}>
            
            {/* left logo*/}
            <div className={styles.brandName}> 
                <SideMenu/>
                <span onClick={() => {router.push("/home")}}>LOGO</span>
            </div>
                
            {/* middle nar bar*/}
            <div className={isHomeBool ? styles.navBar : styles.navBarHide}>
                <span onClick={() => {scrollCtx.scrollDiv("landingImg")}}>Home</span>                
                <span onClick={() => {scrollCtx.scrollDiv("newCollection")}}>Products</span>

                <Popover content={"Phone no: 12345678901"} title="Contact Info" trigger="click">
                    <span>Contact</span>
                </Popover>
            </div>

            {/* right side */}
            <div className={styles.searchCart}>

                {/* search form */}
                <form onSubmit={search}>
                    <Input placeholder="Search" onChange={(e) => {setSearchVal(e.target.value)}}/>
                    <IoIosSearch onClick={search}/>
               </form>

               {/* cart icon */}
                <BsHandbag/>

                {/* confirm logout */}
                <Popconfirm
                    title="Confirm Logout"
                    description="Are you sure you want to logout?"
                    onConfirm={signOut}
                    // onCancel={cancel}
                    okText="Yes"
                    cancelText="No"
                >
                    {/* logout span */}
                    <div className={styles.logoutButton}>
                        <span>
                            Logout
                        </span>
                    </div>
                </Popconfirm>
            </div>
        </div>
    )
}