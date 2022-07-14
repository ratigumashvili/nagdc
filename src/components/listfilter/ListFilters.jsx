import SearchFilterBtn from "../searchFilterBtn/SearchFilterBtn";
import "./listfilter.scss";

const ListFilters = (props) => {
  return (
    <div className="list-filter">
      <form onSubmit={(e) => e.preventDefault()}>
        <input type="text" placeholder="სახელწოდება" />
        <input type="number" min={0} placeholder="წელი" />
        <div className="date-container">
          <div className="item1">
            <input
              type="number"
              min={0}
              placeholder="წელი (დან)"
              style={{ marginBottom: "10px" }}
            />
          </div>
          <div className="item2">
            <input
              type="number"
              min={0}
              placeholder="წელი (მდე)"
              style={{ marginBottom: "10px" }}
            />
          </div>
        </div>
        <input type="text" placeholder="მწარმოებელი სტუდია" />
        <input type="text" placeholder="რეჟისორი" />
        <input type="text" placeholder="ოპერატორი" />
        <input type="text" placeholder="სცენრაის ავტორი" />
        <input type="text" placeholder="კომპოზიტორი" />
        <SearchFilterBtn onClick={props.onClick} />
      </form>
    </div>
  );
};

export default ListFilters;
