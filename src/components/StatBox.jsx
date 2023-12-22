import { faCircleCheck, faRotateRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '../styles/StatBox.css';
import PropTypes from 'prop-types';

function StatBox({ props }) {
  return (
    // conditional colot and icons
    <div className="stat-box" style={props.status == 'Completed' ? { backgroundColor: '#BA5112' } : { backgroundColor: '#EDB046' }}>
      {props.status == 'Completed' ? <FontAwesomeIcon icon={faCircleCheck} className="fa-xl stat-icon" style={{ color: "#ffffff" }} />
        : <FontAwesomeIcon icon={faRotateRight} className="fa-xl stat-icon" style={{ color: "#ffffff" }} />}
        
      <div>
        <h1 className="stat">{props.amount != 0 ? Math.round(props.amount / props.total * 100) : 0}%</h1>
        <p className="stat-desc">{props.status} tasks</p>
      </div>
    </div>
  );
}

StatBox.propTypes = {
  props: PropTypes.object
}

export default StatBox;