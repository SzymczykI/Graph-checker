import { useState } from "react";
import "./App.css";
import Graph from "./components/Graph";
import Imput from "./components/Input";

const App = () => {
  const [paths, setPaths] = useState("");
  // const [adj, setAdj] = useState([])
  let nodes: { id: string; label: string }[] = [];

  console.log(paths);
  const pathsArray = paths
    .replaceAll(/\n/g, ",")
    .replaceAll(/\s/g, "")
    .split(/[,]|\n/);


	let V = 4;

	const colorGraph = (G: number[][], color: any[], pos: number, c: number) => {
		if (color[pos] != -1 && color[pos] != c) return false;

		// color this pos as c and
		// all its neighbours as 1-c
		color[pos] = c;
		var ans = true;
		for (var i = 0; i < V; i++) {
		if (G[pos][i] === 1) {
			if (color[i] === -1) colorGraph(G, color, i, 1 - c);

			if (color[i] !== -1 && color[i] !== 1 - c) return false;
		}
		if (!ans) return false;
		}
		return true;
	}

	const isBipartite = (G: number[][]) => {
		let color = new Array(V).fill(0);
		for (let i = 0; i < V; i++) color[i] = -1;

		// start is vertex 0;
		var pos = 0;

		// two colors 1 and 0
		return colorGraph(G, color, pos, 1);
	}

	// Driver Code
	let G = [
		[0, 1, 0, 1],
		[1, 0, 1, 0],
		[0, 1, 0, 1],
		[1, 0, 1, 0],
	];

	if (isBipartite(G)) console.log("Yes");
	else console.log("No");
	

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
      <Graph />
    </div>
  );
};

export default App;
