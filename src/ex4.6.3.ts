function map(array: number[], callback: (num: number) => number): number[] {
  const res: number[] = [];
  for (const i of array) {
    res.push(callback(i))
  }
  return res;
}

const data = [1, 1, 2, 3, 5, 8, 13];
const result = map(data, (x) => x * 10);
console.log(result);
