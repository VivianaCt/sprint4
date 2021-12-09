const {gql} = require('apollo-server');

const productTypeDefs =  gql `
    input CreateProducto {
        nombre: String!
        descripcion: String!
        precio: Int!
        stock: Int!        
    }

    type Stock {
        id: Int!
        nombre: String!
        descripcion: String!
        precio: Int!
        stock: Int!
    }

    type Producto {
        id: Int!
        nombre: String!
        descripcion: String!
        precio: Int!
        stock: Int!
    }

    type Productos{
        productos : [Producto]!
    }

    extend type Query {
        getallProducto: Productos!
        getProducto(args : Int!): Producto!
    }

    extend type Mutation {
        createProducto(producto: CreateProducto!): Producto!
    }


`

module.exports = productTypeDefs;
