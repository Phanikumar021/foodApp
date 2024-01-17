import { FaCartShopping } from "react-icons/fa6";

const Header = () => {
  return (
    <div id="head">
      <div>
        <img
          src={require("../../utilities/5506162-photoaidcom-cropped.jpg")}
          alt="logo"
        />
        <h1>ZOMATO</h1>
      </div>
      <ul>
        <li>Home</li>
        <li>Subscribe</li>
        <li>Careers</li>
        <li>Contact</li>
        <li>Careers</li>
        <li>
          <FaCartShopping />
        </li>
      </ul>
    </div>
  );
};

export default Header;
