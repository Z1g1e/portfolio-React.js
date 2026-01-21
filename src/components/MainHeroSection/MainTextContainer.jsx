import MainRepeatButton from "./MainRepeatButton.jsx"
import '../../LandingStyles/MainHeroSectionStyles/mainLessonStyles.css'

export default function MainTextContainer() {
    return (
        <div className="main-lesson-text-container">
            <h1 className="main-title-in-container"><span className="main-text-element">Lessons and insights</span> <br/> <span className="main-second-text-element">from 8 years</span></h1>
            <span className="main-text-description">Where to grow your business as a photographer: site or social media?</span>
            <MainRepeatButton name="Register" />
        </div>
    )
}