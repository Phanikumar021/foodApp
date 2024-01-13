import { FaCartShopping } from "react-icons/fa6";

const Header = () => {
  return (
    <div id="head">
      <img
        src={require("./utilities/5506162-photoaidcom-cropped.jpg")}
        alt="logo"
      />
      <ul>
        <li>Home</li>
        <li>subscribe</li>
        <li>Careers</li>
        <li>Contact</li>
        <li>Join us</li>
        <li>
          <FaCartShopping />
        </li>
      </ul>
    </div>
  );
};

export default Header;
