const Body = () => {
  return (
    <div id="body">
      <div id="search">
        <input type="search" name="" id="find" placeholder="   search ..." />
        <input type="submit" value="search" id="btn" />
      </div>
      <Cardbody />
    </div>
  );
};

const Cardbody = () => {
  return (
    <div id="catalog">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
};

const Card = () => {
  return (
    <div id="card">
      <img src={require("./utilities/food1.jpg")} alt="food" />
      <div id="data">
        <h3>Punjabi Dhaba</h3>
        <h5>north india, punjabi</h5>
      </div>
    </div>
  );
};
export default Body;
