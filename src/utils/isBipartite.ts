export const isBipartite = (graph: Array<number>[]) => {
  let result = true;
  const n = graph.length;
  let color = Array(n).fill(true);
  let visited = Array(n);
  const traverse = (graph: number[][], v: number) => {
    if (!result) return;
    visited[v] = true;
    for (let w of graph[v]) {
      if (!visited[w]) {
        color[w] = !color[v];
        traverse(graph, w);
      } else {
        if (color[w] === color[v]) {
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

export const isBipartite2 = (graph: Array<number>[]) => {
  const n = graph.length;
  const color = Array(n).fill(0);

  for (let i = 0; i < n; i++) {
    if (color[i]) continue;
    const queue = [i];
    color[i] = 1;

    while (queue.length) {
      const curr = queue.shift();
      if (curr !== undefined) {
        for (let next of graph[curr]) {
          if (color[next] === color[curr]) return false;
          if (!color[next]) {
            color[next] = color[curr] === 1 ? 2 : 1;
            queue.push(next);
          }
        }
      }
    }
  }
  return true;
};
