import { Link } from "react-router-dom";
import ButtonAdd from "./ButtonAdd";
import '../styles/Sidebar.css'

function Sidebar() {
  return (
    <aside>
      <div className="sidebar">
        <h1 className="logo">To-Do App</h1>

        <ButtonAdd></ButtonAdd>

        <div className="nav-container">
          <Link to='/' className="nav-item">Dashboard</Link>
          <Link to='/active' className="nav-item">Active</Link>
          <Link to='/completed' className="nav-item">Completed</Link>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;