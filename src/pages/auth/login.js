import LoginForm from "@/components/LoginForm/LoginForm";
import { getSession } from "next-auth/react";


export default function() {
  return(
    <div>
      <LoginForm />
    </div>
  )
};

//if jwt otken is there then redirect to home page
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
