const authService = require('../../../services/authServices')
const { tokenVerify } = require('../../../modules/token')
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
      
    
      it(`Check User is Authenticated`, async function() {

        let isAuthenticated = await authService.authenticatedUser(token)

        expect(isAuthenticated.email).toEqual(User.email)
    
      });
    

    });


    
  
});