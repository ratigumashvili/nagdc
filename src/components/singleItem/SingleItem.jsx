import { useNavigate } from "react-router-dom";
import { useState } from "react";
import SingleDropDown from "../singleDropdown/SingleDropDown";
import PictureAsPdfIcon from "@material-ui/icons/PictureAsPdf";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ZoomInIcon from "@material-ui/icons/ZoomIn";
import Notification from "../notification/Notification";
import Backdrop from "../notification/Backdrop";
import "./singleitem.scss";

const SingleItem = (props) => {
  let navigate = useNavigate();

  const [openModal, setOpenModad] = useState(false);

  function openModalHandler() {
    setOpenModad((prevState) => !prevState);
  }

  return (
    <div className="container single-item" key={props.id}>
      <div className="title-holder">
        <h2 className="title">
          {props.title}, {props.published}
        </h2>
        <SingleDropDown />
      </div>
      <div className="row single-post-row">
        <div className="sidebar">
          <div
            className={
              props.poster
                ? "single-poster-holder"
                : "single-poster-holder no-poster"
            }
          >
            {props.poster && (
              <button className="zoom-in">
                <ZoomInIcon className="icon" onClick={openModalHandler} />
              </button>
            )}
            {props.poster && (
              <img src={`/images/posters/${props.poster}`} alt={props.title} />
            )}
          </div>
        </div>
        <div className="single-page-main-content">
          <dl className="single-page-list">
            {props.repositor && (
              <>
                <dt>რეპოზიტორი ორგანიზაცია</dt>
                <dd>{props.repositor}</dd>
              </>
            )}
            {props.unitNumber && (
              <>
                <dt>სააღრიცხვო ერთეულის ნომერი</dt>
                <dd>{props.unitNumber}</dd>
              </>
            )}
            {props.title && (
              <>
                <dt>ფილმის დასახელება</dt>
                <dd>{props.title}</dd>
              </>
            )}
            {props.movieType && (
              <>
                <dt>ორიგინალი</dt>
                <dd>{props.movieType}</dd>
              </>
            )}
            {props.movieVariety && (
              <>
                <dt>ფილმის სახეობა</dt>
                <dd>{props.movieVariety}</dd>
              </>
            )}
            {props.partNumber && (
              <>
                <dt>ნაწილების რაოდენობა</dt>
                <dd>{props.partNumber}</dd>
              </>
            )}
            {props.fullLength && (
              <>
                <dt>სრული მეტრაჟი</dt>
                <dd>{props.fullLength}</dd>
              </>
            )}
            {props.duration && (
              <>
                <dt>ხანგრძლივობა წთ.</dt>
                <dd>{props.duration}</dd>
              </>
            )}
            {props.published && (
              <>
                <dt>გამოშვების წელი</dt>
                <dd>{props.published}</dd>
              </>
            )}
            {props.manufacturer && (
              <>
                <dt>მწარმოებელი სტუდიის დასახელება</dt>
                <dd>{props.manufacturer}</dd>
              </>
            )}
            {props.director && (
              <>
                <dt>რეჟისორი</dt>
                <dd>{props.director}</dd>
              </>
            )}
            {props.operator && (
              <>
                <dt>ოპერატორი</dt>
                <dd>{props.operator}</dd>
              </>
            )}
            {props.scriptAuthor && (
              <>
                <dt>სცენრაის ავტორი</dt>
                <dd>{props.scriptAuthor}</dd>
              </>
            )}
            {props.composer && (
              <>
                <dt>კომპოზიტორი</dt>
                <dd>{props.composer}</dd>
              </>
            )}
            <dt>სხვა ავტორი</dt>
            {props.otherAuthor && (
              <>
                <dd>
                  {props.otherAuthor[0].otherAuthorPosition}:{" "}
                  {props.otherAuthor[0].otherAuthorName}
                </dd>
              </>
            )}
            {props.plot && (
              <>
                <dt>ფილმის შინაარსი</dt>
                <dd>{props.plot}</dd>
              </>
            )}
            {props.additionalInfo && (
              <>
                <dt>შენიშვნა/დამატებითი ინფორმაცია</dt>
                <dd>{props.additionalInfo}</dd>
              </>
            )}
            {props.filmBase && (
              <>
                <dt>კინოფირის ფუძე</dt>
                <dd>{props.filmBase}</dd>
              </>
            )}
            {props.imageFormat && (
              <>
                <dt>გამოსახულების ფორმატი</dt>
                <dd>{props.imageFormat}</dd>
              </>
            )}
            {props.representation && (
              <>
                <dt>გამოსახულება</dt>
                <dd>{props.representation}</dd>
              </>
            )}
            {props.sound && (
              <>
                <dt>ხმოვანება</dt>
                <dd>{props.sound}</dd>
              </>
            )}
            {props.negative && (
              <>
                <dt>ნეგატივი</dt>
                <dd>{props.negative}</dd>
              </>
            )}
            {props.positive && (
              <>
                <dt>პოზიტივი</dt>
                <dd>{props.positive}</dd>
              </>
            )}
            {props.dublePositive && (
              <>
                <dt>დუბლ პოზიტივი</dt>
                <dd>{props.dublePositive}</dd>
              </>
            )}
            {props.dublNegative && (
              <>
                <dt>დუბლ ნეგატივი</dt>
                <dd>{props.dublNegative}</dd>
              </>
            )}
            {props.optPhonogram && (
              <>
                <dt>ოპტ. ფონოგრამა</dt>
                <dd>{props.optPhonogram}</dd>
              </>
            )}
            {props.magnPhonogram && (
              <>
                <dt>მაგნ. ფონოგრამა</dt>
                <dd>{props.magnPhonogram}</dd>
              </>
            )}
            {props.casseteDisk && (
              <>
                <dt>კასეტა/დისკი</dt>
                <dd>{props.casseteDisk}</dd>
              </>
            )}
            {props.digitalCopy && (
              <>
                <dt>ციფრული ასლი</dt>
                <dd>{props.digitalCopy}</dd>
              </>
            )}
          </dl>

          {props.montageUrl || props.mediaUrl ? (
            <div className="media">
              <div>
                {props.montageUrl && (
                  <a
                    href={`pdfs/${props.montageUrl}`}
                    target="_blank"
                    rel="noreferrer"
                    className="media-btn"
                  >
                    სამონტაჟო ფურცელი <PictureAsPdfIcon className="icon" />
                  </a>
                )}
                {props.mediaUrl && (
                  <a
                    href={`${props.mediaUrl}`}
                    target="_blank"
                    rel="noreferrer"
                    className="media-btn"
                  >
                    მედია <PictureAsPdfIcon className="icon" />
                  </a>
                )}
              </div>
              <button
                className="media-btn"
                onClick={() => {
                  navigate("/list");
                }}
              >
                <ArrowBackIcon className="icon" /> სიაში დაბრუნება
              </button>
            </div>
          ) : (
            <div
              className="media"
              style={{ marginBottom: "40px", justifyContent: "flex-end" }}
            >
              <button
                className="media-btn"
                onClick={() => {
                  navigate("/list");
                }}
              >
                <ArrowBackIcon className="icon" /> სიაში დაბრუნება
              </button>
            </div>
          )}
        </div>
      </div>

      {openModal && (
        <Notification
          posterImage={`/images/posters/${props.poster}`}
          posterAlt={props.title}
          onClick={openModalHandler}
        />
      )}
      {openModal && <Backdrop onClick={openModalHandler} />}
      
    </div>
  );
};

export default SingleItem;
