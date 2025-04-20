import { cy, describe, it } from 'local-cypress'
import BlurOnScroll from './BlurOnScroll'

describe('BlurOnScrollComponent', () => {
  it('renders', () => {
    cy.mount(<BlurOnScroll />)
  })

  it('renders the correct children', () => {
    cy.mount(
      <BlurOnScroll>
        <div data-cy="test_child" />
      </BlurOnScroll>
    ).get("[data-cy='test_child']")
  })

  it('Updates scroll distance and blur ratio', () => {
    const containerHeight = 5000
    const expectedScrollDistance = 4000
    const expectedBlurValue = (expectedScrollDistance / containerHeight) * 100
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

    container.get("[data-cy='test-value']").as('testValue').contains('0/0')

    container.get("[data-cy='scrollable-container']").as('scrollable')

    cy.scrollTo(0, expectedScrollDistance, {
      easing: 'linear',
      duration: 2000,
    }).then(() => {
      container
        .get('@testValue')
        .contains(`${expectedScrollDistance}/${expectedBlurValue}`)
    })

    cy.scrollTo(0, 0, {
      easing: 'linear',
      duration: 2000,
    }).then(() => {
      container.get('@testValue').contains(`${0}/${0}`)
    })
  })
})
