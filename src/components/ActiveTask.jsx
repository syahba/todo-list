import { faPenToSquare, faSquareCheck, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ActiveTask({ data }) {
  return (
    <div className="item">
      {data.map(val => (
        <div className="active-task" key={val.id}>
          <FontAwesomeIcon icon={faSquareCheck} style={{ color: "#edb046" }} />
          <p className="task">{val.task}</p>
          <FontAwesomeIcon icon={faPenToSquare} style={{ color: "#edb046" }} />
          <FontAwesomeIcon icon={faTrashCan} style={{ color: "#edb046" }} />
        </div>
      ))}
    </div>
  );
}

export default ActiveTask;