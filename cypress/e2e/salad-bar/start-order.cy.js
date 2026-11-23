describe('start order on salad bar', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200');
  });

  it('enters name and tel the starts order', () => {
    cy.get('input[data-test="order-form-name"]').type('John Doe', {force: true});
    cy.get('input[data-test="order-form-tel"]').type('0612345678', {force: true});
    cy.get('button[data-test="order-form-start"]').click();

    cy.get('p[data-test="welcome"]').should('have.text', 'Welcome John Doe ! choose your toppings below :')
  });
});
