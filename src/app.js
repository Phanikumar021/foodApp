import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/header";
import Footer from "./components/footer";
import Body from "./components/body";

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
