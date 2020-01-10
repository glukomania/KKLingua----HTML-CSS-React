import Menu from '../menu/menu.jsx';
import About from '../about/about';
import Offers from '../offers/offers';
import Why from '../why/why';
import References from '../references/references';
import Order from '../order/order';
import Footer from '../footer/footer';
import Contacts from '../contacts/contacts';
import Languages from '../languages/languages';
import {connect} from 'react-redux';

class Main extends React.PureComponent {
  constructor(props) {
    super(props);
    console.log(props.lang);
    
  };

  render() {
    let allTexts = this.props.initialTexts;
    if (!allTexts) {
      allTexts = this.props.allTexts;
    }
    return <section>
      <Menu allTexts={allTexts}/>
      <Languages lang={this.props.lang}/>

      <div className="picture">
        <div className="slogan">{allTexts.title}</div>
        <div className="headoffer">{allTexts.offersTitles}</div>
      </div> 

      <About allTexts={allTexts}/>

      <Offers allTexts={allTexts}/>

      <Why allTexts={allTexts}/>
    
      <div className="partners">
        <p className="title">{allTexts.partners}</p>
        <img className="imgPartners" src="img/partners.png" />
      </div>
                   
      <div className="commonPhoto"></div>  
             
       <div className="logo-wrapper">
          <img className="logoBottom" src="img/logo1.png" />
          <hr className="orangeHr" />
      </div> 
        
      <References allTexts={allTexts}/>

      <Order allTexts={allTexts}/>  

      <Contacts allTexts={allTexts}/>

      <Footer/> 
    </section>
  }
};

const mapStateToDispatch = (state, ownProps) => Object.assign({}, ownProps, {
  allTexts: state.allTexts,
});

const mapDispatchToProps = {

}

export default connect(mapStateToDispatch, mapDispatchToProps)(Main);