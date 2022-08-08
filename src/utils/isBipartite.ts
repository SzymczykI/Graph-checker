export const isBipartite = (graph: Array<number>[]) => {
  let len = graph.length;
  let stack = [];
  let vis = new Array(len);
  for (let i = 0; i < len; i++) {
    if (vis[i]) continue;
    vis[i] = 1;
    stack.push(i);
    while (stack.length) {
      let curr;
      curr = stack.pop();
      let connectedNodes;
      if (curr === undefined) return false;
      connectedNodes = graph[curr];
      for (let j = 0; j < connectedNodes.length; j++) {
        let next;
        next = connectedNodes[j];
        if (!vis[next]) {
          vis[next] = vis[curr] ^ 3;
          stack.push(next);
        } else if (vis[curr] === vis[next]) return false;
      }
    }
  }
  return true;
};
