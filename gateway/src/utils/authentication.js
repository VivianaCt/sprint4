const {auth_ms_url} = require('../server');
const {ApolloError} = require('apollo-server')
const fetch = require('node-fetch');

const autenticacion = async (params) =>{
    const {req} = params;
    const token = req.headers.authorization || '';
    if(token === ''){
        //NO ME MANDARON TOKEN
        return {
        }
    }else{
        //MANDARON UN TOKEN
        try{
            const response = await fetch(`${auth_ms_url}/simple/check-token/`,{
                method:'GET',
                headers:{
                    'Content-Type':'application/json',
                    'Authorization':`${token}`
                }
            });
            if(response.status === 200){
                const {username, id}= (await response.json())
                return{
                    id,
                    username,
                    token
                }
            }else{
                throw new ApolloError(`Usuario inactivo`, 400)
            }
        } catch(e){
            //Capturar si la promesa (fetch) me genero un error (entro al metodo catch)
            throw new ApolloError(`se genero un error de token`, 400)
        }
    }
}

module.exports = autenticacion;