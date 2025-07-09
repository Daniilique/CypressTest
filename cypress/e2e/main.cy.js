describe('Login Page - fixture test user', () => {
  let users;

  // Load fixture before test begins
  before(() => {
    cy.fixture('users').then((fixtureData) => {
      users = fixtureData;
    });
  });

  // navigate to the login page before each test
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/');
  });

  it('Should login succesfuly with corect credentials', () => {
    const validUser = users.validUser;

    //Fill the data into the forms and click login
    cy.get('#user-name').type(validUser.username);
    cy.get('#password').type(validUser.password);
    cy.get('#login-button').click();

    // Verify successful login
    cy.url().should('include', '/inventory.html'); 
  });
});