const Order = (props) => {
  return     <div className="buttonPosition"> 
  <a name="objednat"></a> 
      <a href="mailto:info@kklingua.cz">
        <button type="button" className="buttonOrder">
          <i className="fa fa-check-circle">
          </i>
          &nbsp;&nbsp;&nbsp;{props.allTexts.order}
        </button>
      </a>
  </div> 
};

export default Order;
