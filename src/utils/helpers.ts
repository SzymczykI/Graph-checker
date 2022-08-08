export const recreatePaths = (pathsArr: string[]) => {
  let newArr: Array<number>[] = [];
  pathsArr.forEach((n) => {
    const a = n.split(/[-]/);
    const b = a.map((c) => c.charCodeAt(0) - 97);
    for (let i = 0; i < a.length - 1; i++) {
      newArr.push([b[i], b[i + 1]]);
    }
  });
  return newArr;
};

const countDistinct = (arr: number[], n: number) => {
  arr.sort((a, b) => {
    return a - b;
  });

  let res = 0;
  for (let i = 0; i < n; i++) {
    while (i < n - 1 && arr[i] === arr[i + 1]) i++;
    res++;
  }
  return res;
};

export const howManyNodes = (arr: string[]) => {
  let nodesArr: number[] = [];
  const newArr = recreatePaths(arr);
  newArr.forEach((a) => nodesArr.push(a[0]) && nodesArr.push(a[1]));

  const nodes = countDistinct(nodesArr, nodesArr.length);
  return nodes;
};
