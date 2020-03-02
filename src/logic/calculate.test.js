import Symbols from '../symbols';
import calculate from './calculate';

describe('calculate', () => {
  it('should not mutate state if buttonName is not know', () => {
    const result = calculate({ next: 5, total: 15 }, null);
    const { next, total } = result;
    expect([next, total]).toEqual([5, 15]);
  })

  it('changes sign with (+/-) buttonName', () => {
    const buttonName = '+/-';
    const result = calculate({ next: 5, total: 15 }, buttonName);
    let { next, total } = result;
    expect([next, total]).toEqual([-5, -15]);
    ({ next, total } = calculate(result, buttonName));
    expect([next, total]).toEqual([5, 15]);
  });

  it('adds', () => {
    const { total } = calculate({ next: 2, total: 3}, Symbols.ADDITION);
    expect(total).toEqual(5);
  });

  it('divides', () => {
    const { total } = calculate({ next: 5, total: 7}, Symbols.DIVISION);
    const fixedResult = +(total.toFixed(5));
    expect(fixedResult).toBeCloseTo(0.71428);
  });

  it('multiplies', () => {
    const { total } = calculate({ next: 11, total: 13}, Symbols.MULTIPLICATION);
    expect(+total).toEqual(143);
  });

  it('computes the percentage', () => {
    const { total } = calculate({ next: 17, total: 17}, Symbols.PERCENTAGE);
    expect(+total).toBeCloseTo(0.17);
  });

  it('subtracts', () => {
    const { total } = calculate({ next: 19, total: 23}, Symbols.SUBTRACTION);
    expect(+total).toEqual(-4);
  });
});