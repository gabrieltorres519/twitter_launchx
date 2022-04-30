const User = require("../models/user")

class UserService{
    static create(id,username,name){
        return new User(1,username,name,"Sin bio")
    }

    static getInfo(user){ // Para poder usar métodos de una clase sin instaciar, de la clase misma, deben ponerse como static
       return Object.values(user);
    }

    // static updateUserUsername(user, newUsername){ 
    //     user.setUsername(newUsername)  // Forma incorrecta de usar un 
    // }

    static updateUserUsername(user, username){
        user.setUsername = username //Forma correcta de llamar a un setter
    }
}

module.exports = UserService