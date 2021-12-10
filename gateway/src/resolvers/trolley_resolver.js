const { ApolloError } = require('apollo-server-errors');

const trolleyResolver = {
    Query:{
        getTrolley: (_,args, context)=>{
            if(context.username){
                return context.dataSource.comprasAPI.TrolleyByUsername(context.username);
                } else {
                    return[];
                }

        }
    },
    Mutation:{
        createTrolley: (_, args, context) =>{
            //if (args.compras.originAccount === context.username) {
                return context.dataSource.comprasAPI.createTrolley(args.trolley);  
            /*} else{
                throw new ApolloError('No esta autorizado para crear una factura con esta cuenta',401);
            }*/
        }
    }


}

module.exports= trolleyResolver;
