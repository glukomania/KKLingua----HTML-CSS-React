import Menu from '../menu/menu.jsx';
import About from '../about/about';
import Offers from '../offers/offers';
import Why from '../why/why';
import References from '../references/references';
import Order from '../order/order';
import Footer from '../footer/footer';
import Contacts from '../contacts/contacts';

class Main extends React.PureComponent {
  render() {
    return <section>
      <Menu />
      {/* <Languages /> */}

      <div className="picture">
        <div className="slogan">Kateřina Kočová</div>
        <div className="headoffer">Čeština pro cizince v Praze</div>
      </div> 

      <About />

      <Offers />

      <Why />
    
      <div className="partners">
        <p className="title">Mezi mé klienty patří firmy jako:</p>
        <img className="imgPartners" src="img/partners.png" />
      </div>
                  
      <div className="commonPhoto"></div>  
              
      <div className="logo-wrapper">
          <img className="logoBottom" src="img/logo1.png" />
          <hr className="orangeHr" />
      </div> 
        
      <References />

      <Order />  

      <Contacts />

      <Footer />
    </section>
  }
};

export default Main;