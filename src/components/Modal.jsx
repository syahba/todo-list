import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask, editTask } from "../redux/slice/todo-slice";

function Modal({ setIsOpen, activity, id }) {
  const dispatch = useDispatch();
  const [input, setInput] = useState('');

  return (
    <div>
      <div className="modal">
        <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
        <button onClick={() => {
          activity === 'Add' ? dispatch(addTask(input)) : dispatch(editTask(id, input));
          setIsOpen(false);
        }}>{activity}</button>
      </div>
      <div className="bg-dark" onClick={() => setIsOpen(false)}></div>
    </div>
  );
}

export default Modal;