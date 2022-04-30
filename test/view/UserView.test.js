const UserView = require('../../app/view/UserView')

describe("Tests for UserView", () => {

    //Requerimiento 1

  test("Return an error object when try to create a new user with an null payload", () => {
    const payload = null
    const result = UserView.createUser(payload)
    // https://jestjs.io/docs/using-matchers#strings
    expect(result.error).toMatch(/payload no existe/)
  })

})