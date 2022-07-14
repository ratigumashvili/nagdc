import { Link } from "react-router-dom"
import "./listitem.scss"

const ListItem = (props) => {
  return (
    <div className="list-item" key={props.id}>
      <div className={props.poster ? "poster-holder" : "poster-holder no-img"}>
        {props.poster && (
          <img
            src={`images/posters/${props.poster}`}
            alt={props.title}
            className="list-item-poster"
          />
        )}
      </div>
      <div className="list-item-desc">
        <h3 className="list-item-title">{props.title}</h3>
        <p>
          <span>სახეობა</span>
          {props.variety}
        </p>
        {props.director && (
          <p>
            <span>რეჟისორი</span>
            {props.director}
          </p>
        )}
        {props.operator && (
          <p>
            <span>ოპერატორი</span>
            {props.operator}
          </p>
        )}
        {props.published && (
          <p>
            <span>გამოშვების წელი</span>
            {props.published}
          </p>
        )}
      </div>
      <Link to="/single" className="list-item-rm">დაწვრილებით</Link>
    </div>
  );
};

export default ListItem;
