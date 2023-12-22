import PropTypes from 'prop-types';

function Header({ header }) {
  return (
    <div>
      <h2 className="text-base py-4 pl-5 mb-5">{header}</h2>
    </div>
  );
}

Header.propTypes = {
  header: PropTypes.string
}

export default Header;