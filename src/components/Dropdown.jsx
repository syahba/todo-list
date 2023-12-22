function Dropdown() {
  return (
    <div className="bg-orange-400">
      <select name="page" className="dropdown">
        <option value="/">Dashboard</option>
        <option value="/active">Active</option>
        <option value="/completed">Completed</option>
      </select>
    </div>
  );
}

export default Dropdown;