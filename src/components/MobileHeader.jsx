import ButtonAdd from "./ButtonAdd";
import Dropdown from "./Dropdown";
import '../styles/MobileHeader.css';

function MobileHeader() {
  return (
    <div className="">
      <div className="header">
        <h1 className="logo">To-Do App</h1>
        <ButtonAdd></ButtonAdd>
      </div>

      <Dropdown></Dropdown>
    </div>
  );
}

export default MobileHeader;