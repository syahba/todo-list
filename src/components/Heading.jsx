import '../styles/Heading.css';
import PropTypes from 'prop-types';

function Heading({ page }) {
  const today = new Date();
  const date = today.toLocaleString('en-GB', { dateStyle: 'full' }); // formatting date

  return (
    <div className="heading">
      <h2 className="heading-title">Today's {page} Tasks</h2>
      <p className="date">{date}</p>
    </div>
  );
}

Heading.propTypes = {
  page: PropTypes.string
}

export default Heading;