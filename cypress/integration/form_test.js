describe('Can fill out form', () => {
	it('can navigate to the site', () => {
		cy.visit('http://localhost:3000');

		cy.url().should('include', 'localhost');
	});

	it('can navigate to the form', () => {
		cy.get('#formLink').click();

		cy.url().should('include', 'pizza');
	});

	it('can type a text for name', () => {
		cy.get('#nameInput').type('Name').should('have.value', 'Name');
	});

	it('can check toppings', () => {
		cy.get('#cheeseInput').check().should('be.checked');
		cy.get('#hamInput').check().should('be.checked');
	});

	it('can submit form', () => {
		cy.get('.smtBtn').click();
		cy.get;
	});

	it('form is empty after submit', () => {
		cy.get('#nameInput').should('have.value', '');
	});
});
