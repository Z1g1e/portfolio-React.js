import '../../LandingStyles/CommunityStyles/communityCardStyles.css'

export default function  CommunityCard ( {src, alt, title = '', subtitleOne = '', subtitleTwo} ) {
    return (
        <div>
            <img className="community-image-card" src={src} alt={alt}/>
            <h1 className="community-title-card">{title}</h1>
            <div className='community-subtitle-list'>
                <span className="community-subtitle-card-one">{subtitleOne}</span>
                <span className="community-subtitle-card-two">{subtitleTwo}</span>
            </div>
           
        </div>
        
    )
}