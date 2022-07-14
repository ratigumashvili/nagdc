import { useState, useEffect, useRef } from "react";
import Dropdown from "../dropdown/Dropdown";
import UpdateIcon from "@material-ui/icons/Update";
import SortByAlphaIcon from "@material-ui/icons/SortByAlpha";
import "./listsorting.scss";

const ListSorting = () => {
  const options = [
    { label: "15", value: "15" },
    { label: "30", value: "30" },
    { label: "60", value: "60" },
  ];

  const [value, setValue] = useState("15");
  const [activeByAlphabet, setActiveByAlphabet] = useState(false);
  const [activeByDate, setActiveByDate] = useState(false);

  const handleChange = (event) => {
    console.log(setValue(event.target.value));
  };

  function handleAlphabet() {
    setActiveByAlphabet((prevState) => !prevState);
    setActiveByDate(false);
  }

  function handleActiveByDate() {
    setActiveByDate((prevState) => !prevState);
    setActiveByAlphabet(false);
  }

  const notifyRef = useRef(null);

  useEffect(() => {
    if (activeByAlphabet) {
      notifyRef.current.innerText = "სორტირებულია ანბანის მიხედვით";
    } else if (activeByDate) {
      notifyRef.current.innerText = "სორტირებულია თარიღის მიხედვით";
    } else {
      notifyRef.current.innerText = "";
    }
  }, [activeByAlphabet, activeByDate]);

  return (
    <div className="sorting-container">
      <div>
        <Dropdown
          label=""
          appended="ნაჩვენებია "
          options={options}
          value={value}
          onChange={handleChange}
          prepended=" ჩანაწერი"
        />
      </div>
      <div className="sorting-params">
        <span ref={notifyRef} style={{fontSize: "0.85rem"}}></span>
        <button
          className={
            !activeByAlphabet ? "sorting-params-btn" : "sorting-params-btn active"
          }
          title="სორტირება ანბანის მიხედვით"
          onClick={handleAlphabet}
        >
          <SortByAlphaIcon className="icon" />
        </button>
        <button
          className={
            !activeByDate ? "sorting-params-btn" : "sorting-params-btn active"
          }
          title="სორტირება თარიღის მიხედვით"
          onClick={handleActiveByDate}
        >
          <UpdateIcon className="icon" />
        </button>
      </div>
    </div>
  );
};

export default ListSorting;
