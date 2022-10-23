// const { generateJson }  = require('json-generator');

// var arrayObjValido = generateJson({
//         id: "id;objectId",
//         children: [
//           5,
//           {
//             name: "fullName",
//             age: "int;0;10"
//           }
//         ],
//         currentJob: {
//           title: "Developer",
//           salary: "mask;"
//         },
//         jobs: [
//           2,
//           {
//             title: 'random;["developer", "medic", "teacher", "CEO"]',
//             salary: "money"
//           }
//         ],
//         maxRunDistance: "float;1;20;1",
//         cpf: "cpf",
//         cnpj: "cnpj",
//         pretendSalary: "money",
//         age: "int;20;80",
//         gender: "gender",
//         firstName: "firstName",
//         lastName: "lastName",
//         phone: "maskInt;+55 (83) 9####-####",
//         address: "address",
//         hairColor: "color"
// })

// var arrayObjValido = generateJson({
//         id: "id;objectId",
//         children: [
//           5,
//           {
//             name: "fullName",
//             age: "int;0;10"
//           }
//         ],
//         currentJob: {
//           title: "Developer",
//           salary: "mask;"
//         },
//         jobs: [
//           2,
//           {
//             title: 'random;["developer", "medic", "teacher", "CEO"]',
//             salary: "money"
//           }
//         ],
//         maxRunDistance: "float;1;20;1",
//         cpf: "cpf",
//         cnpj: "cnpj",
//         pretendSalary: "money",
//         age: "int;20;80",
//         gender: "gender",
//         firstName: "firstName",
//         lastName: "lastName",
//         phone: "maskInt;+55 (83) 9####-####",
//         address: "address",
//         hairColor: "color"
// })

// var arrayObjOnlyRiquered = generateJson({
//         id: "id;objectId",
//         children: [
//           5,
//           {
//             name: "fullName",
//             age: "int;0;10"
//           }
//         ],
//         currentJob: {
//           title: "Developer",
//           salary: "mask;"
//         },
//         jobs: [
//           2,
//           {
//             title: 'random;["developer", "medic", "teacher", "CEO"]',
//             salary: "money"
//           }
//         ],
//         maxRunDistance: "float;1;20;1",
//         cpf: "cpf",
//         cnpj: "cnpj",
//         pretendSalary: "money",
//         age: "int;20;80",
//         gender: "gender",
//         firstName: "firstName",
//         lastName: "lastName",
//         phone: "maskInt;+55 (83) 9####-####",
//         address: "address",
//         hairColor: "color"
// })

// var arrayObjOnlyNotRiquered = generateJson({
//         id: "id;objectId",
//         children: [
//           5,
//           {
//             name: "fullName",
//             age: "int;0;10"
//           }
//         ],
//         currentJob: {
//           title: "Developer",
//           salary: "mask;"
//         },
//         jobs: [
//           2,
//           {
//             title: 'random;["developer", "medic", "teacher", "CEO"]',
//             salary: "money"
//           }
//         ],
//         maxRunDistance: "float;1;20;1",
//         cpf: "cpf",
//         cnpj: "cnpj",
//         pretendSalary: "money",
//         age: "int;20;80",
//         gender: "gender",
//         firstName: "firstName",
//         lastName: "lastName",
//         phone: "maskInt;+55 (83) 9####-####",
//         address: "address",
//         hairColor: "color"
// })

// const mail = require('../../index')
// const mailOptions = {
//     from: 'bot@itsbrasil.net',
//     to: `wesly.s.silva@gmail.com`,
//     subject: `asasasas`,
//     html: `asdasdjalksjdlasjdlajsd`,
//     attachments: []
//     }

// //Para uma melhor apresentação do resultado use nos textos raiz de cada teste as palavras, Modulo ou Conjunto ou Grupo.

// describe("Modulo EMAIL", function() {


//     describe("Função Envio de EMAIL Objetos validos", function() {
//         it("Testando se a resposta se definida e se ela e uma string", function() {
            
//           const email = mail.sendEmail(mailOptions)
//           expect(email).toBeInstanceOf(Object)
    
//         });
//       });

//     describe("Função Envio de EMAIL Objetos Invalidos", function() {
//         it("Testando se a resposta retorna um objeto", function() {
//             const email = mail.sendEmail(mailOptions)
//             expect(email).toBeInstanceOf(Object)

//         });
//     });
    
//     describe("Envio de EMAIL - Objetos com atributos não requeridos somente", function() {
//         it("Testando se a resposta e igual a Not a Number", function() {
            
//           const email = mail.sendEmail(mailOptions)
//           expect(email).toBeInstanceOf(Object)

//         });
//     });

//     describe("Envio de EMAIL - Atributos com objetos Requeridos Somente", function() {
//         it("Testando se a resposta e igual a Not a Number", function() {
            
//           const email = mail.sendEmail(mailOptions)
//           expect(email).toBeInstanceOf(Object)

//         });
//     });

//     describe("Envio de EMAIL 3", function() {
//         it("Testando se a resposta e igual a Not a Number", function() {
            
//           const email = mail.sendEmail(mailOptions)
//           expect(email).toBeInstanceOf(Object)
//         });
//     });
  
// });