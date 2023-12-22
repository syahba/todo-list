import ButtonAdd from "./ButtonAdd";
import Dropdown from "./Dropdown";

function MobileHeader() {
  return (
    <div>
      <h1 className="logo">To-Do App</h1>

      <ButtonAdd></ButtonAdd>

      <Dropdown></Dropdown>
    </div>
  );
}

export default MobileHeader;