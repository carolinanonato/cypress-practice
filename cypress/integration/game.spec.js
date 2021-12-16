describe('Basic game functionality', () => {
  it('should allow the player to select a single card', () => {
    // First we visit the page.
    cy.visit('http://10.6.1.135:8080/');
    //then we click on a card.
    cy.get('.card').first().click();

    //make a claim about how the card has changed
    cy.get('.card').first().should('have.class', 'is-selected')

  });

  it('should allow matching pairs to remain face-up', () => {

  });

  it('should flip non-matching pairs face-down', () => {

  });
});

describe('Countdown functionality', () => {
  it('should start the countdown when the user selects the first card', () => {

  });

  it('should flip the cards face-down when the countdown runs out', () => {

  });

  it('should reset the countdown when it runs out', () => {

  });

  it('should reset the countdown when the user selects a second card', () => {

  });
});

describe('Endgame functionality', () => {
  it('should display a congratulatory message when the player successfully matches all of the cards', () => {

  });
});
