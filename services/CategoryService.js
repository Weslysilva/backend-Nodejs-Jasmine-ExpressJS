const CategoryModel = require('../models/CategoryModel')

module.exports = {


    findAll : function(){
        return CategoryModel.findAll();
    },
    
    getAttributes : function(atributes){
        return CategoryModel.getAttributes(atributes)
    },
    
    update : async function(properties){

        return new Promise((resolve,reject)=>{

            const { id=null } = properties

            CategoryModel.update(properties,
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

           CategoryModel.create(properties).then(newElementCreated=>{
                
                resolve(newElementCreated);

            }).catch(error=>{

                reject(error);
            
            })


       })

    },
    
    findOne : function(filterProperty){
        
        return CategoryModel.findOne({ where: { ...filterProperty } })
        
    },

    findByPrimaryKey : function(id){
   
        return CategoryModel.findByPk(id)
   },

   
    
    delete : function(id){

        return CategoryModel.destroy({
            where: {id : id}
        })
    
    },


}


