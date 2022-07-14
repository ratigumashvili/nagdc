import React from "react";
import WarningIcon from "@material-ui/icons/Warning";

const NotFound = () => {
  return (
    <div className="main-content error-page">
      <div className="container">
        <div style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
          <WarningIcon className="icon" />
          <h1>გვერდი არ მოიძებნა</h1>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
