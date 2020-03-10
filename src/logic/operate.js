import Big from 'big-js';
import Symbols from '../symbols';

const operate = (numberOne, numberTwo, operation) => {
  const [operand1, operand2] = [numberOne, numberTwo].map(x => Big(x));
  switch (operation) {
    case Symbols.ADDITION:
      return operand1.plus(operand2);
    case Symbols.DIVISION:
      return operand1.div(operand2);
    case Symbols.MULTIPLICATION:
      return operand1.times(operand2);
    case Symbols.PERCENTAGE:
      return operand1.div(100);
    case Symbols.SUBTRACTION:
      return operand1.minus(operand2);
    default:
      throw new Error('Not supported operation');
  }
};

export default operate;
