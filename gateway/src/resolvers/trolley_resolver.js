const { ApolloError } = require('apollo-server-errors');

const trolleyResolver = {
    Query:{
        getTrolley: (_,args, context)=>{
            if(context.username){
                return context.dataSource.comprasAPI.facturaByUsername(context.username);
                } else {
                    return[];
                }

        }
    },
    mutation:{
        createTrolley: (_, args, context) =>{
            if (args.compras.originAccount === context.username) {
                return context.dataSource.comprasAPI.createTrolley(args.stock);  
            } else{
                throw new ApolloError('No esta autorizado para crear una factura con esta cuenta',401);
            }
        }
    }


}

module.exports= trolleyResolver;
