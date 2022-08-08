export const createAdjListFromInput = (
  recreatePaths: (arg: string[]) => Array<number>[],
  howManyNodes: (arg: string[]) => number,
  arr: string[]
) => {
  let adjList: Array<number>[] = [];
  let vertices: number;

  const Graph = (v: number) => {
    vertices = v;
    for (let i = 0; i < vertices; ++i) {
      adjList[i] = [];
    }
  };

  const newEdge = (v: number, w: number) => {
    adjList[v].push(w);
    adjList[w].push(v);
  };

  const nodes = howManyNodes(arr);
  const arrayWithPaths = recreatePaths(arr);
  try {
    Graph(nodes);
    arrayWithPaths.forEach((e) => {
      if (e !== undefined) newEdge(e[0], e[1]);
    });

    return adjList;
  } catch (error) {
    console.error("error");
  }
};
