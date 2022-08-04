import { useState } from "react";
import "./App.css";
import Graph from "./components/Graph";
import Imput from "./components/Input";

const App = () => {
  const [paths, setPaths] = useState("");
  // const [adj, setAdj] = useState([])
  let nodes: { id: string; label: string }[] = [];
  console.log("_____________")
  const pathsArray = paths
    .replaceAll(/\n/g, ",")
    .replaceAll(/\s/g, "")
    .split(/[,]|\n/);

  // const createGraph = (source: number, dest: number) => {
  //   let adjList: number[][] = [];
  //   const addVertex = (v: number) => {
  //     if (!adjList[v]) {
  //       adjList[v] = [];
  //     }
  //   };
  //   if (!adjList[source]) {
  //     addVertex(source);
  //   }
  // };
  let edges: number;
  let adjList: any[] = [];
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
    edges++;
  };

  const printGraph = () => {
    for (let i = 0; i < vertices; ++i) {
      let txt = "";
      txt += i + ": ";
      for (let j = 0; j < vertices; ++j) {
        if (adjList[i][j] !== undefined) txt += adjList[i][j] + " ";
      }
      console.log(txt);
    }
  };

  const mygraph = () => {
    for (let i = 0; i < vertices; ++i) {
      for (let j = 0; j < vertices; ++j) {
      return adjList[i][j]
  }}}
  console.log("mygraph", mygraph())

  Graph(5);
  newEdge(0, 1);
  newEdge(0, 2);
  newEdge(2, 4);
  newEdge(2, 3);
  newEdge(3, 4);
  console.log("print")
  printGraph();
  console.log("adj list", adjList)

  const graph = [
    [1, 3],
    [0, 2],
    [1, 3],
    [0, 2],
  ];

  const isBipartite = (graph: number[][]) => {
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

  console.log("first func", isBipartite(adjList));

  const isBipartite2 = (graph: number[][]) => {
    const n = graph.length;
    console.log("n = ", n);
    const color = Array(n).fill(0);
    console.log("color = ", color);

    for (let i = 0; i < n; i++) {
      console.log("color i ", color[i]);
      if (color[i]) continue;
      const queue = [i];
      color[i] = 1;

      while (queue.length) {
        const curr = queue.shift();
        console.log(curr);
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

  console.log("new func", isBipartite2(adjList));
  // console.log(nodes);
  // pathsArray.map((path) => {
  //   const splitedPath = path.split(/[-]/);

  //   nodes.length === 0
  //     ? nodes.push(
  //         {
  //           id: splitedPath[0],
  //           label: splitedPath[0],
  //         },
  //         {
  //           id: splitedPath[1],
  //           label: splitedPath[1],
  //         }
  //       )
  //     : nodes.map((node) => {
  //         if (node.id === splitedPath[0]) {
  //           nodes.push({
  //             id: splitedPath[0],
  //             label: splitedPath[0],
  //           });
  //         }
  //         if (node.id === splitedPath[1]) {
  //           nodes.push({
  //             id: splitedPath[1],
  //             label: splitedPath[1],
  //           });
  //         }
  //       });
  // });

  // console.log(pathsArray);
  // console.log("nodes:", nodes);

  return (
    <div className="App">
      <Imput setPaths={setPaths} />
      {/* <Graph /> */}
    </div>
  );
};

export default App;
