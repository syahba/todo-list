import { faSquareCheck } from "@fortawesome/free-regular-svg-icons";
import { faPenToSquare, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import Modal from "./Modal";

function ActiveTask({ props: { data, deleteBtn, checkBtn } }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className="item active-task">
        <FontAwesomeIcon icon={faSquareCheck} style={{ color: "#edb046" }} onClick={checkBtn} />
        <p className="task">{data.task}</p>
        <FontAwesomeIcon icon={faPenToSquare} style={{ color: "#edb046" }} onClick={() => setIsOpen(true)} />
        <FontAwesomeIcon icon={faTrashCan} style={{ color: "#edb046" }} onClick={deleteBtn} />
      </div>

      
      {isOpen && <Modal setIsOpen={setIsOpen} activity={'Edit'} id={data.id}></Modal>}
    </div>
  );
}

export default ActiveTask;