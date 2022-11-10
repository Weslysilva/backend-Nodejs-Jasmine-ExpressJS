//Generator
const generateJson = require('json-generator')

const Jabber = require('jabber')
let jabber = new Jabber()

let DateGenerator = require('random-date-generator')
let startDate = new Date(1980, 2, 2);
let endDate = new Date(2000, 3, 3);

//Modules
const ClientService = require('../../../services/ClientService');

//Para uma melhor apresentação do resultado use nos textos raiz de cada teste as palavras, Module.

let newClient = {
  name: generateJson.getFirstName(),
  birthday: DateGenerator.getRandomDateInRange(startDate,endDate),
  email : jabber.createEmail()
}

let createdClient =  {}
let updateClient = {}
let updatedClient = {}
let findedClient = {}
let deletedClient
let hashPwd


describe("Modulo Client Service", function() {

  describe("CRUD", function() {

    beforeEach(async function(){

      //Create
      createdClient = await ClientService.create(newClient);
     

      //Update
      updateClient = Object.assign(updateClient,createdClient);
      updateClient.name = 'detroid';
      updatedClient = await ClientService.update(updateClient);

      //Find
      findedClient = await ClientService.findOne(createdClient.id);

      //Delete
      deletedClient = await ClientService.delete(createdClient.id);

    },40000);
    
    
    
    it(`Create Client`, async function(){ 
    
      expect(createdClient.name).toEqual(newClient.name);
      expect(createdClient.birthday).toEqual(new Date(newClient.birthday));
      expect(createdClient.email).toEqual(newClient.email);
    
    });
    
  
    it(`Update Client`, async function() {

      expect(updatedClient.name).toEqual(updateClient.name);
      expect(updatedClient.birthday).toEqual(new Date(updateClient.birthday));
      expect(updatedClient.email).toEqual(updateClient.email);
  
    });


    it(`FindOne Client`, async function() {

      expect(createdClient.email).toEqual(newClient.email);

    });
    

    it(`Delete Client`, async function() {

      expect(deletedClient).toBe(1);

    });
  

  });


    
  
});