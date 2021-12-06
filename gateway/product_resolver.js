const { ApolloError } = require('apollo-server-errors');

const productResolver = {
    Query:{
        getProducto: (_,args, context)=>{
            if(context.username){
                return context.dataSource.stockAPI.productoByUsername(context.username);
                } else {
                    return[];
                }

        }
    },
    mutation:{
        createProducto: (_, args, context) =>{
            if (args.stock.originAccount === context.username) {
                return context.dataSource.stockAPI.createProducto(args.stock);  
            } else{
                throw new ApolloError('No esta autorizado para crear una factura con esta cuenta',401);
            }
        }
    }


}

module.exports= productResolver;
