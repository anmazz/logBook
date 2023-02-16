import './Header.scss';
import Logo from './spiral.svg';


const Header = () => 
    <div className="topnav">
        <a className="logo">
            <img src={Logo} width="22" height="22"/>
            logBook
        </a>
        <a className="active" href="#home">Home</a>
        <a href="#news">News</a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>
    </div>
;

export default Header;