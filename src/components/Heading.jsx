function Heading({ page }) {
  const today = new Date();
  const date = today.toLocaleString('en-GB', { dateStyle: 'full' }); // formatting date

  return (
    <div>
      <h2 className="heading">Today's {page} Tasks</h2>
      <p className="date">{date}</p>
    </div>
  );
}

export default Heading;