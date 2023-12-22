import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask, editTask } from "../redux/slice/todo-slice";
import PropTypes from 'prop-types';

function Modal({ setIsOpen, activity, data }) {
  const dispatch = useDispatch();
  const [input, setInput] = useState(data ? data.task : '');

  return (
    <div>
      {/* unfinished styling */}
      <div className="fixed z-10 left-0 top-0 h-full w-full">
        <div className="flex items-center justify-center">
          <input type="text" className="h-11 w-1/2 text-sm pl-4 rounded-lg shadow-[4px_4px_8px_0px_rgba(0,0,0,0.10)]" value={input} onChange={(e) => setInput(e.target.value)} />
          <button className="bg-orange-400 py-3 px-6 ml-5 rounded-lg text-sm shadow-[4px_4px_8px_0px_rgba(0,0,0,0.10)]" onClick={() => {
            activity === 'Add' ? dispatch(addTask(input)) : dispatch(editTask(data.id, input));
            setIsOpen(false);
          }}>{activity}</button>
        </div>

        <div className="h-screen w-screen bg-black bg-opacity-50" onClick={() => setIsOpen(false)}></div>
      </div>
    </div>
  );
}

Modal.propTypes = {
  setIsOpen: PropTypes.func,
  activity: PropTypes.string,
  data: PropTypes.object
}

export default Modal;