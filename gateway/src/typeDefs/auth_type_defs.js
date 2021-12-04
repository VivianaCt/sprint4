const { gql }= require ('apollo-server');



const typeDefs= gql`

    input CredentialsInput{
        username:String!
        password:String!
    }
    input CreateUserInput{
        username:String!
        email:String!
        telefono: String!
        direccion: String!
        password: String! 

    }

    type Tokens {
        access:String!
        refresh:String!
    }

    type UserDetail{
        id: Int!
        username: String!
        email:String!
        telefono: String!
        direccion: String!
        password: String! 
    }

    type AccessToken{
        access:String!
    }

    type Users {
        usuarios:[UserDetail]! 
    }
    
    type Query {
        userDetailById:UserDetail!
        getAllUser: Users!
    }

    type Mutation
        logIn(credentials:CredentialsInput!):Tokens!
        refreshToken(refresh:String!):AccessToken!
        createUser(userInput:CreateUserInput!): UserDetail!

`;

module.exports= typeDefs