//Generator
const generateJson = require('json-generator')

const Jabber = require('jabber')
let jabber = new Jabber()
let DateGenerator = require('random-date-generator')


//Modules
const ServiceService = require('../../../services/ServiceService');

//Use this command if you want clean database
// sequelize.sync({  force: true });

//Para uma melhor apresentação do resultado use nos textos raiz de cada teste as palavras, Module.

let newElementForCreate = {
  name: generateJson.getFirstName(),
  description: generateJson.getText()
}

let createdElement =  {}
let updateElement = {}
let updatedElement = {}
let findedElement = {}
let deletedElement


describe("Modulo Service Service", function() {

  describe("CRUD", function() {

    beforeEach(async function(){

      //Create
      let element = await ServiceService.create(newElementForCreate);
      createdElement = element['dataValues'];

      //Update
      updateElement = Object.assign(updateElement,createdElement);
      updateElement.name = 'detroid';

      updatedElement = await ServiceService.update(updateElement);

      //Find
      findedElement = await ServiceService.findOne(createdElement.id);
      findedElement = findedElement['dataValues'];

      //Delete
      deletedElement = await ServiceService.delete(createdElement.id);

    },40000);
    
    
    
    it(`Create Service`, async function() { 
    
      expect(createdElement.name).toEqual(newElementForCreate.name);
      expect(createdElement.description).toEqual(newElementForCreate.description);
    
    });
    
  
    it(`Update Service`, async function() {

      expect(updatedElement.name).toEqual(updateElement.name);
      expect(updatedElement.description).toEqual(updateElement.description);
  
    });


    it(`FindOne Service`, async function() {

      expect(findedElement.name).toEqual(updatedElement.name);

    });
    

    it(`Delete Service`, async function() {

      expect(deletedElement).toBe(1);

    });
  

  });


    
  
});