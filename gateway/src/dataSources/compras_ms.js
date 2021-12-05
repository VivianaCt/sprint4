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
        return this.get(`/factura/${facturaId}`);
    }

    allFactura(facturaId){
        return this.get(`/facturas`);
    }

    updateFactura(factura){
        return this.put();
    }

    deleteFactura(facturaId){
        return this.delete(`/delete_factura/${facturaId}`);
    }

    facturaByUsername(username){
        return this.get (`/factura/${username}`);
    }
    
}

module.exports=ComprasAPI