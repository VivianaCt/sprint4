//Archivo principal del proyecto
const { ApolloServer, gql } = require('apollo-server');
const  {authentication}=require('./utils/authentication');
const typeDefs= require ('./typeDefs');
const resolvers= require('./resolvers');
const AuthAPI= require('./dataSources/auth_ms');
const ComprasAPI= require('./dataSources/compras_ms');
const StockAPI = require('./dataSources/stock_ms');

// Creando el servidor
const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: ()=>{
      return {
        authAPI: new AuthAPI(),
        comprasAPI: new ComprasAPI (),
        stockAPI: new StockAPI()
      }
    },
    introspection: true,
    playground: true,
    context : authentication
});


// Levantando el servidor
server.listen(process.env.PORT||4000).then((params) => {
    //console.log(params);
    console.log('servidor corriendo');
}).catch(()=>{
    console.log('error');
});