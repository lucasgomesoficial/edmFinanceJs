import logoImg from '../../stories/assets/img/logoFinance.svg';
import './logoFinance.module.css';

export const LogoFinance = () => {
  return (
    <div className='logoFinance'>
      <img src={logoImg} alt='Logo Edm Finance' />
      <h1>Edm Finance</h1>
    </div>
  );
};
