//Generator
const generateJson = require('json-generator')

const Jabber = require('jabber')
let jabber = new Jabber()
let DateGenerator = require('random-date-generator')


//Modules
const CategoryService = require('../../../services/CategoriesService');

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


describe("Modulo Category Service", function() {

  describe("CRUD", function() {

    beforeEach(async function(){

      //Create
      createdElement = await CategoryService.create(newElementForCreate);

      //Update
      updateElement = Object.assign(updateElement,createdElement);
      updateElement.name = 'detroid';

      updatedElement = await CategoryService.update(updateElement);

      //Find
      findedElement = await CategoryService.findByPrimaryKey(createdElement.id);

      //Delete
      deletedElement = await CategoryService.delete(createdElement.id);

    },40000);
    
    
    it(`Create Category`, async function() { 
    
      expect(createdElement.name).toEqual(newElementForCreate.name);
      expect(createdElement.description).toEqual(newElementForCreate.description);
    
    });
    
  
    it(`Update Category`, async function() {

      expect(updatedElement.name).toEqual(updateElement.name);
      expect(updatedElement.description).toEqual(updateElement.description);
  
    });


    it(`FindOne Category`, async function() {

      expect(findedElement.name).toEqual(updatedElement.name);

    });
    

    it(`Delete Category`, async function() {

      expect(deletedElement).toBe(1);

    });
  

  });


    
  
});