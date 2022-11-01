
const dayjs = require('dayjs');
const { tokenDecode} = require('./token')

let expiresIn = dayjs().add(7, 'day').unix();

module.exports = {

    refreshTokenGenerate: async function (user) {

        return new Promise((resolve, reject) => {

            try {

                let refreshToken = {
                    expiresIn: expiresIn,
                    userId: user.id
                }

                resolve(refreshToken)

            } catch (error) {
                reject(error)
            }


        })



    },

    refreshTokenIsValid: async function (token) {

        return new Promise((resolve, reject) => {


            tokenDecode(token).then((tokenDecoded)=>{
            
               try {
                    //test if your refreshToken expire.
                   if(dayjs().isAfter(dayjs.unix(tokenDecoded.rtk.expiresIn))){

                       resolve(true) //case your refresh token expire return true
                   }
                   else{
                        //if your refreshtoken is not expire, return tokenDecoded
                        resolve(tokenDecoded)

                   }

               } catch (error) {

                    reject(new Error('Validation error on date of refresh token'))

               }

            
            }).catch((error)=>{
            
                reject(new Error('Decode error on date of refresh token'))
                 
            });


        })

    },


}