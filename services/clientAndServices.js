const ClientAndServices = require('../models/ClientAndServices');
const ServicesService = require('../services/ServiceService');
const ClientService = require('../services/ClientService');



module.exports = {


    findAll: function () {
        
        return new Promise((resolve, reject) => {
            
            ClientAndServices.findAll().then(allElements => {

                resolve(allElements);

            }).catch(error => {

                reject(error);

            })
        })
    },

    getAttributes: function (properties) {

        return new Promise(async (resolve, reject) => {

            try {

                let elementFinded = await ClientAndServices.getAttributes({ where: { ...properties } });

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

        const { id = null } = properties
        
        let existElement = await this.findOne(id);
        properties = Object.assign(existElement, properties);

        return new Promise((resolve, reject) => {


            ClientAndServices.update(properties,
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

        // 1. Get service
        let service = await ServicesService.findByPrimaryKey(properties.serviceId)

        // 2. Get Client
        let client = await ClientService.findByPrimaryKey(properties.clientId);

        // 3. INSERT the association in Enrollments table
        return new Promise((resolve, reject) => {

            service.addClass(client, { through: ClientAndServices }).then(newElementCreated => {

                resolve(newElementCreated);

            }).catch(error => {

                reject(error);

            })

        })

    },

    findOne: function (properties) {

        return new Promise(async (resolve, reject) => {

            try {

                let elementFinded = await ClientAndServices.findOne({ where: { ...properties } });

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
            //your code here
            ClientAndServices.findByPk(id).then(finded => {

                resolve(finded);

            }).catch(error => {

                reject(new Error('Not Found'));

            })

        })
    },

    delete: function (id) {

        return ClientAndServices.destroy({
            where: { id: id }
        });

    },


}




