import Collapsible from './Collapsible'
import { cy, describe, it } from 'local-cypress'

describe('Collapsible', () => {
  it('renders', () => {
    cy.mount(<Collapsible />).should('exist')
  })

  it('renders the correct children', () => {
    cy.mount(
      <Collapsible>
        <div data-cy="test_child">Child element</div>
      </Collapsible>
    ).get("[data-cy='test_child']")
  })

  it('renders a button', () => {
    cy.mount(<Collapsible />).get(`[data-cy="action-button"]`)
  })

  it('Button toggles the visibility of the children', () => {
    cy.mount(
      <Collapsible>
        <div data-cy="test_child">Child element</div>
      </Collapsible>
    ).then(() => {
      cy.get("[data-cy='test_child']").as('testChild')
      cy.wait(200)

      cy.get(`[data-cy="action-button"]`).as('actionButton').click()
      cy.get("[data-cy='childrenWrapper']")
        .as('childrenWrapper')
        .should('have.css', 'display', 'none')

      cy.get(`@actionButton`)
        .click()
        .blur()
        .then(() => {
          cy.get('@childrenWrapper').should('have.css', 'display', 'flex')
        })
    })
  })
})
