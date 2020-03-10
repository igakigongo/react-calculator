import operate from '../logic/operate';

describe('operate', () => {
  it('throws an error for an unsupported operation', () => {
    expect(() => operate(1, 1, null)).toThrow(/Not supported operation/);
  });
});
