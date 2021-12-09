//PERMITIRME CONECTARME CON MI MICROSERVICIO DE COMPRAS

const {RESTDataSource} = require('apollo-datasource-rest');
const {compras_ms_url} = require('../server');

class ComprasAPI extends RESTDataSource{
    constructor(){
        super();
        this.baseURL=compras_ms_url
    }

    createFactura(factura){
        return this.post('factura/', factura);
    }

    getFactura(facturaId){
        return this.get(`factura/${facturaId}`);
    }

    allFactura(){
        return this.get(`facturas`);
    }

    updateFactura(facturaId, factura){
        return this.put(`update_Factura/${facturaId}/`, factura);
    }

    deleteFactura(facturaId){
        return this.delete(`delete_factura/${facturaId}`);
    }

    facturaByUsername(username){
        return this.get (`factura/${username}`);
    }
    //PETICIONES DEL CARRITO DE COMPRAS
    createTrolley(trolley){
        return this.post('create_trolley/', trolley);
    }

    getTrolley(trolleyId, trolley){
        return this.get(`trolley/${trolleyId}`, trolley);
    }

    allTrolleys(){
        return this.get(`trolleys/`);
    }

    updateTrolley(trolleyId){
        return this.put(`update_Trolley/${trolleyId}/`);
    }

    deleteTrolley(trolleyId){
        return this.delete(`delete_trolley/${trolleyId}/`);
    }

    TrolleyByUsername(username){
        return this.get (`trolley/${username}`);
    }
    
}

module.exports=ComprasAPI