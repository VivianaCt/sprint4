//PERMITIRME CONECTARME CON MI MICROSERVICIO DE AUTENTICACION

const {RESTDataSource} = require('apollo-datasource-rest');
const {auth_ms_url} = require('../server');

class AuthAPI extends RESTDataSource{
    
    constructor(){
        super();
        this.baseURL = auth_ms_url;
    }

    async allUser(userId){   
         return await this.get (`detail_all_user/${userId}/`, {}, {
             headers:{
                 'Authorization': this.context.token
             }
         });
    }

    async getUser(userId){
        return await this.get(`detail_user/${userId}/`, {}, {
            headers:{
                'Authorization': `Bearer ${this.context.token}`
            }
        });
    }

    async createUser(user){
        return await this.post('create_user/',user);
    }

    async updateUser(user){
        return await this.put(`update_user/${userId}/`,user);
    }

    async deleteUser(userId){
        return await this.delete(`delete_user/${userId}/`);
    }

    async auth(credentials){
        return await this.post('login/', credentials);
    }

    async refresh(refreshToken){
        return await this.post('refresh/', {
            refresh: refreshToken
        });
    }
}

module.exports = AuthAPI;