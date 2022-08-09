export const recreatePaths = (pathsArr: string[]) => {
  let newArr: Array<number>[] = [];
  pathsArr.forEach((n) => {
    const removedDash = n.split(/[-]/);
    const lettersToNums = removedDash.map((c) => c.toLowerCase().charCodeAt(0) - 97);
    if (lettersToNums.length === 1) throw new Error("graph is not connected");
    for (let i = 0; i < removedDash.length - 1; i++) {
      newArr.push([lettersToNums[i], lettersToNums[i + 1]]);
    }
  });
  return newArr;
};

const countDistinct = (arr: number[], n: number) => {
  arr.sort((a, b) => a - b);
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
