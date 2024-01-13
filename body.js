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
      <Card />
      <Card />
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
        <div id="Lone">
          <h2>Punjabi Dhaba</h2>
          <h4>4.6 ⭐</h4>
        </div>
        <div id="Ltwo">
          <h4>north india, punjabi</h4>
        </div>
        <div id="Lthree">
          <h5>shivam road, Amberpet</h5>
          <h5>🕔 36 mins</h5>
        </div>
      </div>
    </div>
  );
};
export default Body;
