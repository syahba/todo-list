function EmptyTask({ status }) {
  return (
    <div>
      <p className="empty">You have no {status} tasks.</p>
    </div>
  );
}

export default EmptyTask;