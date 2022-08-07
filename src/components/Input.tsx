import { useRef } from "react";

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
    <form className="form">
      <label htmlFor="story">
        Please, enter a graph in a textarea by typing some paths (a word is a
        node, a dash an edge and a new line or a comma a separation between
        paths).
      </label>
      <textarea
        className="form__input"
        placeholder="a-b"
        ref={inputRef}
        id="story"
        rows={5}
        cols={33}
      />
      <button className="form__button" type="button" onClick={buttonHandler}>
        Save
      </button>
    </form>
  );
};

export default Input;
