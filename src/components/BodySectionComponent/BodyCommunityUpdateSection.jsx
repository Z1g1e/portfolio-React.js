import "../../LandingStyles/BodyCommunitySectionStyles/bodyCommunitySection.css"

export default function BodyCommunityUpdateSection ( {title, description} ) {
    return (
        <section className="body-community-title-container">
            <div>
                <h2 className="body-community-title">{title}</h2>
                <p className="body-community-description">{description}</p>
            </div>
        </section>
    );
}