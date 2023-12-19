import { faCircleCheck, faRotateRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function StatBox({ props }) {
  return (
    // conditional background color dan icon
    <div className="stat-box" style={props.status == 'Completed' ? { backgroundColor: 'BA5112' } : { backgroundColor: 'EDB046' }}>
      {props.status == 'Completed' ? <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#ffffff" }} /> 
        : <FontAwesomeIcon icon={faRotateRight} style={{ color: "#ffffff", }} />}
      <h1 className="stat">{props.amount / props.data * 100}%</h1>
      <p className="stat-desc">{props.status} tasks</p>
    </div>
  );
}

export default StatBox;