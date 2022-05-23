import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github"

export default NextAuth({
    providers:[
        GithubProvider({
            clientId:process.env.GitHubId,
            clientSecret:process.env.GitHubSecret
        })
    ],
    database: process.env.DB_URL,
    session:{
        jwt: true
    },
    jwt:{
        secret: 'oiuerlkdsfmryef;jlksiedf'
    }
})