const ClientAndServices = require('../models/ClientAndServices');
const ClientModel = require('../models/ClientModel');
const ServiceModel = require('../models/ServiceModel');
const { createHash } = require('../modules/auth')


module.exports = {


    findAll : function(){
        return ClientModel.findAll();
    },
    
    getAttributes : function(atributes){
        return ClientModel.getAttributes(atributes)
    },
    
    update : async function(elementProperty){
        
        const { id=null, 
                birthday=null, 
                documentType=null,
                document=null 
            } = elementProperty

        let existElement = await this.findOne(id);
        existElement = existElement['dataValues'];
        
        elementProperty = Object.assign(existElement,elementProperty)

        if(typeof(birthday) == String && birthday != existElement.birthday) {
            let birthdayTemp = birthday.split('/')
            birthday = new Date(
                Number.parseInt(birthdayTemp[2]),
                Number.parseInt(birthdayTemp[1]-1),
                Number.parseInt(birthdayTemp[0])
            )
        }
        
        return new Promise((resolve,reject)=>{

            ClientModel.update(elementProperty,
            {
                where: { id: id }

            }).then((res)=>{

                resolve(elementProperty);

            }).catch(error=>{

                reject(error);
            
            })
        })
        
    },
    
    create : async function(elementProperty){

        //TODO valid cpf or cnpj

       return new Promise((resolve,reject)=>{

           ClientModel.create(elementProperty).then(newElementCreated=>{
                
                resolve(newElementCreated);

            }).catch(error=>{

                reject(error);
            
            })


       })

    },
    
    findOne : function(filterProperties){
        
        return ClientModel.findOne({ where: { ...filterProperties } })
        
    },

    findByPrimaryKey : function(id){
   
        return ClientModel.findByPk(id)
        
   },

   
    
    delete : function(id){

        return ClientModel.destroy({
            where: {id : id}
        })
    
    },


}



    // 1. INSERT a new student
    const service = await ServiceModel.create({
        firstName: "Jake",
    });
  
  // 2. Find the Classes row
  const client = await ClientModel.findByPk(1);
  
  // 3. INSERT the association in Enrollments table
  await service.addClass(client, { through: ClientAndServices });
