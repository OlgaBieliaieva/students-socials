import { Logo } from 'components/Logo/Logo';
import { Statistics } from 'components/Statistics/Statistics';
import css from './Header.module.css';

export const Header = () => {
  return (
    <div className={css.headerContainer}>
      <Logo />
      <Statistics />
    </div>
  );
};

export default Header;
