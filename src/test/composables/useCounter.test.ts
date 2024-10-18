import { useCounter } from '@/composables/useCounter';

describe('UseCounter', () => {
  test('Inicializes counter with provided intial value', () => {
    const initialValue = 10;
    const { counter, squareCounter } = useCounter(initialValue);

    expect(counter.value).toBe(initialValue);
    expect(squareCounter.value).toBe(initialValue * initialValue);
  });

  test('Inicializes counter with provided default values', () => {
    const { counter, squareCounter } = useCounter();

    expect(counter.value).toBe(5);
    expect(squareCounter.value).toBe(25);
  });

  test('increments counter correctly', () => {
    const { counter, squareCounter } = useCounter();

    counter.value++;

    expect(counter.value).toBe(6)
    expect(squareCounter.value).toBe(36)


  });
});
