const {RESTDataSource} = require('apollo-datasource-rest');
const {auth_ms_url} = require('../server');

class StockAPI extends RESTDataSource{
    constructor(){
        super();
        this.baseURL=auth_ms_url
    }

    async createProducto(producto){
        return this.post('producto/', producto);
    }

    async getProducto(productoId){
        return this.get(`producto/${productoId}`);
    }

    async allProducto(){
        return this.get(`producto`);
    }

    async   updateProducto(productoId, producto){
        return this.put(`update_Producto/${productoId}/`, producto);
    }

    async deleteProducto(productoId){
        return this.delete(`/delete_producto/${productoId}`);
    }

    async productoByUsername(username){
        console.log(username);
        let rta=await this.get(`/detail_product/${username}`);
        console.log(rta);
        return rta;
        
    }
}

module.exports=StockAPI
