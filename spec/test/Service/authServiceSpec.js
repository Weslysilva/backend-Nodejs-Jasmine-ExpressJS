const authService = require('../../../services/authServices')
const { tokenVerify } = require('../../../modules/token')
const { verify } = require('jsonwebtoken')
const pubKey = process.env['PUBLIC_KEY']

//Para uma melhor apresentação do resultado use nos textos raiz de cada teste as palavras, Modulo ou Conjunto ou Grupo.

let User = {
  username: 'wesly silva',
  password: '$10$8xBKd1/wMMMN6f0UMAwfNugvOp5Ey/K0rIpGbXz8qeU42Rip5aq2m',
  birthday: null,
  email : 'wesly.s.silva@gmail.com'
}

let token
let decodedToken

describe("Modulo Auth Service", function() {

    describe("Auth", function() {
 
      beforeEach(async function(){

        //Get Token
        token = await authService.checkCredential('wesly.s.silva@gmail.com','12345678');
        decodedToken = await tokenVerify(token);
        

      },10000);
      
      it(`Check Login`, async function() { 
      
        expect(token).toBeDefined();
      
      });
      
      it(`Check Token is Valid`, async function() { 
      
        expect(decodedToken.email).toEqual(User.email);
      
      });
      
    
      it(`Check User is Authenticated`, async function() {

        let tokenUser = await authService.authenticatedUser(token);

        expect(tokenUser).toEqual(token);
    
      });
    

    });


    
  
});