import PropTypes from 'prop-types';
import { ButtonLoad } from './Button.styled';
const Button = ({ loadMore }) => {
  return (
    <ButtonLoad type="button" onClick={loadMore}>
      Load more
    </ButtonLoad>
  );
};
export default Button;
Button.propTypes = {
  loadMore: PropTypes.func.isRequired,
};
