import PropTypes from 'prop-types';
import svg from '../../images/sprite.svg';
const Icon = ({ name, fill, width, height, stroke, className }) => {
  return (
    <svg
      fill={fill}
      width={width}
      height={height}
      stroke={stroke}
      className={`${className} icon-{name}`}
    >
      <use xlinkHref={`${svg}#${name}`}></use>
    </svg>
  );
};
export default Icon;
Icon.defaultProps = {
  fill: 'black',
  name: '',
  width: '30px',
  height: '30px',
  stroke: 'transparent',
  className: 'icon',
};
Icon.propTypes = {
  fill: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  stroke: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};
