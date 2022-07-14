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

  console.log(nodes);
  pathsArray.map((path) => {
    const splitedPath = path.split(/[-]/);

    nodes.length === 0
      ? nodes.push(
          {
            id: splitedPath[0],
            label: splitedPath[0],
          },
          {
            id: splitedPath[1],
            label: splitedPath[1],
          }
        )
      : nodes.map((node) => {
          if (node.id === splitedPath[0]) {
            nodes.push({
              id: splitedPath[0],
              label: splitedPath[0],
            });
          }
          if (node.id === splitedPath[1]) {
            nodes.push({
              id: splitedPath[1],
              label: splitedPath[1],
            });
          }
        });
  });

  console.log(pathsArray);
  console.log("nodes:", nodes);

  return (
    <div className="App">
      {/* <Imput setPaths={setPaths} /> */}
      <Graph />
    </div>
  );
};

export default App;
