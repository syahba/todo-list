import { faSquareCheck, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function CompletedTask({ data }) {
  return (
    <div className="item">
      {data.map(val => (
        <div className="completed-task" key={val.id}>
          <FontAwesomeIcon icon={faSquareCheck} style={{ color: "#ba5112", }} />
          <p className="task">{val.task}</p>
          <FontAwesomeIcon icon={faTrashCan} style={{ color: "#edb046" }} />
        </div>
      ))}
    </div>
  );
}

export default CompletedTask;