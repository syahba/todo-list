function Modal({ setIsOpen }) {
  return (
    <div>
      <div className="modal">
        <input type="text" />
        <button onClick={() => setIsOpen(false)}>Add</button>
      </div>
      <div className="bg-dark" onClick={() => setIsOpen(false)}></div>
    </div>
  );
}

export default Modal;