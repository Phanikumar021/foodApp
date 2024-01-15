import resdata from "./data";
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
      {resdata.map((restaurant) => {
        return <Card key={restaurant.info.id} restaurantdata={restaurant} />;
      })}
    </div>
  );
};

const Card = (props) => {
  return (
    <div id="card">
      <div id="imgcontainer">
        <img
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
            props.restaurantdata.info.cloudinaryImageId
          }
          alt="food"
        />
      </div>
      <div id="data">
        <div id="Lone">
          <h2>{props.restaurantdata.info.name}</h2>
          <h4>{props.restaurantdata.info.avgRating} ⭐</h4>
        </div>
        <div id="Ltwo">
          <h4>{props.restaurantdata.info.cuisines.join(" ,")}</h4>
        </div>
        <div id="Lthree">
          <h6>
            {props.restaurantdata.info.locality}
            <br />
            {props.restaurantdata.info.areaName}
          </h6>
          <h5>🕔 {props.restaurantdata.info.sla.deliveryTime}mins</h5>
        </div>
      </div>
    </div>
  );
};
export default Body;
