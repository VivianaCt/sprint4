const {ApolloError}=require('apollo-server-errors');
const lodash= require('lodash');
const temp= {
    Query:{
        hello: ()=>{
            return 'world'
        },
        userDetailById(_, {}, {dataSources, id}) => {
            if (id ===null) {
                //No esta autorizado
                throw new ApolloError ('No autorizado', 401);
            }
            return dataSources.authAPI.getUser(id);                
        },
        getAllUser: (_,{},{dataSources}) => {
            return dataSources.authAPI.allUser();

        }
    },
    Mutation: {
        logIn:(_,{credentials}, {dataSources}) => {
            return dataSources.authAPI.auth(credentials);
        },
        refreshToken: (_,{refresh}, {dataSources}) => {
            return dataSources.authAPI.refreshToken(refresh)
        },
        createUser: (_,{userInput},{dataSources})=> {
            return dataSources.authAPI.createUSer(userInput)
        }
    }
}


module.exports= temp