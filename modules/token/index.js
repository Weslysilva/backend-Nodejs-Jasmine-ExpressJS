const { tokenVerify, tokenDecode, tokenSign } = require('./token')
const { refreshTokenGenerate, refreshTokenIsValid} = require('./refreshToken')




module.exports = {
    tokenVerify,
    tokenDecode,
    tokenSign,
    refreshTokenGenerate,
    refreshTokenIsValid,
    tokenSignature: function (payload, refreshToken) {

        return new Promise(async (resolve, reject) => {
            
            refreshToken ? refreshToken : refreshToken = await refreshTokenGenerate(payload);

            payload.rtk = refreshToken;

            tokenSign(payload).then((token)=>{
            
                resolve(token)
            
            }).catch((error)=>{
                
                reject(error)
                 
            });
            

        })

    },
    newTokenForRefreshToken: async function (tokenExpiredDecoded) {
        
        delete tokenExpiredDecoded.exp
        delete tokenExpiredDecoded.iat
        delete tokenExpiredDecoded.sub
        
        return new Promise((resolve, reject) => {

            this.tokenSignature(tokenExpiredDecoded).then((signedNewToken)=>{
            
                resolve(signedNewToken)
            
            }).catch((error)=>{
            
                reject(error)
                 
            });  

        })

    },
}