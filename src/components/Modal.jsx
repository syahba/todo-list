import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/slice/todo-slice";

function Modal({ setIsOpen, activity }) {
  const dispatch = useDispatch();
  const [input, setInput] = useState('');

  return (
    <div>
      <div className="modal">
        <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
        <button onClick={() => {
          dispatch(addTask(input));
          setIsOpen(false);
        }}>{activity}</button>
      </div>
      <div className="bg-dark" onClick={() => setIsOpen(false)}></div>
    </div>
  );
}

export default Modal;