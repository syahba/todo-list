import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask, editTask } from "../redux/slice/todo-slice";
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import '../styles/Modal.css'

function Modal({ setIsOpen, activity, data }) {
  const dispatch = useDispatch();
  const [input, setInput] = useState(data ? data.task : '');

  return (
    <div>
      {/* unfinished styling */}
      <div className="modal">
        <input type="text" className="modal-input" value={input} onChange={(e) => setInput(e.target.value)} />
        <button className="add-btn" onClick={() => {
          activity === 'Add' ? dispatch(addTask(input)) : dispatch(editTask(data.id, input));
          setIsOpen(false);
        }}>{activity}</button>
        <FontAwesomeIcon className="fa-lg close-btn" icon={faXmark} style={{ color: '#fff' }} onClick={() => setIsOpen(false)} />
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