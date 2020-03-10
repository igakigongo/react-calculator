import Symbols from '../symbols';
import operate from './operate';

const calculate = (calculator, buttonName) => {
  const { next, operation, total } = calculator;

  switch (buttonName) {
    case 'AC': {
      return {
        ...calculator,
        total: '0',
      };
    }
    case '+/-': {
      return {
        ...calculator,
        next: next * -1,
        total: `${(+total) * -1}`,
      };
    }

    case Symbols.PERCENTAGE: {
      return {
        ...calculator,
        total: `${operate(total, total, buttonName)}`,
      };
    }

    case Symbols.ADDITION:
    case Symbols.DIVISION:
    case Symbols.MULTIPLICATION:
    case Symbols.SUBTRACTION: {
      return {
        ...calculator,
        operation: buttonName,
        total: `${total} ${buttonName} `,
      };
    }

    case '=': {
      const [operand1, operand2] = total.split(operation).map(x => x.trim());
      return {
        ...calculator,
        operation: null,
        total: `${operate(operand1, operand2, operation)}`,
      };
    }

    default: {
      let value;
      if (total) {
        value = total === '0' ? buttonName : `${total}${buttonName}`;
      } else {
        value = buttonName;
      }

      return {
        ...calculator,
        total: value,
      };
    }
  }
};

export default calculate;
