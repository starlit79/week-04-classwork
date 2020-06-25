const expect = require('chai').expect
const deliverStormTroopersEscapeScene = require('../index')

describe('StarWarsScene', function () {
  it('returns scene sounds for any rebels escaping', function () {
    // Given
    const rebels = [
      { name: 'Luke Skywalker' },
      { name: 'Leia Organa' },
      { name: 'Han Solo' }
    ]

    // When the rebels are spotted, we can expect shouting about each one
    const results = deliverStormTroopersEscapeScene(rebels)

    // Then we expect 'Look! Rebel scum!' to have been called out 3 times
    expect(results).to.include.members([
      'Look! Rebel scum!',
      'Look! Rebel scum!',
      'Look! Rebel scum!'
    ])

    // And we expect 'pew' to alway be included 4 times
    expect(results).to.include.members([
      'pew',
      'pew',
      'pew',
      'pew'
    ])
  })

  it('returns shots at nothing when there are no rebels', function () {
    // Given no rebels
    const rebels = []

    // When the lines from the scene are made
    const results = deliverStormTroopersEscapeScene(rebels)

    // Then when there were no rebels, the code should not be returning shouts about any Rebels
    expect(results).not.to.include('Look! Rebel scum!')

    // And we can always expect 4 'pew' shots at nothing
    expect(results).to.include.members(['pew', 'pew', 'pew', 'pew'])
  })
})
