import '../../LandingStyles/clientCompStyles/clientTitleStyles.css';

export default function ClientTitle({ title = '', subtitle = '', multiline = false }) {
    return (
        <div className='client-title-container'>
            <h1 className="client-main-title" style={multiline ? { whiteSpace: 'pre-line'} : undefined}>{title}</h1>
            <span className="client-sub-title">{subtitle}</span>
        </div>
    )
}