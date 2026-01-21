import StatItem from "./StatItem"
import '../../LandingStyles/BodyTopStatStyles/bodyStatStyles.css'

export default function BodyTopStatSection ({stats, titleStart, titleEnd, description}) {
    return (
        <section className="body-top-stat">
            <div className="body-top-stat_left">
                <h2 className="body-top-stat-title">
                    <span className='body-top-stat-title-one'>{titleStart}</span>
                    {' '}
                    <span className='body-top-stat-title-two'>{titleEnd}</span>{}
                </h2>
                <p className="body-top-stat-descrip">{description}</p>
            </div>
            <div className="body-top-stat-right">
                {stats.map((item) => (
                    <StatItem 
                        key={item.alt}
                        img={item.img}
                        value={item.title}
                        label={item.text}
                    />
                ))}
            </div>
        </section>
    )
}

{/* <h2 className='body-top-learn_title'>
        <span className='body-top-stat-title-one'>{titleStart}</span>
        {''}
        <span className='body-top-stat-title-two'>{titleEnd}</span>
    </h2> */}