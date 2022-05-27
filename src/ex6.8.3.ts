type Option<T> = {
  tag: 'some';
  value: T;
} | {
  tag: 'none';
};

function isSome<T>(obj: Option<T>): obj is { tag: 'some'; value: T } {
  return obj.tag === 'some';
}

function optionLog(obj: Option<number>): void {
  if (isSome(obj)) {
    console.log(obj.value)
  }
}

const four: Option<number> = {
  tag: 'some',
  value: 4
}

const nothing: Option<number> = {
  tag: 'none',
}

optionLog(four);
optionLog(nothing);
