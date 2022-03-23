import logoImg from '../../stories/assets/img/logoFinance.svg';
import styles from './logoFinance.module.scss';

export const LogoFinance = () => {
  return (
    <div className={styles.logoFinance}>
      <img src={logoImg} alt='Logo Edm Finance' />
      <h1>Edm Finance</h1>
    </div>
  );
};
