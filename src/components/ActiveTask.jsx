import { faSquareCheck } from "@fortawesome/free-regular-svg-icons";
import { faPenToSquare, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import Modal from "./Modal";
import '../styles/Task.css';

function ActiveTask({ props: { data, deleteBtn, checkBtn } }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className="task-box active" >
        <div className="task-item">
          <FontAwesomeIcon icon={faSquareCheck} className="icon-left" style={{ color: "#edb046" }} onClick={checkBtn} />
          <p className="task-desc">{data.task}</p>
        </div>

        <div className="task-action">
          <FontAwesomeIcon icon={faPenToSquare} style={{ color: "#edb046" }} onClick={() => setIsOpen(true)} />
          <FontAwesomeIcon icon={faTrashCan} className="icon-right" style={{ color: "#edb046" }} onClick={deleteBtn} />
        </div>
      </div>

      {isOpen && <Modal setIsOpen={setIsOpen} activity={'Edit'} data={data}></Modal>}
    </div>
  );
}

export default ActiveTask;