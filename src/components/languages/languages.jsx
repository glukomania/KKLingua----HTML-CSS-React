import {connect} from 'react-redux';
import {ActionCreator} from '../../store/reducers';
import {Link} from 'react-router-dom';

const Languages = (props) => {
  const langs = React.createRef();

  const handleLangsClick = (evt) => {
    if (evt.target.innerText === `En`) {
      props.changeLang(`english`);
    } else if (evt.target.innerText === `Rus`) {
      props.changeLang(`russian`);
    } else {
      props.changeLang(`czech`);
    }
  }

  return <div className="lang" ref={langs} onClick={handleLangsClick}>
  <Link to="/en" className={props.lang === `english` ? `langActive` : ``}>En</Link>
  <Link to="/ru" className={props.lang === `russian` ? `langActive` : ``}>Rus</Link>
  <Link to="/cz" className={props.lang === `czech` ? `langActive` : ``}>Cz</Link>
</div>
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  allTexts: state. allTexts,
  lang: state.lang,
});

const mapDispatchToProps = (dispatch) => ({
  changeLang: (lang) => {
    dispatch(ActionCreator.changeLang(lang));
    dispatch(ActionCreator.changeTexts(lang));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Languages);