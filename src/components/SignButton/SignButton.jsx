import './signButton.css';

export const SignButton = ({ title, image, backgroundColor }) => {
  return (
    <div>
      <button style={{ background: backgroundColor }} className='signButton'>
        <img src={image} />
        <h2>{title}</h2>
      </button>
    </div>
  );
};
