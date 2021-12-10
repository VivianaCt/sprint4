const {RESTDataSource} = require('apollo-datasource-rest');
const {auth_ms_url} = require('../server');

class StockAPI extends RESTDataSource{
    constructor(){
        super();
        this.baseURL=auth_ms_url
    }

    createProducto(producto){
        return this.post('producto/', producto);
    }

    getProducto(productoId){
        return this.get(`producto/${productoId}`);
    }

    allProducto(){
        return this.get(`producto`);
    }

    updateProducto(productoId, producto){
        return this.put(`update_Producto/${productoId}/`, producto);
    }

    deleteProducto(productoId){
        return this.delete(`/delete_producto/${productoId}`);
    }

    productoByUsername(username){
        return this.get (`/producto/${username}`);
    }
}

module.exports=StockAPI
