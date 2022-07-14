import { useEffect } from "react";
import SingleData from "../../src/singledata";
import SingleItem from "../components/singleItem/SingleItem";
import "../App.scss";

const Single = () => {
  
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  
  return (
    <div className="main-content single-page">
      {SingleData.map((item) => (
        <SingleItem key={item.id} {...item} />
      ))}
    </div>
  );
};

export default Single;
