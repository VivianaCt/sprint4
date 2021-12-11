const {ApolloError}=require('apollo-server-errors');

const authResolver= {
    Query:{
        userDetailById: async (_, {}, {dataSources, id}) => {
            if (id ===null) {
                //No esta autorizado
                throw new ApolloError ('No autorizado', 401);
            }
            return await dataSources.authAPI.getUser(id);                
        },
        getAllUser: async (_,{},{dataSources}) => {
            return await dataSources.authAPI.allUser();

        }
    },
    Mutation: {
        logIn:async (_, {credentials}, {dataSources}) => {
            return await dataSources.authAPI.auth(credentials);
        },
        refreshToken: async (_,{refresh}, {dataSources}) => {
            return await dataSources.authAPI.refreshToken(refresh)
        },
        createUser: async (_,{userInput},{dataSources})=> {
           // Orquestando peticiones
           const {
            username,
            email,
            telefono,
            direccion,
            password,
            superuser

        } = userInput;
        const user = await dataSources.authAPI.createUser({
            username,
            email,
            telefono,
            direccion,
            password,
            superuser
        });
        return user
        },
        
        updateUser: async (_, {user}, {dataSources, userIdToken}) =>{
            if(user.id == userIdToken)
                return await dataSources.authAPI.updateUser(user);
            else
                return null;
        },

        deleteUser:async(_, {userId}, { dataSources, userIdToken }) => {
            if(userId == userIdToken) 
                return await dataSources.authAPI.deleteUser(userId);
            else
                return null;
        }

    }
}


module.exports= authResolver