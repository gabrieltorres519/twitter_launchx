class User{
    constructor(id, username, name, bio){
        this.id = id
        this.username = username
        this.name = name
        this.bio = bio
        this.dateCreated = new Date()
        this.lastUpdated = new Date()
    }

    //Getters
    get getUsername(){
        return this.username
    } 

    get getBio(){
        return this.bio
    }

    get getDateCreated(){
        return this.dateCreated
    }

    get getLastUpdated(){
        return this.lastUpdated
    }


    //Setters
    set setUsername(newUsename){
        this.username = newUsename
    }

    set setBio(newBio){
        this.bio = newBio
    }
}

module.exports = User