import { faSquareCheck, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function CompletedTask({ props: { data, deleteBtn, checkBtn } }) {
  return (
    <div className="task-box completed">
      <div className="task-item">
        <FontAwesomeIcon icon={faSquareCheck} className="icon-left"  style={{ color: "#ba5112", }} onClick={checkBtn} />
        <p className="task-desc">{data.task}</p>
      </div>

      <FontAwesomeIcon icon={faTrashCan} style={{ color: "#ba5112" }} onClick={deleteBtn} />
    </div>
  );
}

export default CompletedTask;