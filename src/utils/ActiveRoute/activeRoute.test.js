'use strict'

import { expect } from 'chai'
import activeRoute from './index'

test('activeRoute should be a function', () => {
  expect(activeRoute).to.be.a('function')
})

test("activeRoute('/path') should return 'path'", () => {
  expect(activeRoute('/path')).to.be.equal('path')
})

test("activeRoute('path') should return 'path'", () => {
  expect(activeRoute('path')).to.be.equal('path')
})

test("activeRoute('/path/child') should return 'path'", () => {
  expect(activeRoute('/path/child')).to.be.equal('path')
})

test("activeRoute('/path/child/2') should return 'path'", () => {
  expect(activeRoute('/path/child/2')).to.be.equal('path')
})

test('activeRoute(2) should throw an error', () => {
  const result = 'route should be a string'

  try {
    activeRoute(2)
  } catch (e) {
    expect(e.message).to.be.deep.equal(result)
  }
})

test("activeRoute() should return ('/')", () => {
  expect(activeRoute()).to.be.equal('/')
})
