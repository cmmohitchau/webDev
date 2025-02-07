import  CredentialsProvider  from "next-auth/providers/credentials"
import GitHubProvider from "next-auth/providers/github";

export const NEXT_AUTH = {
    providers : [
        CredentialsProvider({
            name:"Email",
            credentials: {
                username : {label : "Username" , type : "text" , placeholder : "Email"},
                password : {label : "Password" , type : "password" , placeholder : "password"}
            },
            async authorize(credentials: any) {
                console.log(credentials)

                const username = credentials.username;
                const password = credentials.password;
            
                return {
                    name : "Mohit chaudhary",
                    email : "cmmohitchauu",
                    id : "1"
                }; 
            }, 
        }),
        GitHubProvider({
            clientId:"Iv23liP3tWoImn9nSWIa",
            clientSecret:"db393f2a1754732d6127a14cb9173d05bbc27dae"
          })
          
    ],
    secret:process.env.NEXTAUTH_SECRETKEY,
    callbacks: {
        jwt : ({token , user} : any) => {
            console.log(token);

            token.userId = token.sub;
            return token;
            
        },
        session : ({session , token , user} : any) => {

            if(session && session.user) {
                session.user.id = token.userId
            }


            return session
        }
        
        
    }
}