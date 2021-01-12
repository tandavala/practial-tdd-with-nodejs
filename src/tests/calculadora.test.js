/* eslint-disable no-undef */
const chai = require('chai');
const calculadora = require('../lib/calculadora');

const { assert } = chai;

describe('TDD basic math operation', () => {
  it('should add two numbers', () => {
    assert.equal(calculadora.add(1, 1), 2);
  });
  it('should subtract two numbers', () => {
    assert.equal(calculadora.subtract(4, 2), 2);
  });
  it('should multiply two numbers', () => {
    assert.equal(calculadora.multiply(2, 1), 2);
  });
  it('should divide two numbers', () => {
    assert.equal(calculadora.divide(4, 2), 2);
  });
});
