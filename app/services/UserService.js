const User = require("../user")

class UserService{
    static create(id,username,name){
        return new User("1",username,name,"Sin bio")
    }
}

module.exports = UserService