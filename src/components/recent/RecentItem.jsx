import { Link } from "react-router-dom"
import "./recent.scss"

const RecentItem = (props) => {
  return (
    <div className="recent-item" key={props.id}>
      <div className={props.poster ? "recent-item-image-holder" : "recent-item-image-holder no-img"}>
        {props.poster && (
          <img
            src={`images/posters/${props.poster}`}
            alt={props.title}
            className="recent-item-poster"
          />
        )}
      </div>
      <div className="recent-item-desc">
        <h3 className="item-title">{props.title}</h3>
        {props.director && (<p className="item-piece"><span>რეჟისორი</span>{props.director}</p>)}
        {props.operator && (<p className="item-piece"><span>ოპერატორი</span>{props.operator}</p>)}
        {props.published && (<p className="item-piece"><span>გამოშვების წელი</span>{props.published}</p>)}
        <Link to="/single" className="slider-rm">დაწვრილებით</Link>
      </div>
    </div>
  );
};

export default RecentItem;
