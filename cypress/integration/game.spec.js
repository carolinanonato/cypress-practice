describe('Basic game functionality', () => {
  it('should allow the player to select a single card', () => {
    // First we visit the page.
    cy.visit('http://192.168.0.15:8080/');
    //then we click on a card.
    cy.get('.card').first().click();

    //make a claim about how the card has changed
    cy.get('.card').first().should('have.class', 'is-selected')

  });

  it('should allow matching pairs to remain face-up', () => {

  //visit the game page
  //click on a card
  //click on a second card; this card must match the first card
  //assert that the first card has the is-matched class
  //assert that the second card has the is-matched class
  
  
  });

  it('should flip non-matching pairs face-down', () => {

  });
});

describe('Countdown functionality', () => {
  it('should start the countdown when the user selects the first card', () => {
      //visit the page
      cy.visit('http://192.168.0.15:8080/');
      // click on the first card 
      cy.get('.card').first().click();
      // select the .timer Element 
      //assert that the timer element has specific text content
      cy.get('.timer').should('have.text', '3');
  });

  it('should flip the cards face-down when the countdown runs out', () => {
     //visit the page
     cy.visit('http://192.168.0.15:8080/');
     // click on the first card 
     cy.get('.card').first().click();
    
    //wait until the countdown runs out
    cy.wait(3000)
    //make an assertion about the content of the timer
    cy.get('.timer').should('have.text', '?')
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
