import Map from './test_map';

class Contacts extends React.PureComponent {


  render() {
    return <div className="contacts">
    <div className="title">Kontakt</div>
    <div className="block-contacts">
        <div id="mapa" className="map">
          <Map />
        </div>
        <div className="contacts-text">
            katerina.kocova@hotmail.com <br /><br />
            +420 728 606 618<br /><br />
            <b>Adresa jazykové školy:</b> KK Lingua, Ostrovského 253/3, Praha 5, 150 00. <br />
            <br />
            <b>Jak se k nám dostanete?</b> - metro Anděl/ Na Knížecí, 3 minuty od metra - budova Ženské domovy, 5. patro, místnost 5065.
        </div>
    </div>
  </div>
  }
};

export default Contacts;