import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Modal from "./Modal";
import { useState } from "react";
import '../styles/ButtonAdd.css';

function ButtonAdd() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button className="btn-add" onClick={() => setIsOpen(true)}>
        Add Task
        <FontAwesomeIcon icon={faCirclePlus} style={{ color: "#ba5112", paddingLeft: '1em' }} className="fa-xl" />
      </button>

      {isOpen && <Modal setIsOpen={setIsOpen} activity={'Add'}></Modal>}
    </div>
  );
}

export default ButtonAdd;