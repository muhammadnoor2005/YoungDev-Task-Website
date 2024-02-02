import LoginForm from "@/components/LoginForm/LoginForm";
import SignupForm from "@/components/SignupForm/SignupForm";
import { getSession } from "next-auth/react";

export default function Home() {
  return (
    <>
    </>
  )
}
export async function getServerSideProps({req}){
    return{
      redirect:{
        destination:"/auth/signup",
        permanent:false
      }
    }
}