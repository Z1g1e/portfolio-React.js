import "../../LandingStyles/HomePageStyles/MainLogoStyles.css"

export default function MainSiteLogo ( {title} ) {
    return (
        <div className='main-logo-container'> 
          <MyImages className="main-nav-logo-img" src='/minimum-icon.png' alt='Main logotype'/>
          <h1 className='main-logo-title'>{title}</h1>
        </div>
    );
}