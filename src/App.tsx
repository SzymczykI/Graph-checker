import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Imput from "./components/Input";
import Result from "./components/Result";
import { createAdjListFromInput } from "./utils/graph";
import { recreatePaths, howManyNodes } from "./utils/helpers";
import { isBipartite } from "./utils/isBipartite";

const App = () => {
  const [paths, setPaths] = useState("");
  const [resultOpen, setResultOpen] = useState(false);
  const [result, setResult] = useState(false);
  const [connected, setConnected] = useState(true);

  useEffect(() => {
    const checkGraph = () => {
      const pathsArray = paths
        .replaceAll(/\n/g, ",")
        .replaceAll(/\s/g, "")
        .split(/[,]|\n/);

      try {
        const adjList = createAdjListFromInput(
          recreatePaths,
          howManyNodes,
          pathsArray
        );
        if (adjList === false) {
          setConnected(false);
          setResultOpen(true);
          setResult(false);
          return;
        }
        if (adjList?.length === 0 || paths.length === 0) {
          setResultOpen(false);
          return;
        }
        if (adjList !== undefined) {
          setResult(isBipartite(adjList));
          setConnected(true);
          setResultOpen(true);
        }
      } catch (error) {
        setResultOpen(false);
      }
    };
    checkGraph();
  }, [paths]);

  return (
    <div className="App">
      <Header />
      <Imput setPaths={setPaths} />
      {resultOpen && (
        <Result paths={paths} connected={connected} result={result} />
      )}
    </div>
  );
};

export default App;
