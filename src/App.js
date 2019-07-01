import React from "react";
import { Goods } from "./components/Goods";

function App() {
  return (
    <div className="wrapper">
      <Goods />
      <Goods isNone />
    </div>
  );
}

export default App;
