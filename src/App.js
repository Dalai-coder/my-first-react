import React from "react";
import Products from "./components/Products";
import "./App.css";
import Products1 from "./components/Products1";
import Counter from "./components/Counter";

const App = () => {
  return (
    <div className="App">
      <h1>Tand sanal bolgoh kinonii jagsaalt</h1>
      <p>Adal yvdalt,tulaant</p>
      <Products1 />
    </div>
  );
};

export default App;
