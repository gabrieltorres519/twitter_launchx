
//Sprint 1

/** Requerimiento 1: Se necesita un modelo `User` para guardar la información de un usuario de nuestra app: 
 * `id`, `username`, `name`, `bio`, `dateCreated` y `lastUpdated`. 
 */
// const User = require("../app/user");

// describe("Unit tests for User class", () => {
//     test("1) Create an User object", () => {
//         //Aquí va el código que se usará en la app
//         const user = new User(1,"gabrielletorricelli","Gabriel Torres Mendoza","Bio","dateCreated","lastUpdated");

//         //Se validan los resultados del código.
//         expect(user.id).toBe(1)
//         expect(user.username).toBe("gabrielletorricelli")
//         expect(user.name).toBe("Gabriel Torres Mendoza")
//         expect(user.bio).toBe("Bio")
//         expect(user.dateCreated).toBe("dateCreated")
//         expect(user.lastUpdated).toBe("lastUpdated")

//     })
// });


/** Requerimiento 2: Las propiedades `dateCreated` y `lastUpdated` deberán ser datos de tipo fecha que guarden el momento 
 * en que se instancie un nuevo objeto de la clase `User`. */

//  describe("Unit tests for User class", () => {
//     test("2) Use current date in parameters", () => {
//         //Aquí va el código que se usará en la app
//         const user = new User(1,"gabrielletorricelli","Gabriel Torres Mendoza","Bio"); //Ya que la fecha actual se agregará en la definición de la clase no agregamos info en los campos

//         //Se validan los resultados del código.
//         expect(user.id).toBe(1)
//         expect(user.username).toBe("gabrielletorricelli")
//         expect(user.name).toBe("Gabriel Torres Mendoza")
//         expect(user.bio).toBe("Bio")
//                     //Ya que la fecha actual se agregará en la definición de la clase solo se verificará que llegue
//         expect(user.dateCreated).not.toBeUndefined()
//         expect(user.lastUpdated).not.toBeUndefined()

//     })
// });



/**Requerimiento 3: Cada objeto tipo user necesita los siguietes gettes: `getUsername`, `getBio`, `getDateCreated`, `getLastUpdated`. */

// describe("Unit tests for User class",()=>{
//     test("3) Add getters",()=>{
//         //aquí el codigo que se usará en la app
//         const user = new User(1,"gabrielletorricelli","Gabriel Torres Mendoza","Bio")


//         //Validaciones de los resultados del código
//          expect(user.getUsername).toBe("gabrielletorricelli")
//          expect(user.getBio).toBe("Bio")
//          expect(user.getDateCreated).not.toBeUndefined()
//          expect(user.getLastUpdated).not.toBeUndefined()
//     })
// })



/**Requerimiento 4: Cada objeto necesita los siguientes setters: `setUsername` y `setBio`, para actualizar dichas propiedades. */

// describe("Unit tests for User class",()=>{
//     test("4) Add setters",()=>{
//         //Aquí el código que se usará en la app
//         const user = new User(1,"gabrielletorricelli","Gabriel Torres Mendoza","Bio")
        
        
//         user.setUsername = "Gilmar"
//         expect(user.username).toBe("Gilmar")


//         user.setBio = "New bio"
//         expect(user.bio).toBe("New bio")
    
//     })
// })



//Sprint 2

/**Requerimiento 1: Crear un nuevo usuario con lo ya definido en el sprint anterior, usando una nueva clase llamada `UserService`.
 * 
Criterios de aceptación:

1. Esta clase deberá tener un método `create` que se pueda usar sin instanciar (static method), y que reciba solo los parámetros del `id`, 
`username` y `name`. 

2. El valor de `bio` deberá ser por default para todos los `user` creados. */

const UserService = require("../../app/services/UserService");


// describe("Unit test for UserService class",()=>{
//     test("1) Create a new user using UserService",()=>{

//         const user = UserService.create(1,"gabrielletorricelli","Gabriel Torres Mendoza")


//         expect(user.username).toBe("gabrielletorricelli")
//         expect(user.name).toBe("Gabriel Torres Mendoza")
//         expect(user.id).toBe("1")
//         expect(user.bio).not.toBeUndefined()

        
//     })
// })


/**Requerimiento 2: Agregar un nuevo método estático en `UserService` llamado `getInfo` que al recibir un objeto de la clase `User`, 
 * me regrese una lista con todos los valores de los atributos de dicho objeto.
 */

 describe("Unit test for UserService class",()=>{
    test("2) Get all userdata in a list",()=>{

        const user = UserService.create(1,"gabrielletorricelli","Gabriel Torres Mendoza")
        const userInfoInList = UserService.getInfo(user) // En userservice.js se cambió a static

        expect(userInfoInList[0]).toBe(1)
        expect(userInfoInList[1]).toBe("gabrielletorricelli")
        expect(userInfoInList[2]).toBe("Gabriel Torres Mendoza")
        expect(userInfoInList[3]).toBe("Sin bio")

        
    })
})


// Requerimiento 3: pasa la prueba 

test("3. Update username", () => {
    const user = UserService.create(1, "gabrielletorricelli", "Gabriel Torres Mendoza")

    UserService.updateUserUsername(user, "gabo")

    expect(user.username).toBe("gabo")
})