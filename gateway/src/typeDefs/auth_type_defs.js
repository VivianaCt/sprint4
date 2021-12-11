const {gql} = require ('apollo-server');

const authTypeDefs = gql `

    input CredentialsInput{
        username    :String!
        password    :String!
    }
    input CreateUserInput{
        username :String!
        email    :String!
        telefono :String!
        direccion:String!
        password :String! 
        superuser:String
    }

    input UserUpdate{
        id       :Int!
        username :String!
        password :String!
    }

    type Tokens {
        access :String!
        refresh:String!
    }

    type UserDetail{
        id       :Int!
        username :String!
        email    :String!
        telefono :String!
        direccion:String!
        password :String! 
    }

    type AccessToken{
        access:String!
    }

    
    type Query {
        userDetailById (userId: Int!):UserDetail!
        getAllUser     (userId: Int!):[UserDetail]! 
    }

    type Mutation {
        createUser(userInput:CreateUserInput!) : Tokens!
        logIn(credentials:CredentialsInput!)   :Tokens!
        refreshToken(refresh:String!)          :AccessToken!
        updateUser(user:UserUpdate!)           :String!
        deleteUser(userId:Int!)                :String!
        
    }
`;

module.exports= authTypeDefs