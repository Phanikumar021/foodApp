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
    </div>
  );
};

const Card = () => {
  return <div id="card"></div>;
};
export default Body;
