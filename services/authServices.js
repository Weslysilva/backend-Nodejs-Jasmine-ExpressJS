const userService = require('../services/UserService')
const tokenModule = require('../modules/token')
const { verify } = require('../modules/auth');
const { tokenVerify, refreshTokenIsValid } = require('../modules/token')

let User = {}
let validPasswod;

module.exports = {

    //TODO Função Verificar usuario no banco corresponde as credenciais informadas.
    
    checkCredential : function(email,passwordPlainText){

        return new Promise((resolve,reject)=>{

            userService.findOne({ email: email})
            .then(async (user)=>{

                User = user['dataValues'];
                
                //Bcrypt Vaidate
                validPasswod = await verify(passwordPlainText, User.password);
            
            if(validPasswod){

                delete User.password;

                //token generation 
                tokenModule.tokenSignature(User).then(tokenSingned=>{
                    
                    // Token generated and return token.
                    resolve(tokenSingned);

                }).catch(error=>{
                    
                    reject(error);

                })

            }else{

                reject('email or Password invalid');
            
            }


            }).catch((error)=>{

                 reject('email or Password invalid');

            });

        });

    },
    
    //TODO Função Verificar que verifica se o usuario esta autenticado
    /**
     * 
     * @param {HashJWT} token 
     * @returns 
     */
    authenticatedUser : function(token){

        return new Promise((resolve, reject) => {
            
            tokenVerify(token).then((tokenValid)=>{
                
                resolve(tokenValid)
                
            
            }).catch((error)=>{
                
                //TODO invalid token, verify Refresh Token
                if(error.message == 'jwt expired'){
                    refreshTokenIsValid(token).then((decodedToken)=>{
                        
                        //generateNew Token
                        tokenModule.newTokenForRefreshToken(decodedToken).then((newToken)=>{
                        
                            resolve(newToken)
                        
                        }).catch((error)=>{
                            
                            reject(error)
                             
                        });
                    
                    }).catch((error)=>{
                    
                        //generate New Token and RefreshToken.
                        reject(error)

                    });
                    
                } 
            
            });
            
        });

    },
            
    

    revokeToken : function(email){

        return new Promise((resolve, reject) => {
            
            resolve('Not Implemented')
    
        });

    },









}

