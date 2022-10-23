const {TokensModel} = require('../models/TokensModel')



module.exports = {

    saveToken : async function(token,email){
    
            return new Promise((resolve,reject)=>{
                var date = new Date();


                date.setDate(date.getDate() + 1);
                
                TokensModel.create()
                resolve(token)
    
                reject(error)


            })
    
    },

    checkToken : async function(token){
    
            return new Promise((resolve,reject)=>{
                //your code here
                resolve(token)
    
                reject(error)
            })
    
    },

   refreshToken : async function(token){
   
        return new Promise((resolve,reject)=>{
             //your code here
            resolve(token)
   
            reject(error)
        })
   
   },



}