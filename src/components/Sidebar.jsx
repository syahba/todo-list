import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div>
      <div className="nav-list">
        <Link to='/'>Dashboard</Link>
        <Link to='/active'>Active</Link>
        <Link to='/completed'>Completed</Link>
      </div>
    </div>
  );
}

export default Sidebar;