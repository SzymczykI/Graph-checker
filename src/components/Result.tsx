import './Result.css'

interface ResultPropsComponentType {
  paths: string;
  result: boolean;
  setResultOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Result = ({ paths, result, setResultOpen }: ResultPropsComponentType) => {
  return (
    <div className="result__container">
      <h2> Result:</h2>
      <h3>graph {paths}</h3>
      <div>
        {result ? (
          <h3 className="result-true">is red-blue colorable</h3>
        ) : (
          <h3 className="result-false">is not red-blue colorable</h3>
        )}
      </div>
    </div>
  );
};

export default Result;
