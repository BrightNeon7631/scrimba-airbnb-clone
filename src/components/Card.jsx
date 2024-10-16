import star from '../assets/images/star.png';

export default function Card(props) {
  let badgeText;
  if (props.item.openSpots === 0) {
    badgeText = 'SOLD OUT';
  } else if (props.item.location === 'Online') {
    badgeText = 'ONLINE';
  }

  return (
    <div className="card">
      <div className="card-img-cont">
        <img src={props.item.coverImg} />
        {badgeText && <div className="card-img-text">{badgeText}</div>}
      </div>
      <div className="card-text-star">
        <img src={star} alt="star" />
        <p>
          {props.item.stats.rating + ' '}
          <span>
            ({props.item.stats.reviewCount}) • {props.item.location}
          </span>
        </p>
      </div>
      <p className="card-title">{props.item.title}</p>
      <p className="card-price">
        <span>From ${props.item.price}</span> / person
      </p>
    </div>
  );
}