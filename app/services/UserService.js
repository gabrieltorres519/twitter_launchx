const User = require("../user")

class UserService{
    static create(id,username,name){
        return new User(1,username,name,"Sin bio")
    }

    static getInfo(user){ // Para poder usar métodos de una clase sin instaciar, de la clase misma, deben ponerse como static
       return Object.values(user);
    }
}

module.exports = UserService