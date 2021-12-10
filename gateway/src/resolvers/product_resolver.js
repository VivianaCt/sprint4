const { ApolloError } = require('apollo-server-errors');
const productAPI = require('../dataSources/stock_ms');

const productResolver = {
    Query:{
        getProducto: (_,args, {dataSources})=>{
            /*if(context.username){
                return context.dataSource.StockAPI.productoByUsername(context.username);
                } else {
                    return[];
                }*/
                let resultado = dataSources.stockAPI.productoByUsername(args.args);
                
                return resultado;

        },
        getallProducto: (_,{},{dataSources}) => {
            return dataSources.StockAPI.getallProducto;

        }
    },
    Mutation:{
        createProducto: (_, args, {dataSources}) =>{
            console.log("args : ", args);
            console.log(dataSources);
            let resultado = dataSources.StockAPI.createProducto(args.producto);
            console.log("====>",resultado);
            //if (args.stock.originAccount === context.username) {
            return resultado;
            /*return productAPI.createProducto(args.producto);
            } else{
                throw new ApolloError('No esta autorizado para crear un producto con esta cuenta',401);
            }*/
                // Orquestando peticiones
                /*const {
                    nombre,
                    descripcion,
                    precio,
                    stock 
     
             } = productInput;
             const product = await dataSources.stockAPI.createProducto({
                nombre,
                descripcion,
                precio,
                stock 
             });
             return product*/
             
        }
    }


}

module.exports= productResolver;
