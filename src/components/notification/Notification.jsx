import CloseIcon from '@material-ui/icons/Close';
import "./notification.scss"

const Notification = (props) => {
  return (
    <div className={props.posterImage ? "poster-modal" : "notification"}>
      <div className="notification-box">
        <button className="close" onClick={props.onClick}>
            <CloseIcon className="icon" />
        </button>
        {props.text && (<p>{props.text}</p>)}
        {props.posterImage && (<img src={props.posterImage} alt={props.posterAlt} />)}
      </div>
    </div>
  )
}

export default Notification
