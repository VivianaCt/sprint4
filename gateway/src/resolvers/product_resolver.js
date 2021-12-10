const { ApolloError } = require('apollo-server-errors');
const productAPI = require('../dataSources/stock_ms');

const productResolver = {
    Query:{
        getProducto: (_,args, context)=>{
            if(context.username){
                return context.dataSource.StockAPI.productoByUsername(context.username);
                } else {
                    return[];
                }

        },
        getallProducto: (_,{},{dataSources}) => {
            return dataSources.StockAPI.getallProducto;

        }
    },
    Mutation:{
        createProducto: (_, args, context) =>{
            //if (args.stock.originAccount === context.username) {
            return context.dataSource.comprasAPI.createProducto(args.compras);
            //return productAPI.createProducto(args.producto);
            /*} else{
                throw new ApolloError('No esta autorizado para crear un producto con esta cuenta',401);
            }*/
        }
    }


}

module.exports= productResolver;
