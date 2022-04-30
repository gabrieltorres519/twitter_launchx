/** Requerimiento 1: Se necesita un modelo `User` para guardar la información de un usuario de nuestra app: 
 * `id`, `username`, `name`, `bio`, `dateCreated` y `lastUpdated`. 
 */

describe("Unit tests for User class", () => {
    test("1) Create an User object", () => {
        //Aquí va el código que se usará en la app
        const user = new User(1,"gabrielletorricelli","Gabriel Torres Mendoza","Bio","dateCreated","lastUpdated");

        //Se validan los resultados del código.
        expect(user.id).toBe(1)
        expect(user.username).toBe("gabrielletorricelli")
        expect(user.name).toBe("Gabriel Torres Mendoza")
        expect(user.bio).toBe("Bio")
        expect(user.dateCreated).toBe("dateCreated")
        expect(user.lastUpdated).toBe("lastUpdated")

    })
});