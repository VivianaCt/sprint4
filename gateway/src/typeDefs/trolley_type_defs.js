/* const {gql} = require('apollo-server');

const trolleyTypeDefs = gql `
    input CreateTrolley {
        products : String!
        cant_Products : Int!
        price : Int!
    }

    type Trolley{
        id_Trolley : String!
        products : String!
        cant_Products : Int!,
        price : Int!
    }

    type TrolleyUpdate{
        id_Trolley : String!
        cant_Products : Int!,
        

    extend type Query {
        trolleyByUsername(username:String!): Trolley!
        getAllTrolleys   (username:String!): [Trolley]!
        getTrolleyById (trolleyId: String!): Trolley
    }

    extend type Mutation {
        createTrolley(trolley: CreateTrolley!): Trolley!
        updateTrolley(trolley: String!): Trolley!
        
    }
`;

module.exports = trolleyTypeDefs;
 
//createTrolley(trolley: CreateTrolley!): Trolley!
//updateTrolley(trolley: TrolleyUpdate!): Trolley!
//deleteTrolley(username:String!): String! */