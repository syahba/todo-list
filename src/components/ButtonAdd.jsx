import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Modal from "./Modal";
import { useState } from "react";

function ButtonAdd() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button className="task-button" onClick={() => setIsOpen(true)}>
        Add Task
        <FontAwesomeIcon icon={faCirclePlus} style={{ color: "#ba5112", paddingLeft: '2em' }} />
      </button>

      {isOpen && <Modal setIsOpen={setIsOpen}></Modal>}
    </div>
  );
}

export default ButtonAdd;