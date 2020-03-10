import Big from 'big-js';
import Symbols from '../symbols';
import calculate from '../logic/calculate';

describe.only('calculate', () => {
  it('changes sign with (+/-) buttonName', () => {
    const buttonName = '+/-';
    const result = calculate({ total: 15 }, buttonName);
    let { total } = result;
    expect(+total).toEqual(-15);
    ({ total } = calculate({ total }, buttonName));
    expect(+total).toEqual(15);
  });

  it('adds', () => {
    const { total } = calculate({ operation: Symbols.ADDITION, total: '2 + 3'}, '=');
    expect(+total).toEqual(5);
  });

  it('divides', () => {
    const { total } = calculate({ operation: Symbols.DIVISION, total: '5 ÷ 7'}, '=');
    const fixedResult = +(Big(total).toFixed(5));
    expect(fixedResult).toBeCloseTo(0.71428);
  });

  it('multiplies', () => {
    const { total } = calculate({ operation: Symbols.MULTIPLICATION, total: '11 x 13'}, '=');
    expect(+total).toEqual(143);
  });

  it('computes the percentage', () => {
    const { total } = calculate({ operation: Symbols.PERCENTAGE, total: 17}, Symbols.PERCENTAGE);
    expect(+total).toBeCloseTo(0.17);
  });

  it('subtracts', () => {
    const { total } = calculate({ operation: Symbols.SUBTRACTION, total: '19 - 23'}, '=');
    expect(+total).toEqual(-4);
  });

  it('resets or cleans up', () => {
    const {total} = calculate({ total: '98' }, 'AC');
    expect(+total).toEqual(0);
  });

  it('concatenates input', () => {
    let obj = { total: null };
    for(let i = 0; i < 3; i++){
      obj = calculate(obj, '1');
    }
    const { total } = obj;
    expect(+total).toEqual(111);
  });

  it('concatenates input with symbols', () => {
    let obj = { total: null };
    obj = calculate(obj, '1');
    obj = calculate(obj, Symbols.ADDITION);
    const { total } = obj;
    expect(total).toEqual('1 + ');
  });
});