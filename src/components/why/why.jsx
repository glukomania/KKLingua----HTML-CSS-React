const Why = (props) => {
  return <div className="why">
  <a name="proc"></a>
  <p className="titleWhy">{props.allTexts.why.header}</p>
  <div className="why-wrapper">
   
      <div className="why--colomn why--colomn__left">
          <img className="whyIcon" src="icons/cup.png" />
          <br />
          <p className="textWhy">{props.allTexts.why.texts.cup}</p>
      </div>
             
      <div className="why--colomn">
          <img className="whyIcon" src="icons/chat.png" />
          <br />
          <p className="textWhy">{props.allTexts.why.texts.chat}</p>
      </div>
             
      <div className="why--colomn">
          <img className="whyIcon" src="icons/book.png" />
          <br /> 
          <p className="textWhy">{props.allTexts.why.texts.book}</p>
      </div>
             
      <div className="why--colomn">
          <img className="whyIcon" src="icons/user.png" />
          <br />
          <p className="textWhy">{props.allTexts.why.texts.first}</p>
      </div>
             
      <div className="why--colomn why--colomn__right">
          <img className="whyIcon" src="icons/culture.png" />
          <br />
          <p className="textWhy">{props.allTexts.why.texts.culture}</p>
      </div>
    </div>
</div>
}

export default Why;