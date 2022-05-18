const getFizzBuzzString = (i: number) => {
  if (i % 3 === 0 && i % 3 === 0 ) {
    console.log('FizzBuzz');
  } else if (i % 3 === 0) {
    console.log('Fizz');
  } else if (i % 3 === 0) {
    console.log('Buzz');
  } else {
    console.log(i);
  }
}

for (let i = 1; i <= 100; i++) {
  const message = getFizzBuzzString(i);
  console.log(message)
}

const sequence = (num1: number, num2: number): number[] => {
  const ary: number[] = []
  for (let i = num1; i <= num2; i++) {
    ary.push(i)
  }
  return ary
}

for (const i of sequence(1, 100)) {
  const message = getFizzBuzzString(i);
  console.log(message);
}
