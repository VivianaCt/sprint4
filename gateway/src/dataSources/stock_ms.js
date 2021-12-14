const {RESTDataSource} = require('apollo-datasource-rest');
const {auth_ms_url} = require('../server');

class StockAPI extends RESTDataSource{
    constructor(){
        super();
        this.baseURL=auth_ms_url
    }

    async createProduct(producto){
        producto= new Object (JSON.parse(JSON.stringify(producto)));
        return await this.post('create_product/', producto);
    }

    async getProduct(productoId){
        return await this.get(`detail_product/${productoId}`);
    }

    async allProduct(){
        return await this.get(`detail_all_products/`);
    }

    async  updateProduct(producto){
        producto= new Object (JSON.parse(JSON.stringify(producto)));
        return await this.put(`update_product/${producto}/`);
    }

    async deleteProduct(productoId){
        return await this.delete(`delete_product/${productoId}`);
    }

    async productByUsername(username){
        /* console.log(username);
        let rta=await this.get(`/detail_product/${username}`);
        console.log(rta);
        return rta; */
        return await this.get (`detail_product/${username}`);
        
    }
}

module.exports=StockAPI
 