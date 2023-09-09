import Collapsible from './Collapsible'

describe('Collapsible', () => {
  it('renders', () => {
    cy.mount(<Collapsible />).should('exist')
  })

  it('renders the correct children', () => {
    cy.mount(
      <Collapsible>
        <div data-cy="test_child">Child element</div>
      </Collapsible>
    )
      .get("[data-cy='test_child']")
      .should('exist')
  })

  it('renders a button', () => {
    cy.mount(<Collapsible />)
      .get(`[data-cy="action-button"]`)
      .should('exist')
  })
  it('Button toggles the visibility of the children', () => {
    cy.mount(
      <Collapsible>
        <div data-cy="test_child">Child element</div>
      </Collapsible>
    ).then(() => {
      cy.get("[data-cy='test_child']").should('exist')
      cy.wait(200)

      cy.get(`[data-cy="action-button"]`)
        .click()
        .then(() => {
          cy.get("[data-cy='test_child']").should('not.exist')
          cy.wait(200)
          cy.get(`[data-cy="action-button"]`)
            .click()
            .blur()
            .then(() => {
              cy.get("[data-cy='test_child']").should('exist')
            })
        })
    })
  })
})
