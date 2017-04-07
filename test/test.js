'use strict';

var expect = require('chai').expect
var updateDOM = require('../index.js')
var $ = require('jquery')

describe('update-DOM', () => {
  it('should be a thing', () => {
    expect(updateDOM).to.exist;
  })

  it('should', () => {

    updateDOM('test', 'this is a test')
    expect($('.test').innerText).to.equal('this is a test')
  })
})
