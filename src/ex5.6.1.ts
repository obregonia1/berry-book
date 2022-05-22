class User {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    if (name === '') {
      throw new Error('name must not be empty');
    }
    this.name = name;
    this.age = age;
  }

  getMessage(message: string): string {
    return `${this.name} (${this.age}) ${message}`;
  }
}

const uhyo = new User('uhyo', 26);
console.log(uhyo.getMessage('こんにちは'));
