import ThemeSwitcher from './ThemeSwitcher'
import { cy, describe, it } from 'local-cypress'

describe('ThemeSwitcher', () => {
  it('renders', () => {
    cy.mount(<ThemeSwitcher />)
  })

  it('renders the action button', () => {
    cy.mount(<ThemeSwitcher />)

    cy.get('[data-cy=actionButton]').as('actionButton')
  })

  it('Click action calls the onChange prop', () => {
    const onChangeSpy = cy.spy().as('onChangeSpy')
    cy.mount(<ThemeSwitcher onChange={onChangeSpy} />)

    cy.get('[data-cy=actionButton]').as('actionButton').click()
    cy.get('@onChangeSpy').should('be.called')
  })

  it('Mode switches the action button icon', () => {
    cy.mount(<ThemeSwitcher mode={'dark'} />)
    cy.get('[data-cy=darkModeIcon]')

    cy.mount(<ThemeSwitcher mode={'light'} />)
    cy.get('[data-cy=lightModeIcon]')
  })
})
