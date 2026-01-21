import { Link } from 'react-router-dom';
import '../../LandingStyles/MainHeroSectionStyles/navListButtonStyles.css';

export default function MainNavButton({}) {
    return (
        <li className="nav-button-list-main">
            <Link to="/login" className='nav-login-button'>
                Login
            </Link>

            <Link to="/register" className='nav-signup-button'>
                Sign up
            </Link>
            {/* <button className="nav-login-button">Login</button>
            <button className="nav-signup-button">Sign up</button> */}
        </li>
    );
}