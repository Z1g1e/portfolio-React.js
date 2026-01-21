import '../../LandingStyles/MainHeroSectionStyles/mainLessonStyles.css'

export default function MainLogo( {title, srcImg} ) {
    return (
        <div className="main-logo-container">
            <img className="main-logo-img" src={srcImg} alt="main logo in site" />
            <h1 className="main-logo-text">{title}</h1>
        </div>
    )
}