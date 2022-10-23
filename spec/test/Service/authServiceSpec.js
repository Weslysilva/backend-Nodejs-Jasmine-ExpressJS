const authService = require('../../../services/authServices')
const { tokenVerify } = require('../../../modules/token')
const { sequelize } = require('../../../modules/orm/sequelize/index')
const pubKey = process.env['PUBLIC_KEY']

//Para uma melhor apresentação do resultado use nos textos raiz de cada teste as palavras, Modulo ou Conjunto ou Grupo.

let User = {
  username: 'wesly silva',
  password: '$10$8xBKd1/wMMMN6f0UMAwfNugvOp5Ey/K0rIpGbXz8qeU42Rip5aq2m',
  birthday: null,
  email : 'wesly.s.silva@gmail.com'
}

let token
let tokenIsValid

describe("Modulo Auth Service", function() {

    describe("Auth", function() {
 
      beforeEach(async function(){

        //Get Token
        token = await authService.checkCredential('wesly.s.silva@gmail.com','12345678')
        tokenIsValid = await tokenVerify(token,pubKey)

      },10000);
      
      
      it(`Check Token is Valid`, async function() { 
      
        expect(tokenIsValid.email).toEqual(User.email)
      
      });
      
    
    //   it(`Update Client`, async function() {

    //     expect(updatedUser.username).toEqual(updateUser.username);
    //     expect(updatedUser.birthday).toEqual(new Date(updateUser.birthday));
    //     expect(updatedUser.email).toEqual(updateUser.email);
    
    //   });


    //   it(`FindOne Client`, async function() {

    //     expect(createdUser.email).toEqual(newUser.email);

    //   });
      

    //   it(`Delete Client`, async function() {

    //     expect(deletedUser).toBe(1);

    //   });
    

    });


    
  
});