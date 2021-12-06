const { ApolloError } = require('apollo-server-errors');

const facturaResolver = { 
    Query:{
     getFactura: (_,args, context) =>{
         if (context.username){
             return context.dataSources.comprasAPI.facturaByUsername(context.username);
         } else {
             return [];
         }
     }  
    },
    Mutation:{
        createFactura: (_, args, context) =>{
            if (args.compras.originAccount === context.username){
                return context.dataSources.comprasAPI.createFactura(args.compras);
            }else {
                throw new ApolloError('No esta autorizado para crear una factura con esta cuenta',401);
            }
        }
    }
};

module.exports= facturaResolver;