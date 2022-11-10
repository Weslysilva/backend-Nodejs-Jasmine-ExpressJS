const ServiceModel = require('../models/ServiceModel')

module.exports = {


    findAll : function(){
        return ServiceModel.findAll();
    },
    
    getAttributes : function(atributes){
        return ServiceModel.getAttributes(atributes)
    },
    
    update : async function(properties){

        return new Promise((resolve,reject)=>{

            const { id=null } = properties;

            ServiceModel.update(properties,
            {
                where: { id: id }

            }).then((res)=>{

                resolve(properties);

            }).catch(error=>{

                reject(error);
            
            })
        })
        
    },
    
    create : async function(properties){

        //TODO valid cpf or cnpj

       return new Promise((resolve,reject)=>{

           ServiceModel.create(properties).then(newElementCreated=>{
                
                resolve(newElementCreated);

            }).catch(error=>{

                reject(error);
            
            })


       })

    },
    
    findOne : function(filterProperty){
        
        return ServiceModel.findOne({ where: { ...filterProperty } })
        
    },

    findByPrimaryKey : function(id){
   
        return ServiceModel.findByPk(id)
   },

   
    
    delete : function(id){

        return ServiceModel.destroy({
            where: {id : id}
        })
    
    },


}


