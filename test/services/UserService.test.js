//Sprint 2



const UserService = require("../../app/services/UserService");


describe("Unit test for UserService class",()=>{

            /**Requerimiento 1: Crear un nuevo usuario con lo ya definido en el sprint anterior, usando una nueva clase llamada `UserService`.
             * 
            Criterios de aceptación:

            1. Esta clase deberá tener un método `create` que se pueda usar sin instanciar (static method), y que reciba solo los parámetros del `id`, 
            `username` y `name`. 

            2. El valor de `bio` deberá ser por default para todos los `user` creados. */


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

            // describe("Unit test for UserService class",()=>{
                test("2) Get all userdata in a list",()=>{

                    const user = UserService.create(1,"gabrielletorricelli","Gabriel Torres Mendoza")
                    const userInfoInList = UserService.getInfo(user) // En userservice.js se cambió a static

                    expect(userInfoInList[0]).toBe(1)
                    expect(userInfoInList[1]).toBe("gabrielletorricelli")
                    expect(userInfoInList[2]).toBe("Gabriel Torres Mendoza")
                    expect(userInfoInList[3]).toBe("Sin bio")

                    
                })
            //})



            

            // Requerimiento 3: pasa la prueba 

            test("3. Update username", () => {
                const user = UserService.create(1, "gabrielletorricelli", "Gabriel Torres Mendoza")

                UserService.updateUserUsername(user, "gabo")

                expect(user.username).toBe("gabo")
            })

})