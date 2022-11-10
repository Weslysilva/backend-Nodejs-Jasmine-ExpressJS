const ServiceModel = require('../models/ServiceModel')
const { cLog, cError } = console

module.exports = {


    findAll: function () {

        return new Promise((resolve, reject) => {

            ServiceModel.findAll().then(allElements => {

                resolve(allElements)

            }).catch(error => {

                reject(error)

            })
        })
    },

    getAttributes: function (properties) {

        return new Promise(async (resolve, reject) => {

            try {

                let elementFinded = await ServiceModel.getAttributes({ where: { ...properties } });

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

    update: async function (properties) {
        
        const { id = null } = properties;

        let existElement = await this.findOne(id);
        properties = Object.assign(existElement, properties);
        
        
        return new Promise(async (resolve, reject) => {

            ServiceModel.update(properties,
                {
                    where: { id }

                }).then(async (res) => {

                    let seriveUpdated = await this.findByPrimaryKey(id);
                    seriveUpdated = seriveUpdated['dataValues'];

                    resolve(seriveUpdated);

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

            ServiceModel.create(properties).then(newElementCreated => {

                newElementCreated = newElementCreated['dataValues']
                resolve(newElementCreated);

            }).catch(error => {

                cError(error)
                reject(new Error('Check how properties were sent'));

            })


        })

    },

    findOne: async function (filterProperty) {

        return new Promise(async (resolve, reject) => {

            try {

                let elementFinded = await ServiceModel.findOne({ where: { ...filterProperty } });

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

        return new Promise((resolve, reject) => {

            ServiceModel.findByPk(id).then(finded => {

                resolve(finded);

            }).catch(error => {

                reject(new Error('Not Found'));

            })

        })
    },

    delete: function (properties) {

        return new Promise((resolve, reject) => {

            ServiceModel.destroy({

                where: { ...properties }

            }).then(deleted => {

                resolve(deleted);

            }).catch(error => {

                reject(error);

            })
        })

    },


}


