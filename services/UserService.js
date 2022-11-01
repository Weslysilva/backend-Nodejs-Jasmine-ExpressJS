const { UserModel } = require('../models/UsersModel')
const { createHash } = require('../modules/auth')


module.exports = {


    findAll : function(){
        return UserModel.findAll();
    },
    
    getAttributes : function(){
        UserModel.getAttributes
    },
    
    update : async function(userProperty){
        
        const { id=null, username=null, birthday=null , email=null } = userProperty

        let existUser = await this.findOne(id);
        existUser = existUser['dataValues'];
        
        if(typeof(birthday) == String && birthday != existUser.birthday) {
            let birthdayTemp = birthday.split('/')
            birthday = new Date(
                Number.parseInt(birthdayTemp[2]),
                Number.parseInt(birthdayTemp[1]-1),
                Number.parseInt(birthdayTemp[0])
            )
        }
        
        return new Promise((resolve,reject)=>{

            UserModel.update({
                username: username,
                birthday: birthday,
                email : email
                },
            {
                where: { id: id }

            }).then((res)=>{

                resolve(userProperty);

            }).catch(error=>{

                reject(error);
            
            })
        })
        
    },
    
    create : async function(UserProperty){
        
       const { username=null, password=null , birthday=null , email=null} = UserProperty
    
       let hashPwd = await createHash(password)

       return new Promise((resolve,reject)=>{

           UserModel.create({ 
                username: username,
                password: hashPwd,
                birthday: birthday,
                email : email
            }).then(newUser=>{
                
                resolve(newUser);

            }).catch(error=>{

                reject(error);
            
            })


       })

    },
    
    findOne : function(filterUser){
        
        return UserModel.findOne({ where: { ...filterUser } })
        
    },
    
    delete : function(id){

        return UserModel.destroy({
            where: {id : id}
        })
    
    },

    changePasswod : function(oldPass, newPass){

        //Code

    },

    updateRole : function(oldRole, NewRole){

        //Code

    }


}


