import React,{useState} from 'react'
import gri from "../images/gri.png";
import mavi from "../images/mavi.png";
import pembe from "../images/pembe.png";
import kirmizi from "../images/kirmizi.png";
import yesil from "../images/yesil.jpg";
import krem from "../images/krem.jpg";
import sari from "../images/sari.png";
import mor from "../images/mor.jpg";


const Kumaslar = () => {
  let renkler = [gri, mavi, kirmizi, mor, yesil, sari, pembe, krem]
  let [showPreview, setShowPreview] = useState(renkler[0]);

  return (
    <React.Fragment>
      <div className={`step step-4`} >
        <div className="atrium">
          <span>Kumaşlar</span>
        </div>
        <div className="content">
        {renkler.map((renk, index) => (
            <div className="moreThenOne" area="collectionTitle">
          
              <img
                className="imgg"
                src={renk}
                key={index}
                alt="ss"
                onClick={() => setShowPreview(renk)}
              />
        
              <div className="price">
                <span>Renk</span>
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
              <button type="button" className="button">
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
  )
}

export default Kumaslar;
