const {RESTDataSource} = require('apollo-datasource-rest');
const {stock_ms_url} = require('../server');

class StockAPI extends RESTDataSource{
    constructor(){
        super();
        this.baseURL=stock_ms_url
    }

    createProducto(producto){
        return this.post('producto/', producto);
    }

    getProducto(productId){
        return this.get(`/producto/${productoId}`);
    }

    allProducto(productoId){
        return this.get(`/producto`);
    }

    updateProducto(producto){
        return this.put();
    }

    deleteProducto(productoId){
        return this.delete(`/delete_producto/${productoId}`);
    }

    productoByUsername(username){
        return this.get (`/producto/${username}`);
    }
}

module.exports=StockAPI
