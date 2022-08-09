export const isBipartite = (graph: number[][]) => {
  let color: number[] = [];
  for (let i = 0; i < graph.length; i++) {
    color[i] = -1;
  }
  for (let i = 0; i < graph.length; i++) {
    if (color[i] === -1) {
      let stack = [];
      stack.push(i);
      color[i] = 0;
      let node;
      while (stack.length) {
        node = stack.pop()!;
        for (const neighbor of graph[node]) {
          if (color[neighbor] === -1) {
            stack.push(neighbor);
            color[neighbor] = 1 - color[node];
          } else if (color[neighbor] === color[node]) {
            return false;
          }
        }
      }
    }
  }
  return true;
};
