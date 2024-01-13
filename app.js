import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./header";
import Footer from "./footer";
import Body from "./body";

const App = () => {
  return (
    <div>
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(<App />);
