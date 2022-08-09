export const createAdjListFromInput = (
  recreatePaths: (arg: string[]) => Array<number>[],
  howManyNodes: (arg: string[]) => number,
  arr: string[]
) => {
  let adjList: number[][] = [];
  let vertices: number;
  let edges: number = 0;

  const Graph = (v: number) => {
    vertices = v;
    for (let i = 0; i < vertices; ++i) {
      adjList[i] = [];
    }
  };

  const newEdge = (v: number, w: number) => {
    adjList[v].push(w);
    adjList[w].push(v);
    edges++;
  };

  const checkIfConnected = (v: number, e: number) => {
    if (e !== v - 1 && e !== v) return false;
    return;
  };

  const nodes = howManyNodes(arr);
  const arrayWithPaths = recreatePaths(arr);

  try {
    Graph(nodes);
    arrayWithPaths.forEach((e) => {
      newEdge(e[0], e[1]);
    });
    const connected = checkIfConnected(nodes, edges);

    if (connected === false) return connected;
    else return adjList;
  } catch (error) {
    console.error();
  }
};
