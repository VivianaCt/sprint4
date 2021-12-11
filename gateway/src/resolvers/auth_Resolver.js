
const authResolver = {
    Query: {
        userDetailById: async(_, {userId}, { dataSources, userIdToken }) => {
            if(userId == userIdToken)
                return await dataSources.authAPI.getUser(userId);
            else
                return null;
        },
                
        getAllUser    : async(_, {userId}, { dataSources, userIdToken }) => {
            if(userId == userIdToken)
                return await dataSources.authAPI.getOtherAccounts(userId);
            else
                return null;
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
};


module.exports= authResolver;