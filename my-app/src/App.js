import React from "react";
import Collection from "./components/Collection";
import "./css/style.css";
import Olculer from "./components/Olculer";
import Paketler from "./components/Paketler";
import Kumaslar from "./components/Kumaslar";


const App = () => {

  return (
    <div className="containerDiv">
      <div className="subcontainer">
      <Collection />
      <Olculer />
      <Paketler />
      <Kumaslar/>

      </div>
   
    </div>
  );
};

export default App;
