'use strict'

import { expect } from 'chai'
import activeRoute from './index'

test('activeRoute should be a function', () => {
  expect(activeRoute).to.be.a('function')
})

test("activeRoute('/path') should be a 'path'", () => {
  expect(activeRoute('/path')).to.be.equal('path')
})

test("activeRoute('path') should be a 'path'", () => {
  expect(activeRoute('path')).to.be.equal('path')
})

test("activeRoute('/path/child') should be a 'path'", () => {
  expect(activeRoute('/path/child')).to.be.equal('path')
})

test("activeRoute('/path/child/2') should be a 'path'", () => {
  expect(activeRoute('/path/child/2')).to.be.equal('path')
})
