//Generator
const generateJson = require('json-generator')

const Jabber = require('jabber')
let jabber = new Jabber()

let DateGenerator = require('random-date-generator')
let startDate = new Date(1980, 2, 2);
let endDate = new Date(2000, 3, 3);


//Modules

const UserService = require('../../../services/UserService');
const { verify } = require('../../../modules/auth');

const { sequelize } = require('../../../modules/orm/sequelize/index');

//Use this command if you want clean database
// sequelize.sync({  force: true });

//Para uma melhor apresentação do resultado use nos textos raiz de cada teste as palavras, Module.

let newUser = {
  username: generateJson.getFirstName(),
  password: generateJson.getInt(8,18).toString(),
  birthday: DateGenerator.getRandomDateInRange(startDate,endDate),
  email : jabber.createEmail()
}

let createdUser =  {}
let updateUser = {}
let updatedUser = {}
let findedUser = {}
let deletedUser
let hashPwd




describe("Modulo User Service", function() {

  describe("CRUD", function() {

    beforeEach(async function(){

      //Create
      let user = await UserService.create(newUser);
      createdUser = user['dataValues'];
      
      hashPwd = await verify(newUser.password, createdUser.password);

      //Update
      
      updateUser = Object.assign(updateUser,createdUser);
      updateUser.username = 'detroid';
      updatedUser = await UserService.update(updateUser);

      //Find
      findedUser = await UserService.findOne(createdUser.id);
      findedUser = user['dataValues'];

      //Delete
      deletedUser = await UserService.delete(createdUser.id);

    },40000);
    
    
    
    it(`Create Client`, async function() { 
    
      expect(createdUser.username).toEqual(newUser.username);
      expect(hashPwd).toBeTrue();
      expect(createdUser.birthday).toEqual(new Date(newUser.birthday));
      expect(createdUser.email).toEqual(newUser.email);
    
    });
    
  
    it(`Update Client`, async function() {

      expect(updatedUser.username).toEqual(updateUser.username);
      expect(updatedUser.birthday).toEqual(new Date(updateUser.birthday));
      expect(updatedUser.email).toEqual(updateUser.email);
  
    });


    it(`FindOne Client`, async function() {

      expect(createdUser.email).toEqual(newUser.email);

    });
    

    it(`Delete Client`, async function() {

      expect(deletedUser).toBe(1);

    });
  

  });


    
  
});