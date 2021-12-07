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
        getproductoByUsername: Producto!
        getProductos: Productos!
    }

    extend type Mutation {
        createProducto(producto: CreateProducto!): Producto!
    }


`

module.exports = productTypeDefs;
