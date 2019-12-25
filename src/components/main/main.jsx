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
  };

  render() {
    console.log(this.props.allTexts);
    return <section>
      <Menu allTexts={this.props.allTexts}/>
      <Languages />

      <div className="picture">
        <div className="slogan">{this.props.allTexts.title}</div>
        <div className="headoffer">{this.props.allTexts.offersTitles}</div>
      </div> 

      <About allTexts={this.props.allTexts}/>

      <Offers allTexts={this.props.allTexts}/>

      <Why allTexts={this.props.allTexts}/>
    
      <div className="partners">
        <p className="title">{this.props.allTexts.partners}</p>
        <img className="imgPartners" src="img/partners.png" />
      </div>
                   
      <div className="commonPhoto"></div>  
             
       <div className="logo-wrapper">
          <img className="logoBottom" src="img/logo1.png" />
          <hr className="orangeHr" />
      </div> 
        
      <References allTexts={this.props.allTexts}/>

      <Order allTexts={this.props.allTexts}/>  

      <Contacts allTexts={this.props.allTexts}/>

      <Footer/> 
    </section>
  }
};

const mapStateToDispatch = (state, ownProps) => Object.assign({}, ownProps, {
  lang: state.lang,
  allTexts: state.allTexts,
});

const mapDispatchToProps = {

}

export default connect(mapStateToDispatch, mapDispatchToProps)(Main);