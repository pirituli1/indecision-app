// sum.js
export function sum(a: number, b: number) {
  return a + b;
}

export const addArray = (arr: number[]): number => {
  return arr.reduce((acc = 0, curr) => acc + curr, 0);
};
