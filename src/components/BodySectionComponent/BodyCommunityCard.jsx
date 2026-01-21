export default function BodyCommunityCard ( {description, btnName} ) {
    return (
        <section className="body-community-card-item">
            <div className="body-community-card-container">
                <p className="body-community-card-description">{description}</p>
                <button className="body-community-bnt-name">{btnName}</button>
            </div>
        </section>
    )
}