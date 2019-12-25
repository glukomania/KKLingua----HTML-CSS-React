import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Main from '../main/main.jsx';

const App = () => {
  return <Router>
    <Switch>
      <Route path="/" exact render={() => <Main lang={`czech`}/>} />
      <Route path="/cz" exact render={() => <Main lang={`czech`}/>} />
      <Route path="/en" exact render={() => <Main lang={`english`}/>} />
      <Route path="/ru" exact render={() => <Main lang={`russian`}/>} />
      <Route render={() => <div style={{textAlign: `center`, fontSize: `70px`, padding: `100px 60px`, color: `#ccc`}}>Page not found</div>} />
    </Switch>
  </Router>
};

export default App;