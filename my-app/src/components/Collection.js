import React, { useState,useRef} from "react";
import "../css/style.css";

import collection1 from "../images/collection-icon-1.png";
import collection2 from "../images/collection-icon-2.png";
import collection3 from "../images/collection-icon-3.png";
import collection4 from "../images/collection-icon-4.png";
import collection5 from "../images/collection-icon-5.png";
import collection6 from "../images/collection-icon-6.png";

const Collection = () => {
  const [toggleClass, setToggleClass] = useState(false);
  const divRef = useRef(null);
  
  function handleClick() {
    divRef.current.nextSibling.classList.toggle('active');
    
    setToggleClass((toggleClass) => !toggleClass);
  }
  
  let toggleClassCheck = toggleClass ? 'passive' : 'active';

  return (
    <React.Fragment>
      <div className={`step ${toggleClassCheck}`} ref={divRef}>
        <div className="atrium">
          <span>Collection</span>
        </div>
        <div className="content">
          <div
            className="moreThenOne"
            area="collectionTitle"
            onClick={handleClick}
          >
            <img className="imgg" src={collection1} alt="ss" />
            <div className="iconClass">
              <i className="fas fa-image"></i>
              <i className="fa-solid fa-video"></i>
            </div>
          </div>
          <div
            className="moreThenOne"
            area="collectionTitle"
            onClick={handleClick}
          >
            <img className="imgg" src={collection2} alt="ss" />
            <div className="iconClass">
              <i className="fas fa-image"></i>
              <i className="fa-solid fa-video"></i>
            </div>
          </div>
          <div
            className="moreThenOne"
            area="collectionTitle"
            onClick={handleClick}
          >
            <img className="imgg" src={collection3} alt="ss" />
            <div className="iconClass">
              <i className="fas fa-image"></i>
              <i className="fa-solid fa-video"></i>
            </div>
          </div>
          <div
            className="moreThenOne"
            area="collectionTitle"
            onClick={handleClick}
          >
            <img className="imgg" src={collection4} alt="ss" />
            <div className="iconClass">
              <i className="fas fa-image"></i>
              <i className="fa-solid fa-video"></i>
            </div>
          </div>
          <div
            className="moreThenOne"
            area="collectionTitle"
            onClick={handleClick}
          >
            <img className="imgg" src={collection5} alt="ss" />
            <div className="iconClass">
              <i className="fas fa-image"></i>
              <i className="fa-solid fa-video"></i>
            </div>
          </div>
          <div
            className="moreThenOne"
            area="collectionTitle"
            onClick={handleClick}
          >
            <img className="imgg" src={collection6} alt="ss" />
            <div className="iconClass">
              <i className="fas fa-image"></i>
              <i className="fa-solid fa-video"></i>
            </div>
          </div>
        </div>
      </div>
        
    </React.Fragment>
  );
};

export default Collection;
