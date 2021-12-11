const productResolver ={
    Query:{
        productByUsername: async (_,{username}, {dataSources, userIdToken})=>{
            usernameToken = (await dataSources.authAPI.getUser(userIdToken)).username
            if (username == usernameToken)
                return await dataSources.StockAPI.productByUsername(username);
            else
                return null;
        },
        getAllProducts: async (_,{username}, {dataSources, userIdToken})=>{
            usernameToken = (await dataSources.authAPI.getUser(userIdToken)).username
            if (username == usernameToken)
                return await dataSources.StockAPI.allProduct(username);
            else
                return null;  
        },
        getProductById : async (_, {productoId}, {dataSources, userIdToken})=>{
            usernameToken= (await dataSources.authAPI.getUser(userIdToken)).username
            const producto=(await dataSources.StockAPI.getProduct(productoId))
            usernameProducto= producto.nombre
            if (usernameToken == usernameProducto)
                return await producto;
            else 
                return null;
        }
    },
    Mutation:{
        createProduct: async (_,{producto},{dataSources})=>{
            const {
                nombre,
                descripcion,
                precio,
                stock
            } = producto;
            const crearproducto= await dataSources.StockAPI.createProduct({
                nombre,
                descripcion,
                precio,
                stock
            });
            return crearproducto
        }, 
        updateProduct: async (_,{producto},{dataSources, userIdToken})=>{
            usernameToken= (await dataSources.authAPI.getUser(userIdToken)).username
            usernameProducto= (await dataSources.StockAPI.getProduct(producto.id)).nombre
            if (usernameToken== usernameProducto)
                return await dataSources.ComprasAPI.updateProduct (producto);
            else
                return null;
        }
            
        },
        /* deleteProduct: async (_,{productoId},{dataSources, userIdToken})=>{
                 usernameToken       = (await dataSources.authAPI.getUser(userIdToken)).username
                 usernameProducto = (await dataSources.StockAPI.getProduct(productoId)).nombre
                if(usernameToken == usernameProducto) 
                    return await dataSources.StockAPI.deleteProduct(productoId);
                else
                    return null;
        }, */

};


module.exports= productResolver