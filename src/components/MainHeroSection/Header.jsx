// import '../../LandingStyles/MainHeroSectionStyles/mainPageStyles.css'
// import '../../LandingStyles/clientCompStyles/clientCompanyImgStyle.css'
// import '../../LandingStyles/CommunityStyles/communityCardStyles.css'
// import '../../LandingStyles/MainHeroSectionStyles/mainLogoStyles.css'
import '../../LandingStyles/MainHeroSectionStyles/MainNavMenu.css'
import MainLogo from "./MainLogo"
import MainNavigation from "./MainNavigation"
import MainNavButton from "./MainNavButton"
import MainTextContainer from "./MainTextContainer"
import MyImages from "../MyImages"
import MainSlider from "./MainSlider"
import ClientTitle from "../clientComponents/ClientTitle"
import OurClientImg from "../clientComponents/OurClientImg"
import CommunityCard from "../CommunityComponents/CommunityCard"



export default function Header ( {} ) {
  const navMenuItems = [
    { label: 'Home', path: '/' },
    { label: 'Services', anchor: '#services' },
    { label: 'Feature', anchor: '#feature' },
    { label: 'Product', anchor: '#product' },
    { label: 'Testimonial', anchor: '#testimonial' },
    { label: 'FAQ', anchor: '#faq' }
  ]
    return (
        <header>
            <div className='main-page-container'>
                <div className='main-nav-menu'>
                    <MainLogo title="Nexcent" srcImg="/minimum-icon.png"/>
                    <MainNavigation items={navMenuItems}/>
                    <MainNavButton />
                </div>
            </div>
        </header>
    );
}