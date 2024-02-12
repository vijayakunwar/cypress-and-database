describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })

  it('test connection', () => {
    let query = `SELECT * FROM [pubs].[dbo].[authors]`
    /* cy.connectDB("query").then((data)=>{
        cy.log(data)
    }) */
    cy.sqlServer(query).then((data) => {
      cy.log(data)
    })
  })
})