const {gql} = require('apollo-server');

const trolleyTypeDefs = gql `
    input CreateTrolley {
        products : String!
        cant_Products : Int!
        price : Int!
    }

    type Compras {
        id: Int!
        nombre: String!
        descripcion: String!
        precio: Int!
        stock: Int!
    }

    type Trolley{
        id_Trolley : String!
        products : String!
        cant_Products : Int!,
        price : Int!
    }

    type Trolleys{
        trolleys : [Trolley]!
    }

    extend type Query {
        getTrolleyByUsername: Trolley!
        getTrolley (args : Int!): Trolleys!
    }

    extend type Mutation {
        createTrolley(trolley: CreateTrolley!): Trolley!
    }
`

module.exports = trolleyTypeDefs;
