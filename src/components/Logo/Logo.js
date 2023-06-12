import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';
import css from './Logo.module.css';
export const Logo = () => {
  return (
    <Link className={css.logo} to="/">
      <img src={logo} alt="like" width={30}></img>
      <p>StudS</p>
    </Link>
  );
};
