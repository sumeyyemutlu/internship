import React, { useRef, useState } from "react";
import collection1 from "../images/collection-icon-1.png";
import collection2 from "../images/collection-icon-2.png";
import collection3 from "../images/collection-icon-3.png";

const Paketler = () => {
  const images = [collection1, collection2, collection3];

  let [showPreview, setShowPreview] = useState(images[0]);

  const divRef = useRef(null);

  function handleClick() {
    divRef.current.nextSibling.classList.toggle("active");
    divRef.current.classList.toggle("active");
    divRef.current.classList.toggle("passive");
  }

  return (
    <React.Fragment>
      <div className={`step step-3`} ref={divRef}>
        <div className="atrium">
          <span>Paketler</span>
        </div>
        <div className="content">
          {images.map((image, index) => (
            <div className="moreThenOne" area="collectionTitle">
              <img
                className="imgg"
                src={image}
                key={index}
                alt="ss"
                onClick={() => setShowPreview(image)}
              />
              <div className="price">
                <span className="subPrice"> GOLD AİLE PAKETİ</span>
                <span>1.200 TL</span>
              </div>
            </div>
          ))}
          <div className="preview">
            <div className="preview-title">
              <h5> ÖNİZLEME </h5>
            </div>
            <div className="preview-img">
              <img src={showPreview} alt="ss"></img>
            </div>
          </div>
          <div className="next">
            <div className="nextButton">
              <button type="button" className="button" onClick={handleClick}>
                İLERİ
              </button>
            </div>
            <div className="totalPrice">
              <p>TOPLAM TUTAR</p>
              <span>
                1.200 TL <i class="fa-solid fa-bag-shopping"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Paketler;
