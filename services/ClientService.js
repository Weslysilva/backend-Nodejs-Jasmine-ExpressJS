const ClientAndServices = require('../models/ClientAndServices');
const ClientModel = require('../models/ClientModel');
const ServiceModel = require('../models/ServiceModel');
const { createHash } = require('../modules/auth')


module.exports = {


    findAll: function () {
        
        return new Promise((resolve, reject) => {
            //your code here
            ClientModel.findAll().then(allElements => {

                resolve(allElements)

            }).catch(error => {

                reject(error)

            })
        })
    },

    getAttributes: function (properties) {

        return new Promise(async (resolve, reject) => {

            try {

                let elementFinded = await ClientModel.getAttributes({ where: { ...properties } });

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

        const { id = null,
            birthday = null,
            documentType = null,
            document = null
        } = properties

        let existElement = await this.findOne(id);
        properties = Object.assign(existElement, properties)

        if (typeof (birthday) == String && birthday != existElement.birthday) {

            try {
                let birthdayTemp = birthday.split('/');
                birthday = new Date(
                    Number.parseInt(birthdayTemp[2]),
                    Number.parseInt(birthdayTemp[1] - 1),
                    Number.parseInt(birthdayTemp[0])
                )
            } catch (error) {
                reject(error);
            }
        }

        return new Promise((resolve, reject) => {

            ClientModel.update(properties,
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

        const { email = null } = properties;

        let findElement = await this.findOne({ email });

        return new Promise(async (resolve, reject) => {


            if (findElement?.email == email) {

                resolve(findElement);

                return;

            }

            ClientModel.create(properties).then(newElementCreated => {

                newElementCreated = newElementCreated['dataValues']
                resolve(newElementCreated);

            }).catch(error => {

                cError(error)
                reject(new Error('Check how properties were sent'));

            })


        })

    },

    findOne: async function (properties) {

        return new Promise(async (resolve, reject) => {

            try {

                let elementFinded = await ClientModel.findOne({ where: { ...properties } });

                if (elementFinded?.['dataValues']) {

                    elementFinded = elementFinded?.['dataValues'];

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
            ClientModel.findByPk(id).then(finded => {

                resolve(finded);

            }).catch(error => {

                reject(new Error('Not Found'));

            })

        })
    },



    delete: function (properties) {

        return new Promise((resolve, reject) => {

            ClientModel.destroy({

                where: { ...properties }

            }).then(deleted => {

                resolve(deleted);

            }).catch(error => {

                reject(error);

            })
        })

    },


}