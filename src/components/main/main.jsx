import Menu from '../menu/menu.jsx';
import Languages from '../languages/languages';
import Welcome from '../welcome/welcome';
import About from '../about/about';
import Offers from '../offers/offers';
import Why from '../why/why';
import References from '../references/references';
import Order from '../order/order';
import Footer from '../footer/footer';

class Main extends React.PureComponent {
  render() {
    return <section>
      <Menu />
      <Languages />

      <div className="container-fluid picture">
        <p className="slogan">Czech for foreigners</p>
        <p className="headoffer">Individual lessons &nbsp; • &nbsp; Group courses &nbsp; • &nbsp;  Corporative trainings</p>
      </div> 
    
      <Welcome />

      <About />

      <Offers />

      <Why />
    
      <div className="container partners">
        <p className="title">Mezi naše klienty patri firmy jako: </p>
        <img className="imgPartners" src="img/partners.png" />
      </div>
                  
      <div className="col-md-12 commonPhoto"></div>  
      <br /><br /><br />
              
      <div className="container">
          <hr className="orangeHr" />
          <img className="logoBottom" src="img/logo1.png" />
      </div> 
        
      <References />

      <Order />  

      <Footer />
    </section>
  }
};

export default Main;