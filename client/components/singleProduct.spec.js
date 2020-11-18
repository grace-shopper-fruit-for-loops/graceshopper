/* global describe beforeEach it */

import {expect} from 'chai'
import React from 'react'
import enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import {SingleProduct} from './singleProduct'

const adapter = new Adapter()
enzyme.configure({adapter})

describe('Single Product', () => {
  let singleProduct

  beforeEach(() => {
    singleProduct = shallow(<SingleProduct product={9} />)
  })

  it('renders the product price in a h5', () => {
    expect(singleProduct.find('h5').text()).to.be.equal('Price: $9')
  })
})
