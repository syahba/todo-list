import { faSquareCheck } from "@fortawesome/free-regular-svg-icons";
import { faPenToSquare, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ActiveTask({ data, deleteBtn, checkBtn }) {
  return (
    <div className="item active-task">
      <FontAwesomeIcon icon={faSquareCheck} style={{ color: "#edb046" }} onClick={checkBtn} />
      <p className="task">{data}</p>
      <FontAwesomeIcon icon={faPenToSquare} style={{ color: "#edb046" }} />
      <FontAwesomeIcon icon={faTrashCan} style={{ color: "#edb046" }} onClick={deleteBtn} />
    </div>
  );
}

export default ActiveTask;