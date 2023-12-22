import { Link } from "react-router-dom";
import '../styles/Dropdown.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

function Dropdown() {
  return (
    <div className="dropdown">
      <div className="btn">
        <button className="dropbtn">Menu</button>
        <FontAwesomeIcon icon={faAngleDown} className="fa-xs" style={{ color: '#251814' }} />
      </div>
      
      <div className="dropdown-content">
        <Link to='/' className="link">Dashboard</Link>
        <Link to='/active' className="link">Active</Link>
        <Link to='/completed' className="link">Completed</Link>
      </div>
    </div>
  );
}

export default Dropdown;