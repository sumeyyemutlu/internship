import React from "react";
import collection1 from "../images/collection-icon-1.png";
import collection2 from "../images/collection-icon-2.png";
import collection3 from "../images/collection-icon-3.png";
import collection4 from "../images/collection-icon-4.png";
import collection5 from "../images/collection-icon-5.png";
import collection6 from "../images/collection-icon-6.png";

const Content = () => {
  return (
    <React.Fragment>
      <div className="moreThenOne" area="collectionTitle">
        <img className="imgg" src={collection1} alt="ss" />
        <div className="iconClass">
          <i className="fas fa-image"></i>
          <i className="fa-solid fa-video"></i>
        </div>
      </div>
      <div className="moreThenOne" area="collectionTitle">
        <img className="imgg" src={collection2} alt="ss" />
        <div className="iconClass">
          <i className="fas fa-image"></i>
          <i className="fa-solid fa-video"></i>
        </div>
      </div>
      <div className="moreThenOne" area="collectionTitle">
        <img className="imgg" src={collection3} alt="ss" />
        <div className="iconClass">
          <i className="fas fa-image"></i>
          <i className="fa-solid fa-video"></i>
        </div>
      </div>
      <div className="moreThenOne" area="collectionTitle">
        <img className="imgg" src={collection4} alt="ss" />
        <div className="iconClass">
          <i className="fas fa-image"></i>
          <i className="fa-solid fa-video"></i>
        </div>
      </div>
      <div className="moreThenOne" area="collectionTitle">
        <img className="imgg" src={collection5} alt="ss" />
        <div className="iconClass">
          <i className="fas fa-image"></i>
          <i className="fa-solid fa-video"></i>
        </div>
      </div>
      <div className="moreThenOne" area="collectionTitle">
        <img className="imgg" src={collection6} alt="ss" />
        <div className="iconClass">
          <i className="fas fa-image"></i>
          <i className="fa-solid fa-video"></i>
        </div>
      </div>
          
    </React.Fragment>
  );
};

export default Content;
