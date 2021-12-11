/* const trolleyResolver ={
    Query:{
        trolleyByUsername: async (_, {username}, {dataSources}, {userIdToken})=> {
            usernameToken = (await dataSources.authAPI.getUser(userIdToken)).username
            if (username == usernameToken)
                return await dataSources.ComprasAPI.TrolleyByUsername(username);
            else
                return null;
        },
        getAllTrolleys: async (_, {username}, {dataSources}, {userIdToken})=> {
            usernameToken= (await dataSources.authAPI.getUser(userIdToken)).username
            if (username ==usernameToken)
                return await dataSources.ComprasAPI.allTrolleys(username);
            else
                return null;


        },
        getTrolleyById  : async (_, {trolleyId}, {dataSources, userIdToken})=>{
            usernameToken= (await dataSources.authAPI.getUser(userIdToken)).username
            const trolley= (await dataSources.ComprasAPI.getTrolley(trolleyId))
            usernameTrolley= trolley.products
            if (usernameToken == usernameTrolley)
                return await trolley;
            else 
                return null;
        }


    },
    Mutation:{
        createTrolley: async (_, {trolley}, {dataSources, userIdToken}) => {
            usernameToken= (await dataSources.authAPI.getUser(userIdToken)).username
            if (trolley.products ==usernameToken)
                return await dataSources.ComprasAPI.createTrolley(trolley);
            else
                return null;
        },
        updateTrolley: async (_, {trolley}, {dataSources, userIdToken}) => {
            usernameToken= (await dataSources.authAPI.getUser(userIdToken)).username
            usernameTrolley= (await dataSources.ComprasAPI.getTrolley(trolley.id_Trolley)).products
            if (usernameToken== usernameTrolley)
                return await dataSources.ComprasAPI.updateTrolley (trolley);
            else
                return null;
        },
       /*  deleteTrolley: async (_,{trolleyId},{dataSources, userIdToken})=>{
            usernameToken       = (await dataSources.authAPI.getUser(userIdToken)).username
            usernameTrolley = (await dataSources.ComprasAPI.getTrolley(trolleyId)).products
           if(usernameToken == usernameTrolley) 
               return await dataSources.StockAPI.deleteTrolley(trolleyId);
           else
               return null; */
            
        }

    }
}; */
module.exports= trolleyResolver 