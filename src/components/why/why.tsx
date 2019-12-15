import * as React from 'react'

let proc: string = 'proc';

const Why = () => {
  return <div className="container-fluid why">
  <a name={proc}></a>
  <p className="titleWhy">Proč si vybrat práve nás?</p>
  <div className="row">
      <div className="col-md-1"></div>
             
      <div className="col-md-2">
          <img className="whyIcon" src="icons/cup.png" />
          <br /><br />
          <p className="textWhy"> Vždycky příjemná a take pohodová atmosféra při učení, kvalifikovaní lektoři</p>
      </div>
             
      <div className="col-md-2">
          <img className="whyIcon" src="icons/chat.png" />
          <br /><br />
          <p className="textWhy"> Interaktivní, názorná výuka, čeština hrou, netradiční výukové metody - rozvoj kreativity a tvořivosti</p>
      </div>
             
      <div className="col-md-2">
          <img className="whyIcon" src="icons/book.png" />
          <br /><br /> 
          <p className="textWhy"> Důraz na rovnoměrný rozvoj čtení, psaní, poslechu i konverzace v každé vyučovací hodině</p>
      </div>
             
      <div className="col-md-2">
          <img className="whyIcon" src="icons/user.png" />
          <br /><br />
          <p className="textWhy"> První lekce zcela zdarma - vstupní test a úvodní konverzace, doporučení ohledně volby vhodného kurzu, individuální přístup</p>
      </div>
             
      <div className="col-md-2">
          <img className="whyIcon" src="icons/culture.png" />
          <br /><br />
          <p className="textWhy"> Volný vstup na turistické a kulturní aktivity pro studenty skupinových kurzů, neformální prostředí</p>
      </div>
             
  <div className="col-md-1"></div>
  </div>
</div>
}

export default Why;