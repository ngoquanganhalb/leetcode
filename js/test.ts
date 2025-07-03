function mapFunc(func: (x: any) => void, arr: (string | number)[]): any[] {
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    res.push(func(arr[i]));
  }
  return res;
}

const lengthArr = [1, 4, 3, 6];
let areaArr = lengthArr.map((length) => length*length);
console.log(areaArr); //[1, 16, 9, 36]

console.log(mapFunc((i) => i * i, lengthArr));
