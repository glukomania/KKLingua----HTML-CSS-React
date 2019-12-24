const About = (props) => {
  return <div className="about">
        <div className="about-wrapper">
          <div className="photo">
            <img className="photo__picture" src="img/katka_new.png"/>
          </div>
                      
          <div className="abouttext">
            <div className="abouttitle">{props.allTexts.about.header}</div>
            <div>
              <ul>
                {props.allTexts.about.text.map(getAboutItem)}
              </ul>
            </div>
          </div>                
        </div>
      </div>
};
const getAboutItem = (item, index) => {
  return <li key={index}>{item}<br /></li>;
}
export default About;