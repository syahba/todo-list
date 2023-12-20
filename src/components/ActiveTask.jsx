import { faSquareCheck } from "@fortawesome/free-regular-svg-icons";
import { faPenToSquare, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";
import { deleteTask } from "../redux/slice/todo-slice";

function ActiveTask({ data }) {
  const dispatch = useDispatch();

  return (
    <div className="item active-task">
      <FontAwesomeIcon icon={faSquareCheck} style={{ color: "#edb046" }} />
      <p className="task">{data.task}</p>
      <FontAwesomeIcon icon={faPenToSquare} style={{ color: "#edb046" }} />
      <FontAwesomeIcon icon={faTrashCan} style={{ color: "#edb046" }} onClick={() => dispatch(deleteTask(data.id))} />
    </div>
  );
}

export default ActiveTask;