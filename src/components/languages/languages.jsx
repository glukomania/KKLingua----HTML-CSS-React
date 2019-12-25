import {connect} from 'react-redux';
import { ActionCreator } from '../../store/reducers';

const Languages = (props) => {
  const langs = React.createRef();

  const handleLangsClick = (evt) => {
    if (evt.target.innerText === `En`) {
      props.changeLang(`english`);
    } else if (evt.target.innerText === `Rus`) {
      console.log(`not yet`);
    } else {
      props.changeLang(`czech`);
    }
  }

  return <div className="lang" ref={langs} onClick={handleLangsClick}>
  <a href="#" value="english">En</a>
  <a href="#">Rus</a>
  <a href="#">Cz</a>
</div>
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  allTexts: state. allTexts,
  lang: state.lang,
});

const mapDispatchToProps = (dispatch) => ({
  changeLang: (lang) => {
    dispatch(ActionCreator.changeLang(lang))
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Languages);