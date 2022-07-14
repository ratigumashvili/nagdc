import React from "react";
import { useState, useEffect } from "react";
import Data from "../../src/data";
import ListItem from "../components/listItem/ListItem";
import ListFilters from "../components/listfilter/ListFilters";
import Paginate from "../components/paginate/Paginate";
import SearchParams from "../components/searchParams/SearchParams";
import ListSorting from "../components/listsorting/ListSorting";

const List = () => {
  
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  const [showSearchParams, setShowSearchParams] = useState(false);

  function showParamsHandler() {
    setShowSearchParams(true);
  }

  function clearParamsHandler() {
    setShowSearchParams(false);
  }

  return (
    <>
      <div className="main-content list-page">
        <div className="container">
          <div className="title-holder">
            <h2 className="title">ჩანაწერები</h2>
          </div>
          {showSearchParams && (
            <SearchParams
              title="პირველი მერცხალი"
              year="1975"
              yearFrom=""
              yearTo=""
              manufacturer="კინოსტუდია ქართული ფილმი"
              director="ნანა მჭედლიძე"
              operator="გიორგი ჭელიძე"
              scriptAuthor="ლევან ჭელიძე"
              composer="ჯანსუღ კახიძე"
              onClick={clearParamsHandler}
            />
          )}
          <div className="row">
            <div className="filters-wrapper">
              <ListFilters onClick={showParamsHandler} />
            </div>
            <div className="main-content-wrapper">
              <ListSorting />
              <div className="main-content">
                {Data.map((item) => (
                  <ListItem
                    key={item.id}
                    poster={item.poster}
                    title={item.title}
                    variety={item.variety}
                    director={item.director}
                    operator={item.operator}
                    published={item.published}
                  />
                ))}
              </div>
              <Paginate />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default List;
