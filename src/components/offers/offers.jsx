const Offers = () => {
  return <div className="Co">
  <a name="co"></a>
  <div className="title">Co nabízíme</div>

  <div className="co--wrapper"> 
    <div className="co--texts left">
      <div className="co--head">
        Firemní / korporátní kurzy
      </div>
      <div className="co--text">
        <ul>
          <li>Maximální časová flexibilita lektora</li>
          <li>Lektor je vám k dispozici přímo v prostorách vaší firmy</li>
          <li>Plán kurzu přizpůsoben konkrétním potřebám klienta</li>
          <li>Vhodné pro náročné klienty</li>
          <li>První nezávazná lekce ZDARMA (30 minut)</li>
          <li>Tvorba individuálního studijního plánu v ceně</li>
          <li>Začátek kdykoli. Výuka v místě práce klienta.</li>
          <li>Cena: <br />700 Kč/60 minut (1 osoba),<br />
                  850 Kč/60 minut (2-5 lidí),<br />
                  900 Kč/90 minut (1 osoba),<br />
                  1100 Kč / 90 minut (2-5 lidí)</li>
          </ul>
      </div>
    </div>

    <div className="co--picture">
      <img src="img/pic1.png" className="co--image" />
    </div>
  </div>

  <hr />

  <div className="co--wrapper"> 
    <div className="co--picture left">
      <img src="img/pic2.jpg" className="co--image" />
    </div>
    <div className="co--texts">
      <div className="co--head">
      Individuální kurzy
      </div>
      <div className="co--text">
        <ul>
          <li>Výuka v prostorách jazykové školy</li>
          <li>První nezávazná lekce ZDARMA (30 minut)</li>
          <li>Tvorba individuálního studijního plánu v ceně</li>
          <li>Začátek kdykoli</li>
          <li>Cena:<br />500 Kč/60 minut (1 osoba),<br />
                  800 Kč/60 minut (2 osoby)</li>
        </ul>
      </div>
    </div>
  </div>

  <hr />

  <div className="co--wrapper"> 
    <div className="co--texts left">
      <div className="co--head">
      Skupinové kurzy
      </div>
      <div className="co--text">
        <ul>
          <li>Cena kurzu 12 lekcí/ 3000 Kč za osobu</li>
          <li>Počet studenti ve skupině: 5</li>
          <li>Maximální individuální přístup</li>
        </ul>
      </div>
    </div>

    <div className="co--picture">
      <img src="img/pic3.jpg" className="co--image" />
    </div>
  </div>

  <hr /> 

  <div className="co--wrapper"> 
    <div className="co--picture left">
      <img src="img/dalsi.png" className="co--image" />
    </div>
    <div className="co--texts">
      <div className="co--head">
      Další služby
      </div>
      <div className="co--text">
        <ul>
          <li>Příprava na certifikované zkoušky z českého jazyka (občanství/ trvalý pobyt): <br />60 minut / 600 Kč (1 osoba)</li>
          <li>Víkendové lekce: 60 minut / 900 Kč (1-2 osoby), 90 minut/1000 Kč (1-2 osoby)</li>
          <li>Jazykové konzultace: 45 minut / 400 Kč (1 osoba)</li>
          <li>Skype lekce: 60 minut / 600 Kč (1 osoba)</li>
          <li>Čeština pro Čechy (příprava k maturitě): 60 minut / 500 Kč / 1 osoba</li>
          <li>Jazykové korektury: 30 Kč/ NS</li>
          <li>Taneční lekce českých lidových tanců, individuální lekce pro pár: <br />60 minut / 600 Kč</li>
        </ul>
      </div>
    </div>
  </div>                     
</div>
};

export default Offers;