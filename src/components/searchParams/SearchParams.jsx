import ClearIcon from "@material-ui/icons/Clear";
import "./searchparams.scss";

const SearchParams = (props) => {
  return (
    <div className="search-params">
      <button
        onClick={props.onClick}
        className="search-params-clear"
        title="ძებნის პარამეტრების გაწმენდა"
      >
        <ClearIcon className="icon" />
      </button>
      <p className="search-params-title">
        ძებნის პარამეტრები <span style={{ marginLeft: "5px" }}>=</span>
      </p>
      {props.title && (
        <p>
          <span className="option">სახელწოდება</span>
          <span className="value">{props.title}</span>
        </p>
      )}
      {props.year && (
        <p>
          <span className="option">წელი</span>
          <span className="value">{props.year}</span>
        </p>
      )}
      {props.yearFrom && (
        <p>
          <span className="option">წელი (დან)</span>
          <span className="value">{props.yearFrom}</span>
        </p>
      )}
      {props.yearTo && (
        <p>
          <span className="option">წელი (მდე)</span>
          <span className="value">{props.yearTo}</span>
        </p>
      )}
      {props.manufacturer && (
        <p>
          <span className="option">მწარმოებელი სტუდია</span>
          <span className="value">{props.manufacturer}</span>
        </p>
      )}
      {props.director && (
        <p>
          <span className="option">რეჟისორი</span>
          <span className="value">{props.director}</span>
        </p>
      )}
      {props.operator && (
        <p>
          <span className="option">ოპერატორი</span>
          <span className="value">{props.operator}</span>
        </p>
      )}
      {props.scriptAuthor && (
        <p>
          <span className="option">სცენარის ავტორი</span>
          <span className="value">{props.scriptAuthor}</span>
        </p>
      )}
      {props.composer && (
        <p>
          <span className="option">კომპოზიტორი</span>
          <span className="value">{props.composer}</span>
        </p>
      )}
    </div>
  );
};

export default SearchParams;
