//PERMITIRME CONECTARME CON MI MICROSERVICIO DE COMPRAS

const {RESTDataSource} = require('apollo-datasource-rest');
const {compras_ms_url} = require('../server');

class ComprasAPI extends RESTDataSource{
    constructor(){
        super();
        this.baseURL=compras_ms_url
    }

    async createFactura(factura){
        return await this.post('factura/', factura);
    }

    async getFactura(facturaId){
        return await this.get(`factura/${facturaId}`);
    }

    async allFactura(username){
        return await this.get(`facturas/ ${username}`);
    }

    async updateFactura(factura){
        return await this.put('update_Factura/', factura);
    }

    async deleteFactura(facturaId){
        return await this.delete(`delete_factura/${facturaId}`);
    }

    async facturaByUsername(username){
        return await this.get (`factura/${username}`);
    }


    //PETICIONES DEL CARRITO DE COMPRAS

    /* async createTrolley(trolley){
        return await this.post('create_trolley/', trolley);
    }

    async getTrolley(trolleyId, trolley){
        return await this.get(`trolley/${trolleyId}`, trolley);
    }

    async allTrolleys(){
        return await this.get(`trolleys/`);
    }

    async updateTrolley(trolleyId){
        return await this.put(`update_Trolley/${trolleyId}/`);
    }

    async deleteTrolley(trolleyId){
        return await this.delete(`delete_trolley/${trolleyId}/`);
    }

    async TrolleyByUsername(username){
        return await this.get (`trolley/${username}`);
    } */
    
};

module.exports= ComprasAPI