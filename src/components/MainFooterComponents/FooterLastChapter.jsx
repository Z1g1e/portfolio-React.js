// import { useState } from 'react';
import MyImages from '../MyImages.jsx'
import OurClientImg from '../clientComponents/OurClientImg';
import '../../LandingStyles/FooterStyles/FooterLastChapter.css'
import FooterLastChptNavMenu from './FooterLastChptNavMenu.jsx';
import FooterLastInputField from './FooterLastInputField.jsx';

export default function FooterLastChapter ({srcImage, altImage, iconTitle, contentOne, contentTwo}) {
    const footerCompanyData = [
        {
            title: 'About us',
            href:'#'
        },  
        {
            title: 'Blog',
            href:'#'
        },    
        {
            title: 'Contact us',
            href:'#'
        },   
        {
            title: 'Pricing',
            href:'#'
        },   
        {
            title: 'Testimonials',
            href:'#'
        },     
    ];

    const footerSupportData = [
        {
            title: 'Help center',
            href:'#'
        },  
        {
            title: 'Terms of service',
            href:'#'
        },    
        {
            title: 'Legal',
            href:'#'
        },   
        {
            title: 'Privacy policy',
            href:'#'
        },   
        {
            title: 'Status',
            href:'#'
        },     
    ];

    // function FooterEmailInput () {
    //     const [email, setEmail] = React.useState("")
    //     const [isValid, setIsValid] = React.useState(null)

    //     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 

    //     const handleChange = (e) => {
    //         const value = e.target.value;
    //         setEmail(value)
    //         setIsValid(value === "" ? null : emailRegex.test(value))
    //     }
    // }
    

    return (
        <footer className='footer-last-cpt-container'>
            <div className='footer-first-block-container'>
                <div className='footer-logo-container'>
                    <MyImages className='footer-logo-img' src={srcImage} alt={altImage}/>
                    <h2 className='footer-icon-title'>{iconTitle}</h2>
                </div>
                <div className='footer-copyright-container'>
                    <p className='footer-copyright-first-element'>{contentOne}</p>
                    <p className='footer-copuright-last-element'>{contentTwo}</p>
                </div>
                <div className='footer-social-link-container'>
                    <OurClientImg src='/FooterIconOne.png' alt='instagram image'/>
                    <OurClientImg src='/FooterIconTwo.png' alt='our social networks image'/>
                    <OurClientImg src='/FooterIconThree.png' alt='twitter image'/>
                    <OurClientImg src='/FooterIconFour.png' alt='youtube image'/>
                </div>
            </div>
            
            <div className='footer-last-block-container'>
                <FooterLastChptNavMenu title='Company' links={footerCompanyData}/>
                <FooterLastChptNavMenu title='Support' links={footerSupportData}/>
                <FooterLastInputField />
                {/* <div className='footer-last-section-container'>
                    <h2 className='footer-last-section-title'>Stay up to date</h2>
                        <div className='footer-input-btn-container'>
                            <input className={`footer-last-section-input ${isValid === true ? 'valid' : ""}${isValid === false ? "invalid" : "  "}`} type="text" value={email} onChange={handleChange} placeholder='Your email address'/>
                            <button className='footer-last-section-send-btn'><img src="footerInputSend.png" alt="just a send button near input field" className=''/></button>
                        </div>
                </div> */}
            </div>
        </footer>
    );
}