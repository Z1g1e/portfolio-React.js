import { useState } from 'react';
import '../../LandingStyles/FooterStyles/FooterLastChapter.css'

export default function FooterLastInputField ( {} ) {
    const [email, setEmail] = useState("");
    const [isValid, setIsValid] = useState(null);
    const [btnAnimation, setBtnAnimation] = useState("");

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 

    const handleChange = (e) => {
        setEmail(e.target.value)
    };

    const handleClick = () => {
        const valid = emailRegex.test(email);
        setIsValid(valid);
    
        if (valid) {
            setBtnAnimation("btn-fly")
            // очищення полів, анімацій та значень
            setTimeout(() => {
                setEmail("");
                setBtnAnimation("");
                setIsValid(null);
            }, 500);
        } else {
            setBtnAnimation("btn-shake");
            
            setTimeout(() => setBtnAnimation(""), 500)
        }
        
    };

    return (
        <div className='footer-last-section-container'>
            <h2 className='footer-last-section-title'>Stay up to date</h2>
                <div className='footer-input-btn-container'> 
                    <input className="footer-last-section-input" type="email" value={email} onChange={handleChange} placeholder='Your email address'/>
                    <button className={`footer-last-section-send-btn ${btnAnimation}`} onClick={handleClick}><img src="footerInputSend.png" alt="just a send button near input field" className=''/></button>
                </div>
        </div>
    );
}