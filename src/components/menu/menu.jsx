import { Link } from "react-scroll";

const Menu = (props) => {
  return <div className="topnav" id="myTopnav">
  <div className="menu">
    <Link to="co">{props.allTexts.menu.suggest}</Link>
    <Link to="corika">{props.allTexts.menu.feedbacks}</Link>
  </div>
  
  <div className="logo">
      <img src="img/logo_white.png" width="100px" />
  </div>
  
  <div className="logowhite">
      <img src="img/logo_white.png" width="50px" />
  </div>
  
  <a href="" className="icon">
    <i className="fa fa-bars"></i>
  </a>
</div>
};

export default Menu;