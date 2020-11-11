const {expect} = require('chai')
const {db, Customer} = require('../../server/db/models')

describe('Basic Fields: FirstName and userType', () => {
  describe('name', () => {
    it('FirstName is a string', async () => {
      const Elisa = await Customer.create({firstName: 'Elisa'})
      expect(Elisa.firstName).to.equal(
        'Elisa',
        'Was not able to create a user with name Elisa'
      )
    })
  })
})
