//Archivo principal del proyecto
const { ApolloServer, gql } = require('apollo-server');
const  authentication=require('./utils/authentication');
const typeDefs= require ('./typeDefs');
const resolvers= require('./resolvers');
const AuthAPI= require('./dataSources/auth_ms');
const ComprasAPI= require('./dataSources/compras_ms');

// Creando el servidor
const server = new ApolloServer({
    context : authentication,
    typeDefs,
    resolvers,
    dataSources: ()=>{
      return {
        authAPI: new AuthAPI(),
        comprasAPI: new ComprasAPI ()
      }
    },
    introspection: true,
    playground: true
});


// Levantando el servidor
server.listen(4000).then((params) => {
    //console.log(params);
    console.log('servidor corriendo');
}).catch(()=>{
    console.log('error');
});