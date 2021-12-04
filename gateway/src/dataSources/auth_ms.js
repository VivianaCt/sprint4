//PERMITIRME CONECTARME CON MI MICROSERVICIO DE AUTENTICACION

const {RESTDataSource} = require('apollo-datasource-rest');
const {auth_ms_url} = require('../server');

class AuthAPI extends RESTDataSource{
    
    constructor(){
        super();
        this.baseURL = auth_ms_url;
    }

    allUser(userId){
        //return this.get(`/detail_all_user/${userId}/`);
         return this.get (`detail_all_user/${userId}/`, {}, {
             headers:{
                 'Authorization': this.context.token
             }
         });
    }

    getUser(userId){
        return this.get(`detail_user/${userId}/`, {}, {
            headers:{
                'Authorization': `Bearer ${this.context.token}`
            }
        });
    }

    createUser(user){
        return this.post('create_user/',user);
    }

    updateUser(user){
        return this.put(`update_user/${userId}/`,user);
    }

    deleteUser(userId){
        return this.delete(`delete_user/${userId}/`);
    }

    auth(credentials){
        return this.post('login/', credentials);
    }

    refresh(refreshToken){
        return this.post('refresh/', {
            refresh: refreshToken
        })
    }
}

module.exports = AuthAPI;