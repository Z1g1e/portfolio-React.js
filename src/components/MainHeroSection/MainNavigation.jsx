import { NavLink } from 'react-router-dom';
import '../../LandingStyles/MainHeroSectionStyles/navListStyles.css';

export default function MainNavigation ({ items }) {
    return (
        <nav className="main-nav-element">
            <ul className="nav-ul-main">
                {items.map((item, index) => (
                    <li className={index === 0 ? "nav-list-main first-item": "nav-list-main"} key={index}>
                        <NavLink 
                            to={item.path}
                            className={({ isActive }) => 
                                isActive
                                    ? index === 0 
                                        ? "nav-item nav-item-home active" 
                                        : "nav-item active" 
                                    : index === 0 
                                        ? "nav-item nav-item-home" 
                                        : "nav-item"
                            }
                        >
                            {item.label}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
}