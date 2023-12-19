import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div>
      <h1 className="logo">To-Do App</h1>

      <button className="task-button">
        Add Task
        <FontAwesomeIcon icon={faCirclePlus} style={{ color: "#ba5112", paddingLeft: '2em'}} />
      </button>

      <div className="nav-list">
        <Link to='/' className="nav-item">Dashboard</Link>
        <Link to='/active' className="nav-item">Active</Link>
        <Link to='/completed' className="nav-item">Completed</Link>
      </div>
    </div>
  );
}

export default Sidebar;