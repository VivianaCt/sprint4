//PERMITIRME CONECTARME CON MI MICROSERVICIO DE COMPRAS

const {RESTDataSource} = require('apollo-datasource-rest');
const {compras_ms_url} = require('../server');

class ComprasAPI extends RESTDataSource{
    constructor(){
        super();
        this.baseURL=compras_ms_url
    }

    async createFactura(factura){
        factura = new Object (JSON.parse(JSON.stringify(factura)));
        return await this.post('/factura/', factura);
    }

    async getFactura(facturaId){
        return await this.get(`factura/${facturaId}`);
    }

    async allFactura(){
        return await this.get('/facturas/');
    }

    async updateFactura(factura){
        factura = new Object (JSON.parse(JSON.stringify(factura)));
        return await this.put(`/update_Factura/`, factura);
    }

    async deleteFactura(facturaId){
        return await this.delete(`delete_factura/${facturaId}`);
    }

    async facturaByUsername(username){
        return await this.get (`factura/${username}`);
    }


    //PETICIONES DEL CARRITO DE COMPRAS

    //PETICIONES DEL CARRITO DE COMPRAS
    async createTrolley(trolley){
        trolley = new Object (JSON.parse(JSON.stringify(trolley)));
        return await this.post('/create_trolley/', trolley);
    }
    async getTrolley(TrolleyId){
        return await this.get(`/trolley/${TrolleyId}`);
    }

    async getTrolleyByUsername(username){
        return await this.get(`/trolley/${username}/`);
    }

    async allTrolleys(){
        return await this.get(`/trolleys/`);
    }

    async updateTrolley(username){
        return await this.put(`/update_trolley/${username}/`);
    }

    async deleteTrolley(username){
        return await this.delete(`delete_trolley/${username}/`);
    }
    
};

module.exports= ComprasAPI