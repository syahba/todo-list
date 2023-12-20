import { Link } from "react-router-dom";
import ButtonAdd from "./ButtonAdd";

function Sidebar() {
  return (
    <div>
      <h1 className="logo">To-Do App</h1>

      <ButtonAdd></ButtonAdd>

      <div className="nav-list">
        <Link to='/' className="nav-item">Dashboard</Link>
        <Link to='/active' className="nav-item">Active</Link>
        <Link to='/completed' className="nav-item">Completed</Link>
      </div>
    </div>
  );
}

export default Sidebar;