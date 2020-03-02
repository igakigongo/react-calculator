import Symbols from '../symbols';
import operate from './operate';

const calculate = (calculator, buttonName) => {
  const { next, total } = calculator;

  switch (buttonName) {
    case '+/-':
      return {
        ...calculator,
        next: next * -1,
        total: total * -1,
      };
    case Symbols.ADDITION:
    case Symbols.DIVISION:
    case Symbols.MULTIPLICATION:
    case Symbols.PERCENTAGE:
    case Symbols.SUBTRACTION:
      return {
        ...calculator,
        total: +operate(next, total, buttonName),
      };

    default:
      return {
        ...calculator,
      };
  }
};

export default calculate;
