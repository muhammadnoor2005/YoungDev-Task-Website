import SignupForm from "@/components/SignupForm/SignupForm";
import { getSession } from "next-auth/react";

export default function() {
  return(
    <div>
      <SignupForm />
    </div>
  )
};

// if jwt token is there then redirect to home page
export async function getServerSideProps({req}){
  const session = await getSession({req});
  if(session){
    return{
      redirect:{
        destination:"/home",
        permanent:false
      }
    }
  }
  return{
    props:{}
  }
}