import {feedbacks} from '../../data/feedbacks';
import { createRef } from 'react';
 
// const Dots = (props) => {

//   const generateDots = () => {
//     let dots = ``;
//     for (let i = 0; i < 7; i++) { 
//       if (i === props.activeNumber) {
//         dots = dots + `<i className="fa fa-circle fa-active"></i>`;
//       } else {
//         dots = dots + `<i className="fa fa-circle"></i>`;
//       }
//     }
//     return dots;
//   }
//   return <div className="dots">
//     {generateDots()} 
// </div>
// };

class References extends React.PureComponent {
  constructor() {
    super();
    this.fedbacksNumber = feedbacks.length;
    this.state = {
      text: feedbacks[0].feedbackText,
      index: 0,
    }

    this.feedbackTextRef = React.createRef();
    this.feedbackAuthorRef = React.createRef();

    this.handleRightClick = this.handleRightClick.bind(this);
    this.handleLeftClick = this.handleLeftClick.bind(this);
  }
  
  handleRightClick() {
    const index = this.state.index;

    if(index < (this.fedbacksNumber - 1)) {
      this.feedbackTextRef.current.innerHTML = feedbacks[index + 1].feedbackText;
      this.feedbackAuthorRef.current.innerHTML = feedbacks[index + 1].author;
      this.setState({index:index + 1});
    } else {
      this.feedbackTextRef.current.innerHTML = feedbacks[0].feedbackText;
      this.feedbackAuthorRef.current.innerHTML = feedbacks[0].author;
      this.setState({index: 0});
    }
  }

  handleLeftClick() {
    const index = this.state.index;
    console.log(index);

    if(index > 0) {
      this.feedbackTextRef.current.innerHTML = feedbacks[index - 1].feedbackText;
      this.feedbackAuthorRef.current.innerHTML = feedbacks[index - 1].author;
      this.setState({index:index - 1});
    } else {
      this.feedbackTextRef.current.innerHTML = feedbacks[feedbacks.length - 1].feedbackText;
      this.feedbackAuthorRef.current.innerHTML = feedbacks[feedbacks.length - 1].author;
      this.setState({index: feedbacks.length - 1});
    }
  }

  // setDot(number) {
  //   if (i === props.activeNumber) {
  //     dots = dots + `<i className="fa fa-circle fa-active"></i>`;
  //   } else {
  //     dots = dots + `<i className="fa fa-circle"></i>`;
  //   } 

  // }

  render() {
    console.log(`render`);
    let dots = [``, ``, ``, ``, ``, ``, ``, ``]
    return <div className="References">
      <div className="references-wrapper">
        <div className="title">Reference</div>
        <div className="reference--block">
          <div className="reference--block__left">
          </div>

          <div className="reference--block__center">
            <div className="array">
              <i className="fa fa-3x fa-caret-left" onClick={this.handleLeftClick}></i>
            </div>
            <div className="center--wrapper">
              <div className="text--wrapper">
                <div className="quote__icon">
                  <i className="fa fa-2x fa-quote-left"></i>
                </div>
                <div className="reference--text" ref={this.feedbackTextRef}>{this.state.text}</div>
                <div className="quote__icon">
                  <i className="fa fa-2x fa-quote-right"></i>
                </div>
              </div>
              
              <div className="reference-author" ref={this.feedbackAuthorRef}>{feedbacks[0].author}</div>
              <div className="dots">
                {dots.map((item, index) => index === this.state.index ? <i className="fa fa-circle fa-active"></i> : <i className="fa fa-circle"></i>)} 
              </div>
            </div>
            <div className="array">
              <i className="fa fa-3x fa-caret-right" onClick={this.handleRightClick}></i>
            </div>
          </div>

          <div className="reference--block__right">
          </div>
        </div>
      </div>
    </div>
  }
}

export default References;