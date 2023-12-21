import { faSquareCheck, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function CompletedTask({ props: { data, deleteBtn, checkBtn } }) {
  return (
    <div className="item completed-task">
      <FontAwesomeIcon icon={faSquareCheck} style={{ color: "#ba5112", }} onClick={checkBtn} />
      <p className="task">{data.task}</p>
      <FontAwesomeIcon icon={faTrashCan} style={{ color: "#edb046" }} onClick={deleteBtn} />
    </div>
  );
}

export default CompletedTask;