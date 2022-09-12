import React,{useRef, useState} from "react";

const Olculer = () => {
const divRef = useRef(null); 

function handleClick() {
  divRef.current.nextSibling.classList.toggle('active');
  divRef.current.classList.toggle('active')
  divRef.current.classList.toggle('passive')
}
  return (
    <React.Fragment>
      <div className={`step step-2`} ref={divRef}>
        <div className="atrium">
          <span>Ölçüler</span>
        </div>
        <div className="dimensions">
          <div className="subDim" onClick={handleClick}>
            <p>35x60</p>
            <p >254 DPI</p>
          </div>
          <div className="subDim" onClick={handleClick}>
            <p>25x70</p>
            <p>254 DPI</p>
          </div>
          <div className="subDim" onClick={handleClick}>
            <p>30x80</p>
            <p>254 DPI</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Olculer;
