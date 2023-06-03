import logo from '../../images/logo.png'
import css from './Logo.module.css'
export const Logo=()=>{
    return(
        <div className={css.logoContainer}>
            <img src={logo} alt='like'width={30}></img>
            <p>StudS</p>
        </div>
    )
}