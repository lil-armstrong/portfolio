import React from 'react'
import BlurOnScroll from './BlurOnScroll'

// beforeEach(() => {
//   // setup a DOM element as a render target
//   cy.mount(<BlurOnScroll />)
// })

// afterEach(() => {
//   // cleanup on exiting
//   //   cy.then(() => unmountComponentAtNode(getContainerEl()))
//   unmount()
// })

describe('BlurOnScrollComponent', () => {
  it('renders', () => {
    // cy.children().should('be.null')
    cy.mount(<BlurOnScroll />).should('exist')
  })

  it('renders the correct children', () => {
    cy.mount(
      <BlurOnScroll>
        <div data-cy="test_child" />
      </BlurOnScroll>
    )
      .get("[data-cy='test_child']")
      .should('exist')
  })

  it('Updates scroll distance and blur ratio', () => {
    const containerHeight = 5000
    const expectedScrollDistance = 4000
    const expectedBlurValue = (expectedScrollDistance / containerHeight) * 100; 
    const container = cy.mount(
      <BlurOnScroll y={0}>
        <div
          data-cy="scrollable-container"
          style={{
            minHeight: containerHeight,
          }}
        ></div>
      </BlurOnScroll>
    )

    container.get("[data-cy='test-value']").should('exist').contains('0/0')

    container.get("[data-cy='scrollable-container']").should('exist')

    cy.scrollTo(0, expectedScrollDistance, {
      easing: 'linear',
      duration: 2000
    }).then(() => {
      container
        .get("[data-cy='test-value']")
        .should('exist')
        .contains(`${expectedScrollDistance}/${expectedBlurValue}`)
    })

    cy.scrollTo(0, 0, {
      easing: 'linear',
      duration: 2000,
    }).then(() => {
      container
        .get("[data-cy='test-value']")
        .should('exist')
        .contains(`${0}/${0}`)
    })
  })
})
