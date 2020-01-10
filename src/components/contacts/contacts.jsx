import Map from './test_map';

class Contacts extends React.PureComponent {

  render() {
    return <div className="contacts">
    <div className="title">{this.props.allTexts.contacts.title}</div>
    <div className="block-contacts">
        <div id="mapa" className="map">
          <div>
            <a href="https://en.mapy.cz/zakladni?x=14.4032202&y=50.0675621&z=16&source=addr&id=8967994">
              <img src='../img/map.png' className="map_picture"></img>
            </a>
          </div>
        </div>
        <div className="contacts-text">
            katerina.kocova@hotmail.com<br /><br />
            +420 728 606 618<br /><br />
            {this.props.allTexts.contacts.address}
            <br /><br />
            {this.props.allTexts.contacts.toGet}
        </div>
    </div>
  </div>
  }
};

export default Contacts;