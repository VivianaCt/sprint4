
const facturaResolver = { 
    Query:{
        getFacturaByUsername: async (_, {username}, {dataSources, userIdToken}) => {
            usernameToken = (await dataSources.authAPI.getUser(userIdToken)).username
            if (username == usernameToken)
                return await dataSources.ComprasAPI.facturaByUsername(username);
            else
                return null;
        },

        getAllFacturas: async(_,{username}, {dataSources, userIdToken}) =>{ 
            usernameToken= (await dataSources.authAPI.getUser(userIdToken)).username
            if (username ==usernameToken)
                return await dataSources.ComprasAPI.allFactura(username);
            else
                return null;
        }, 

        getFacturaById : async (_, {facturaId}, {dataSources, userIdToken})=>{
            usernameToken= (await dataSources.authAPI.getUser(userIdToken)).username
            const factura= (await dataSources.ComprasAPI.getFactura(facturaId))
            usernameFactura= factura.cliente
            if (usernameToken == usernameFactura)
                return await factura;
            else 
                return null;
        }
    
    },


    Mutation:{
        createFactura: async (_, {factura}, {dataSources, userIdToken}) => {
            usernameToken= (await dataSources.authAPI.getUser(userIdToken)).username
            if (factura.cliente ==usernameToken)
                return await dataSources.ComprasAPI.createFactura(factura);
            else
                return null;
        },
        updateFactura: async (_, {factura}, {dataSources, userIdToken}) => {
            usernameToken= (await dataSources.authAPI.getUser(userIdToken)).username
            usernameFactura= (await dataSources.ComprasAPI.getFactura(factura.id_factura)).cliente
            if (usernameToken== usernameFactura)
                return await dataSources.ComprasAPI.updateFactura (factura);
            else
                return null;
        }
    }
};

module.exports= facturaResolver;