/* eslint-disable no-undef */
const chai = require('chai');
const calculadora = require('../lib/calculadora');

const { assert } = chai;

describe('TDD basic math operation', () => {
  it('should add two numbers', () => {
    assert.equal(calculadora.add(5, 5), 10);
  });
});
