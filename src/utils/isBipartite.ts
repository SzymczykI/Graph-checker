export const isBipartite = (graph: Array<number>[]) => {
  let result = true;
  const n = graph.length;
  let color = Array(n).fill(true);
  let visited = Array(n);
  const traverse = (graph: number[][], v: number) => {
    if (!result) return;
    visited[v] = true;
    for (let i of graph[v]) {
      if (!visited[i]) {
        color[i] = !color[v];
        traverse(graph, i);
      } else {
        if (color[i] === color[v]) {
          result = false;
        }
      }
    }
  };
  for (let v = 0; v < n; v++) {
    if (!visited[v]) {
      traverse(graph, v);
    }
  }
  return result;
};
