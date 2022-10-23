const userService = require('../services/UserService')
const token = require('../modules/token')
const Token = require('../models/TokensModel')
const { verify } = require('../modules/auth');

let User = {}
let validPasswod;

module.exports = {

    //TODO Função Verificar usuario no banco corresponde as credenciais informadas.
    
    checkCredential : async function(email,passwordPlainText){

        return new Promise((resolve,reject)=>{

            userService.findOne({ email: email})
            .then(async (user)=>{

                User = user['dataValues'];
                
            validPasswod = await verify(passwordPlainText, User.password);
            
            if(validPasswod){

                delete User.password;
                
                token.tokenSignature(User)
                .then(tokenSingned=>{
                    
                    // Token.
                    resolve(tokenSingned);

                }).catch(error=>{
                    
                    reject(error);

                })

            }else{

                reject('email or Password invalid');
            
            }


            }).catch((error)=>{

                console.error(error);

            });

        });

    },
    
    //TODO Função para recriar o refresh Token
        
    authenticatedUser : function(token){

        return new Promise((resolve, reject) => {
            
            //code
            
        });

    },
            
    
    
    
    //TODO Função Verificar que verifica se o usuario esta autenticado
    
    checkAuthenticatedUser : function(email){

        return new Promise((resolve, reject) => {
            
            //code
            
        });

    },
    
    
    
    //TODO Função para atualizar o refresh token do usuario


    updateRefreshToken : function(email){

        return new Promise((resolve, reject) => {
            
            //code
    
        });
    },


    revokeToken : function(email){

        return new Promise((resolve, reject) => {
            
            //code
    
        });

    },









}

