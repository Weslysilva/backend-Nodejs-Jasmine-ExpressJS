const CategoryModel = require('../models/CategoryModel')

module.exports = {


    findAll: function () {
        
        return new Promise((resolve,reject)=>{
                 //your code here
            CategoryModel.findAll().then(allElements=>{
                
                resolve(allElements)

            }).catch(error=>{
                
                reject(error)
            
            })
        })
    },

    getAttributes: function (properties) {
        
        return new Promise(async (resolve, reject) => {

            try {

                let elementFinded = await CategoryModel.getAttributes({ where: { ...properties } });

                if (elementFinded?.['dataValues']) {

                    elementFinded = elementFinded['dataValues'];
                    resolve(elementFinded);
                    return;

                } else if (elementFinded == null) {

                    resolve(null);

                }

            } catch (error) {

                reject(error);

            }
        });

    },

    update: async function (properties) {

        const { id = null } = properties;

        let existElement = await this.findOne(id);
        properties = Object.assign(existElement, properties);

        return new Promise((resolve, reject) => {

            CategoryModel.update(properties,
                {
                    where: { id: id }

                }).then((res) => {

                    resolve(properties);

                }).catch(error => {

                    reject(error);

                })
        })

    },

    create: async function (properties) {

        //TODO valid cpf or cnpj
        const { name } = properties;

        let findElement = await this.findOne({ name });

        return new Promise(async (resolve, reject) => {


            if (findElement?.name == name) {

                resolve(findElement);

                return;

            }

            CategoryModel.create(properties).then(newElementCreated => {

                newElementCreated = newElementCreated['dataValues']
                resolve(newElementCreated);

            }).catch(error => {

                cError(error)
                reject(new Error('Check how properties were sent'));

            });

        });


    },

    findOne: function (filterProperty) {

        return new Promise(async (resolve, reject) => {


            try {

                let elementFinded = await CategoryModel.findOne({ where: { ...filterProperty } });

                if (elementFinded?.['dataValues']) {

                    elementFinded = elementFinded['dataValues'];
                    resolve(elementFinded);
                    return;

                } else if (elementFinded == null) {

                    resolve(null);

                }

            } catch (error) {

                reject(error);

            }




        })

    },

    findByPrimaryKey: function (id) {

        return new Promise((resolve,reject)=>{
                 //your code here
            CategoryModel.findByPk(id).then(finded=>{
                
                if (finded?.['dataValues']) {

                    finded = finded['dataValues'];
                    resolve(finded);
                    return;

                } else if (finded == null) {

                    resolve(null);

                }
            
            }).catch(error=>{

                reject(new Error('Not Found'));

            })
            
        })
    },

    delete: function (properties) {

        return new Promise((resolve,reject)=>{

            CategoryModel.destroy({
                where: { ...properties }
            }).then(deleted=>{
                
                resolve(deleted);

            }).catch(error=>{

                reject(error);
            
            })
        })
        

    },


}


