import MainTextContainer from "../MainHeroSection/MainTextContainer"
import MyImages from "../MyImages"
import MainSlider from "../MainHeroSection/MainSlider"
import ClientTitle from "../clientComponents/ClientTitle"
import OurClientImg from "../clientComponents/OurClientImg"
import CommunityCard from "../CommunityComponents/CommunityCard"
import BodySection from "../BodySectionComponent/BodySection"

export default function Home ( {} ) {
    return (
        <>
          <div className='main-home-page-container'>
              <MainTextContainer />

            <div className='main-page-image-container'>
              <MyImages
              className='main-logo-hero-image' 
              src='/MainIllustrationOnMinimumLanding.png' 
              alt='Main page illustration'/>
            </div>

            <MainSlider />
            <ClientTitle 
            title="Our Clients" 
            subtitle="We have been working with some Fortune 500+ clients" />

            <div className='client-logo-list'>
              <OurClientImg className='client-img-one' src='/Logo1.png' alt='Client logo 1'/>
              <OurClientImg src='/Logo2.png' alt='Client logo 2'/>
              <OurClientImg src='/Logo3.png' alt='Client logo 3'/>
              <OurClientImg src='/Logo4.png' alt='Client logo 4'/>
              <OurClientImg src='/Logo5.png' alt='Client logo 5'/>
              <OurClientImg src='/Logo6.png' alt='Client logo 6'/>
              <OurClientImg src='/Logo9.png' alt='Client logo 7'/>
            </div>

            <ClientTitle 
            title={`Manage your entire community in a single system`} 
            multiline 
            subtitle="Who is Nexcent suitable for?" />

            <div className='community-card-list-comp-element'>
              <CommunityCard title='Membership Organisations' subtitleOne='Our membership management software provides full automation of membership renewals and payments' src='/CommunityIcon.png'/>
              <CommunityCard title='National Associations' subtitleTwo='Our membership management software provides full automation of membership renewals and payments' src='/CommunityIcon2.png'/>
              <CommunityCard title='Clubs And Groups' subtitleOne='Our membership management software provides full automation of membership renewals and payments' src='/CommunityIcon3.png'/>
            </div>
          </div>
        
          <BodySection/>
        </>
    );
}