const bcrypt = require("bcrypt");


module.exports = {

    createHash : function (plaintextPassword){
        
        return new Promise((resolve,reject)=>{

            bcrypt.hash(plaintextPassword, 10, function(err, hash) {
                if(hash){
                    resolve(hash)
                }else {
                    reject(err)
                }
            });
        })
    
    },

    /**
     * 
     * @param {*} plaintextPassword set your plaintext password
     * @param {*} hash set your hash created for compare
     */
    verify : function(plaintextPassword, hash){

        return new Promise((resolve,reject)=>{
        
            bcrypt.compare(plaintextPassword, hash, function(err, result) {
                
                result ? resolve(result) : resolve(false)
    
            });

        })

    }

}







