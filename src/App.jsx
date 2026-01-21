import './App.css'
import './LandingStyles/MainHeroSectionStyles/mainPageStyles.css'
import './LandingStyles/clientCompStyles/clientCompanyImgStyle.css'
import './LandingStyles/CommunityStyles/communityCardStyles.css'
import './LandingStyles/MainHeroSectionStyles/mainLogoStyles.css'
import MainFooter from "./components/MainFooterComponents/MainFooter.jsx"
import FooterLastChapter from './components/MainFooterComponents/FooterLastChapter.jsx'
import Header from "./components/MainHeroSection/Header.jsx"

import { Routes, Route } from "react-router-dom"
import Home from './components/Pages/Home.jsx'
import LoginMenu from './components/Pages/LoginMenu.jsx'
import RegistrationMenu from './components/Pages/RegistrationMenu.jsx'

function App() {
  return (
    <>
      <Header/>

        <Routes>
          <Route 
            path='/' 
            element={
              <>
                <Home/>
                <MainFooter/>
                {/* <FooterLastChapter
                srcImage='/minimum-footer-icon.png' 
                altImage='in footer main website logo'
                iconTitle='Nexcent' 
                contentOne='Copyright © 2020 Nexcent ltd.' 
                contentTwo='All rights reserved'
                /> */}
              </>
            }
          />
          <Route
            path='/login' 
            element={
              <>
                <LoginMenu/>
                <FooterLastChapter 
                srcImage='/minimum-footer-icon.png' 
                altImage='in footer main website logo'
                iconTitle='Nexcent' 
                contentOne='Copyright © 2020 Nexcent ltd.' 
                contentTwo='All rights reserved'
                />
              </>
            }
          />
          <Route 
            path='/register' 
            element={
              <>
                <RegistrationMenu/>
                <FooterLastChapter 
                srcImage='/minimum-footer-icon.png' 
                altImage='in footer main website logo'
                iconTitle='Nexcent' 
                contentOne='Copyright © 2020 Nexcent ltd.' 
                contentTwo='All rights reserved'
                />
              </>
            }
          />
        </Routes>
    </>
  );
}

export default App
