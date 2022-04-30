
//Sprint 1


const User = require("../../app/models/user");

describe("Unit tests for User class", () => {



                /** Requerimiento 1: Se necesita un modelo `User` para guardar la información de un usuario de nuestra app: 
                 * `id`, `username`, `name`, `bio`, `dateCreated` y `lastUpdated`. 
                 */


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
              



                
                /**Requerimiento 3: Cada objeto tipo user necesita los siguietes gettes: `getUsername`, `getBio`, `getDateCreated`, `getLastUpdated`. */

                
                //     test("3) Add getters",()=>{
                //         //aquí el codigo que se usará en la app
                //         const user = new User(1,"gabrielletorricelli","Gabriel Torres Mendoza","Bio")


                //         //Validaciones de los resultados del código
                //          expect(user.getUsername).toBe("gabrielletorricelli")
                //          expect(user.getBio).toBe("Bio")
                //          expect(user.getDateCreated).not.toBeUndefined()
                //          expect(user.getLastUpdated).not.toBeUndefined()
                //     })
              



                /**Requerimiento 4: Cada objeto necesita los siguientes setters: `setUsername` y `setBio`, para actualizar dichas propiedades. */

              
                //     test("4) Add setters",()=>{
                //         //Aquí el código que se usará en la app
                //         const user = new User(1,"gabrielletorricelli","Gabriel Torres Mendoza","Bio")
                        
                        
                //         user.setUsername = "Gilmar"
                //         expect(user.username).toBe("Gilmar")


                //         user.setBio = "New bio"
                //         expect(user.bio).toBe("New bio")
                    
                //     })
              
})


