import { useMemo } from 'react';

const HookUseMemo = ({ number }) => {
  const computeFactorial = (n) => {
    console.log(number);
    if (n <= 0) return 1;
    return n * computeFactorial(n - 1);
  };

  // Memorizar o resultado do cálculo
  const factorial = useMemo(() => computeFactorial(number), [number]);

  return (
    <div>
      <p>
        Fatorial de {number} é: {factorial}
      </p>
    </div>
  );
};

export default HookUseMemo;
