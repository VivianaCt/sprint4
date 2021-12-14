const {gql} = require('apollo-server');

const productTypeDefs =  gql `
    input CreateProduct {
        nombre: String!
        descripcion: String!
        precio: Int!
        stock: Int!        
    }

    type Product {
        id: String!
        nombre: String!
        descripcion: String!
        precio: Int!
        stock: Int!
    }

    input ProductUpdate{
        id: String!
        nombre: String!
        descripcion: String!
        precio: Int!
        stock: Int!
    }

    extend type Query {
        productByUsername(username:String!) : Product!
        getAllProducts (username:String!)   : [Product]!
        getProductById (productoId: String!)   : Product
       
    }

    extend type Mutation {
        createProduct(producto: CreateProduct!): Product!
        updateProduct(producto: ProductUpdate!): Product
     
    }


`

module.exports = productTypeDefs;



// deleteProduct(username:String!): String!