import Map from './test_map';

class Contacts extends React.PureComponent {

  render() {
    return <div className="contacts">
    <div className="title">{this.props.allTexts.contacts.title}</div>
    <div className="block-contacts">
        <div id="mapa" className="map">
          <Map />
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