import '../../LandingStyles/BodyTopStatStyles/bodyStatStyles.css'

export default function StatItem({ img, value, label }) {
  return (
    <div className="stat-item">
      <img className="body-stat-image" src={img} alt={label} />
      <div>
        <h3 className="body-stat-title">{value}</h3>
        <p className="body-stat-descrip">{label}</p>
      </div>
    </div>
  );
}
