const Menu = () => {
  return <div className="topnav" id="myTopnav">
  <div className="menu">
      <a href="#onas" className="active">O nás</a>
      <a href="#co">Co nabízíme</a>
      <a href="#proc">Proč my?</a>
      <a href="#corika">Co říkají</a>
  </div>
  
  <div className="logo">
      <img src="img/logo1.png" width="100px" />
  </div>
  
  <div className="logowhite">
      <img src="img/logo_white.png" width="100px" />
  </div>
  
  <a href="" className="icon">
    <i className="fa fa-bars"></i>
  </a>
</div>
};

export default Menu;