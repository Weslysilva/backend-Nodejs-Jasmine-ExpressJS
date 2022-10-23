var jwt = require('jsonwebtoken');
var privateKey = process.env['PRIVATE_KEY']

module.exports = {


    tokenVerify : function(token){
        
        return new Promise((resolve,reject)=>{

            jwt.verify(token, privateKey, function(err, decoded) {
                
                decoded ? resolve(decoded) : reject(err);
                
            })


        })

      },

      tokenSignature : function(payload){

        return new Promise((resolve,reject)=>{
            
            jwt.sign(payload, privateKey, { algorithm: 'HS256'},function(error, tokenSigned){

            tokenSigned ?
                    resolve(tokenSigned) : 
                    reject(error);

            })
            
        })

      }


}