function map<T, U>(array: T[], callback: (num: T) => U): U[] {
  const res: U[] = [];
  for (const i of array) {
    res.push(callback(i))
  }
  return res;
}

const data = [1, -3, -2, 8, 0, -1];
const result: boolean[] = map(data, (x) => x >= 0);
console.log(result);
