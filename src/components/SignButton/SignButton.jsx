import './signButton.scss';

export const SignButton = ({ title, image, backgroundColor }) => {
  return (
    <button style={{ background: backgroundColor }} className='signButton'>
      <img src={image} />
      <p>{title} </p>
    </button>
  );
};
