import { Link } from "react-router-dom";
import '../styles/Dropdown.css';

function Dropdown() {
  return (
    <div className="dropdown">
      <button className="dropbtn">Menu</button>
      <div className="dropdown-content">
        <Link to='/' className="link">Dashboard</Link>
        <Link to='/active' className="link">Active</Link>
        <Link to='/completed' className="link">Completed</Link>
      </div>
    </div>
  );
}

export default Dropdown;