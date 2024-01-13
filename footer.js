const Footer = () => {
  return (
    <div id="foot">
      <div id="Rone">
        <img
          src={require("./utilities/5506162-photoaidcom-cropped.jpg")}
          alt="logo"
        />
        <h1>FOODER</h1>
      </div>
      <div id="Rtwo">
        <h2>ADDRESS</h2>
        <p>
          Unit No. 201, 5th Floor, B-2-293/82/A/58/A, Road No.8, Pavani Equinox,
          Jubilee Hills, Hyderabad, 500033
        </p>
      </div>
      <div id="Rthree">
        <h2>NAVIGATION</h2>
        <ul>
          <li>Home</li>
          <li>subscribe</li>
          <li>Careers</li>
          <li>Contact</li>
          <li>Join us</li>
          <li>cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
