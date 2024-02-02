import { Button, Input } from "antd";
import styles from "./SingupForm.module.css";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { signIn } from "next-auth/react";
import toast, { Toaster } from "react-hot-toast";

export default function({isLoginPage}){
    const [fullName,setFullName] = useState();
    const [email,setEmail] = useState();
    const [password,setPassword] = useState();

    const router = useRouter();

    //works on signup
    const signup = async (e)=>{
        e.preventDefault();

        try{
          const response = await axios.post("/api/auth/signup",{fullName,email,password},{
            headers:{
              "Content-Type":"application/json"
            }
          });
          if(response.data === "User already exists"){
            toast.error(response.data);
          }else{
            toast.success(response.data);

            //direectlty loging in after signin
            signIn("credentials",{redirect:true,email,password});
          }
        }catch(err){
          toast.error(err.message);
        }
      }

      //works on login
    const login = async (e) => {
        e.preventDefault();

        signIn("credentials",{redirect:true,email,password});
        toast.success("Login successful");

    }
    return(
        <div className={styles.signup}>

            <Toaster/>

            {/* singup page image and logo */}
            <div className={styles.signupImg}>
                <img src={"/signupImg.jpg"} alt="BG"/>
                <span >LOGO</span>
            </div>

            <div className={styles.credentialsOuterDiv}>
                <div className={styles.credentialsDiv}>

                    <div className={styles.createAccHeading}>
                        
                        {// if the page is login then...
                            isLoginPage ?<span>Welcome Back</span> :<span>Create Account</span>
                        }
                        
                    </div>

                    <br />
                        {/* Login singup form */}
                    <form className={styles.inputFeildDiv} onSubmit={isLoginPage? login: signup}>

                        
                        {//if the page is login then hide this input
                        !isLoginPage && <Input placeholder="Full Name" onChange={(e) => {setFullName(e.target.value)}} minLength={5} required/> }
                        <br />

                        <Input type="email" placeholder="Email" onChange={(e) => {setEmail(e.target.value)}} required/>
                        <br />

                        <Input.Password placeholder="Password" onChange={(e) => {setPassword(e.target.value)}} minLength={8} required/>
                        <br />

                         {/* //if the page is login then chsnge text to "Login" */}
                            <Button type="primary" htmlType="submit" shape="round">{isLoginPage ?"Login" : "Create account"}</Button>
                        
                        <br />
                        {isLoginPage ?
                            <div className={styles.loginSwitch}>
                                Don't have an account? <span onClick={() => {router.push("/auth/signup")}}>Signup</span>
                            </div>
                           : <div className={styles.loginSwitch}>
                                Already have an account? <span onClick={() => {router.push("/auth/login")}}>Login</span>
                            </div>
                        }
                    </form>

                    <div className={styles.socialDiv}>
                        <FaFacebook/>
                        <FaTwitter/>
                        <FaInstagram/>
                        <FaYoutube/>
                    </div>
                </div>
            </div>
        </div>
    );
};