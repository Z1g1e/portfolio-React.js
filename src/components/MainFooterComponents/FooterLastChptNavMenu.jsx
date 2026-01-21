import '../../LandingStyles/FooterStyles/FooterLastChapter.css'

export default function FooterLastChptNavMenu ( {title, links} ) {
    return (
            <div className='footer-first-section-container'>
                <h2 className='footer-nav-title'>{title}</h2>
                <nav className='footer-first-nav-container'>
                    <ul className='footer-ul-container'>
                        {links.map((links) => (
                        <li className='footer-nav-button-container' key={links.title}>
                            <a className='footer-nav-button' href={links.href}>{links.title}</a>
                        </li>
                        ))}
                    </ul>
                </nav>
            </div>
    )
}