import MyImages from '../MyImages.jsx'
import '../../LandingStyles/BodyLearnSectionStyles/bodyTopLearn.css'

export default function BodyTopLearnSection( {variant, isSpaced, isSecond, imgSrc, imgAlt, title, description, btnContent} ) {
    return (
        <section className={`
                body-top-learn
                body-top-learn--${variant}
                ${isSpaced ? 'body-top-learn--spaced' : ''}
                ${isSecond ? 'body-top-learn--second' : ''}
            `}
        >
            <MyImages className="body-learn-hero-img" src={imgSrc} alt={imgAlt} /> 
            <div className='body-top-content-container'>
                <h2 className='body-top-learn_title'>{title}</h2>
                <p className='body-top-learn_descript'>{description}</p>
                <button className='body-top-learn_btn'>{btnContent}</button>
            </div>
        </section>
    );
}