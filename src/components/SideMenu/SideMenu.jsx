import styles from "./SideMenu.module.css";
import { IoArrowBackOutline } from "react-icons/io5";
import { HiMenuAlt1 } from "react-icons/hi";
import { useContext, useState } from "react";
import ScrollCtx from "@/context/ScrollCtx";
import { Popover } from "antd";

// SIde menu that appears on mobile
export default function(){
    // open close menu
    const [isOpen,setIsOpen] = useState(false);
    const scrollCtx = useContext(ScrollCtx);

    //scorll to home
    const homeClickHandle = () => {
        scrollCtx.scrollDiv("landingImg");
        setIsOpen(false);
    }

    // onclick of product
    const productsClickHandle = () => {
        scrollCtx.scrollDiv("newCollection");
        setIsOpen(false);
    }

    return(
        <div className={styles.showHide}>
            <HiMenuAlt1 onClick={() => {setIsOpen(true)}} className={styles.menuOpenButton}/>
            
            <div className={isOpen ? styles.mainBody:styles.mainBodyHide}>
                {/* menu close button */}
                <div className={styles.closeButton}>
                    <IoArrowBackOutline onClick={() => {setIsOpen(false)}}/>
                </div>

                {/* home, contact us and product */}
                <div className={styles.optionsDiv}>
                    <div onClick={homeClickHandle}>Home</div>
                    <div onClick={productsClickHandle}>Products</div>

                    <Popover content={"Phone no: 12345678901"} title="Contact Info" trigger="click">
                        <div>Contact</div>
                    </Popover>
                </div>
            </div>
        </div>
    )
}