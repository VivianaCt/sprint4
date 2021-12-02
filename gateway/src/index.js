//Archivo principal del proyecto
const { ApolloServer, gql } = require('apollo-server');
const  authentication=require('./utils/authentication');

const typeDefs = gql`
  type Query {
    hello: String
  }
`;

const resolvers = {
  Query: {
    hello: () => 'world',
  },
}

// Creando el servidor
const server = new ApolloServer({
    context : authentication,
    typeDefs: typeDefs,
    resolvers: resolvers,
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