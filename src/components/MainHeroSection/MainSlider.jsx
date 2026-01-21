import { useState } from 'react'
import "../../LandingStyles/MainHeroSectionStyles/mainSliderStyles.css";

export default function MainSlider() {
    const [active, setActive] = useState(1);

    return (
        <div className="main-slider-container">
            <ul className='main-slider-list'>  
                {[1, 2, 3].map((num) => (
                    <li key={num}>
                        <button
                            className={`button-pos-${num} ${active === num ? 'active' : ''}`}
                            onClick={() => setActive(num)}
                        />
                    </li> 
                ))}
            </ul>
        </div>
    )
}