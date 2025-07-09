describe('Login Page - fixture test user', () => {
  let users;

  before(() => {
    cy.fixture('users').then((fixtureData) => {
      users = fixtureData;
    });
  });


  it('passes', () => {
    cy.visit('https://www.saucedemo.com/')
    const validUser = users.validUser;

    cy.get('#user-name').type(validUser.username);
    cy.get('#password').type(validUser.password);
    cy.get('#login-button').click();

  })
})