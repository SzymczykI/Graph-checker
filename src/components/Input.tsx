import { useRef } from "react";

interface InputPropsComponentType {
    setPaths : React.Dispatch<React.SetStateAction<string>>;
  }

const Input = ({setPaths} : InputPropsComponentType) => {

  let inputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    const currentPaths = inputRef.current!.value;
    setPaths(currentPaths);
    inputRef.current!.value = '';;
  };

  return (
    <form className="form">
      <h3>
        Please, enter a graph in a textarea by typing some paths (a word is a
        node, a dash an edge and a new line or a comma a separation between
        paths).
      </h3>
      <input
        className="form__input"
        type="text"
        placeholder="a-b-c"
        ref={inputRef}
      />
      <button
        className="form__button"
        type="submit"
        onClick={submitHandler}
      >
        Save
      </button>
    </form>
  );
};

export default Input;
