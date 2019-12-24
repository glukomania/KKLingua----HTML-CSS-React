const Offers = (props) => {
  return <div className="Co">
  <a name="co"></a>
  <div className="title">{props.allTexts.offers.header}</div>

  <div className="co--wrapper"> 
    <div className="co--texts left">
      <div className="co--head">
        {props.allTexts.offers.offers[0].header}
      </div>
      <div className="co--text">
        <ul>
        {props.allTexts.offers.offers[0].text.map(getOfferItem)}
        </ul>
      </div>
    </div>

    <div className="co--picture">
      <img src="img/pic1.png" className="co--image" />
    </div>
  </div>

  <hr />

  <div className="co--wrapper"> 
    <div className="co--picture">
      <img src="img/pic2.jpg" className="co--image" />
    </div>
    <div className="co--texts">
      <div className="co--head">
      {props.allTexts.offers.offers[1].header}
      </div>
      <div className="co--text">
        <ul>
        {props.allTexts.offers.offers[1].text.map(getOfferItem)}
        </ul>
      </div>
    </div>
  </div>

  <hr />

  <div className="co--wrapper"> 
    <div className="co--texts left">
      <div className="co--head">
        {props.allTexts.offers.offers[2].header}
      </div>
      <div className="co--text">
        <ul>
          {props.allTexts.offers.offers[2].text.map(getOfferItem)}
        </ul>
      </div>
    </div>

    <div className="co--picture">
      <img src="img/pic3.jpg" className="co--image" />
    </div>
  </div>

  <hr /> 

  <div className="co--wrapper"> 
    <div className="co--picture">
      <img src="img/dalsi.png" className="co--image" />
    </div>
    <div className="co--texts">
      <div className="co--head">
        {props.allTexts.offers.offers[3].header}
      </div>
      <div className="co--text">
        <ul>
          {props.allTexts.offers.offers[3].text.map(getOfferItem)}
        </ul>
      </div>
    </div>
  </div>                     
</div>
};

const getOfferItem = (item, index) => {
  return <li key={index}>{item}</li>;
}

export default Offers;