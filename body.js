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
      <Card
        name="punjabi dhaba"
        rating="4.6"
        dishes="north india, punjabi"
        area="shivam road, Amberpet"
        time="20 mins"
      />
      <Card
        name="KFC"
        rating="3.8"
        dishes="american, mexcican"
        area="necklace road,tank bund"
        time="36 mins"
      />
      <Card
        name="domino's"
        rating="4.1"
        dishes="pizzas, burgers"
        area="rtc cross road, musheerabad"
        time="18 mins"
      />
      <Card
        name="chinese town"
        rating="3.6"
        dishes="chinese fast food"
        area="himayath nagar"
        time="25 mins"
      />
      <Card
        name="babai hotel"
        rating="3.9"
        dishes="south india, tiffins"
        area="tarnaka"
        time="21 mins"
      />
      <Card
        name="farm fresh"
        rating="3.6"
        dishes="fruit juices, milk shakes"
        area="nallakunta, vidyanagar"
        time="16 mins"
      />
      <Card
        name="muskati"
        rating="4.4"
        dishes="ice creams"
        area="shivam road, Amberpet"
        time="24 mins"
      />
      <Card
        name="annapurna mess"
        rating="4.6"
        dishes="south indian meals"
        area="chikadpally "
        time="29 mins"
      />
      <Card
        name="paradise"
        rating="3.6"
        dishes="north india, chinese"
        area="patnee center, secendrabad"
        time="38 mins"
      />
      <Card
        name="iyengar backers"
        rating="4.3"
        dishes="snacks, cakes"
        area="ramnagar gundu"
        time="12 mins"
      />
      <Card
        name="thick shake"
        rating="4.1"
        dishes="milk shakes, pastries"
        area="shivam road, Amberpet"
        time="18 mins"
      />
      <Card
        name="dosa kart"
        rating="4.3"
        dishes="south india, dosas"
        area="lalitha nagar"
        time="21 mins"
      />
    </div>
  );
};

const Card = ({ name, rating, dishes, area, time }) => {
  return (
    <div id="card">
      <img src={require("./utilities/food1.jpg")} alt="food" />
      <div id="data">
        <div id="Lone">
          <h2>{name}</h2>
          <h4>{rating} ⭐</h4>
        </div>
        <div id="Ltwo">
          <h4>{dishes}</h4>
        </div>
        <div id="Lthree">
          <h5>{area}</h5>
          <h5>🕔 {time}</h5>
        </div>
      </div>
    </div>
  );
};
export default Body;
