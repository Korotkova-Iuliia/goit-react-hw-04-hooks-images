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
