var jwt = require('jsonwebtoken');
var privateKey = process.env['PRIVATE_KEY']

module.exports = {

    tokenDecode: function(token){

       return new Promise((resolve,reject)=>{
            
        try {
            let tokenDecode = jwt.decode(token);
            resolve(tokenDecode);
            
        } catch (error) {
            reject(new Error('Invalid Token'));
        }

       })
    
    },


    tokenVerify: function (token) {

        return new Promise((resolve, reject) => {
            
            jwt.verify(token, privateKey, function (error, decodedToken) {

                decodedToken ?
                    resolve(decodedToken) :
                    reject(error);

            })


        })

    },

    tokenSign: function (payload) {

        return new Promise(async (resolve, reject) => {

            jwt.sign(payload, privateKey, {
                algorithm: 'HS256',
                subject: payload.email,
                expiresIn: "1h"
            }, function (error, tokenSigned) {

                if (tokenSigned) {
                    resolve(tokenSigned)
                }
                reject(error);
            })

        })

    },


}