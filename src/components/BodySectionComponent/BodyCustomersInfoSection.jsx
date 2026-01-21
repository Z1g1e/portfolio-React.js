import MyImages from "../MyImages.jsx";
import OurClientImg from '../clientComponents/OurClientImg.jsx'
import '../../LandingStyles/BodySectionCustomersStyles/bodyHeroCustomers.css'

export default function BodyCustomersInfoSection ( {descriptionOne, descriptionTwo, title, customersMainBtn} ) {
    return (
        <section className="body-customers-container">
            <div className="body-customers-main-img">
                <MyImages className='body-main-customers-img' src='/BodyCustomersMainImg.png' alt='Main cutomers img'/>
            </div>
            <div className="body-customers-main-info-section">
                <p className="body-customers-main-info">{descriptionOne}</p>
                <h2 className="body-customers-main-title">{title}</h2>
                <p className="body-customers-main-description">{descriptionTwo}</p>
            </div>
            <div className="body-customers-main-li">
                <li className="body-customers-img-li">
                    <OurClientImg src='/LogoVariantThree.png' alt='first customers logo in section'/>    
                    <OurClientImg src='/Logo2.png' alt='customers logo 2'/>    
                    <OurClientImg src='/Logo3.png' alt='customers logo 3'/>    
                    <OurClientImg src='/Logo4.png' alt='customers logo 4'/>    
                    <OurClientImg src='/Logo5.png' alt='customers logo 5'/>    
                    <OurClientImg src='/Logo6.png' alt='last customers logo in section'/>
                </li>
                <button className="body-customers-main-btn">{customersMainBtn}</button>    
            </div>
        </section>
    );
}