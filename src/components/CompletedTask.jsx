import { faSquareCheck, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function CompletedTask({ data }) {
  return (
    <div className="item completed-task">
      <FontAwesomeIcon icon={faSquareCheck} style={{ color: "#ba5112", }} />
      <p className="task">{data.task}</p>
      <FontAwesomeIcon icon={faTrashCan} style={{ color: "#edb046" }} />
    </div>
  );
}

export default CompletedTask;