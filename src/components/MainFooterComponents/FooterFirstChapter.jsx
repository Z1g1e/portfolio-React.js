import "../../LandingStyles/FooterStyles/FooterFirstChapter.css"

export default function FooterFirstChapter ( {title, btnName} ) {
    return (
        <section className="footer-first-chp-container">
            <h2 className="footer-first-chp-title">{title}</h2>
            <button className="footer-first-chp-btn">{btnName}</button>
        </section>
    );
}