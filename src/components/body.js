import resdata from "../../utilities/data";
import { CDN_URL } from "../../utilities/constants ";
import { useState } from "react";

const Body = () => {
  const [restlist, setrestlist] = useState(resdata);
  return (
    <div id="body">
      <div id="top-body">
        <div id="top-rated">
          <button
            onClick={() => {
              const filteredlist = resdata.filter((val) => {
                return val.info.avgRating > 4;
              });
              setrestlist(filteredlist);
            }}
          >
            Top rated
          </button>
        </div>
        <div id="search">
          <input type="search" name="" id="find" placeholder="   search ..." />
          <input type="submit" value="search" id="btn" />
        </div>
      </div>
      <Cardbody restaurantdata={restlist} />
    </div>
  );
};

const Cardbody = (props) => {
  return (
    <div id="catalog">
      {props.restaurantdata.map((restaurant) => {
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
          src={CDN_URL + props.restaurantdata.info.cloudinaryImageId}
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
