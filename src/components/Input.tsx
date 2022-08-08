import { useRef } from "react";
import "./Input.css";

interface InputPropsComponentType {
  setPaths: React.Dispatch<React.SetStateAction<string>>;
}

const Input = ({ setPaths }: InputPropsComponentType) => {
  let inputRef = useRef<HTMLTextAreaElement>(null);

  const buttonHandler = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const currentPaths = inputRef.current!.value;
    setPaths(currentPaths);
    inputRef.current!.value = "";
  };

  return (
    <div className="input__container">
      <form className="input__form">
        <label htmlFor="story" className="input__form-label">
          Please, enter a graph in a textarea by typing some paths (a letter is
          a node, a dash an edge and a new line or a comma a separation between
          paths).
        </label>
        <textarea
          className="input__form-textarea"
          placeholder="a-b-c or a-b, b-c"
          ref={inputRef}
          id="story"
          rows={5}
          cols={33}
        />
        <button className="input__form-btn" type="button" onClick={buttonHandler}>
          Save
        </button>
      </form>
    </div>
  );
};

export default Input;
