import NextAuth from "next-auth/next";
import  CredentialsProvider  from "next-auth/providers/credentials";
import { getByEmail,verifyPass } from "@/services/users";

const authOptions = {
    session:{
        jwt:true
    },
    providers:[
        CredentialsProvider({
            async authorize({email,password}){
                //onlogin check it email exists
                const user = getByEmail(email);
                // if email not exist then return user not found
                if (!user){
                    throw new Error("User not found");
                }
                // if pass is wrong then throw error
                const isValid = await verifyPass(password,user.password);
                if (!isValid){
                    throw new Error("Incorrect password");
                }
                // if credentials are correct then return email to provide jwt token
                return(email);
            }
        })
    ]
}
export default NextAuth(authOptions);