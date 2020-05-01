import React from 'react';
import { BrowserRouter as Router,Switch, Route, Link} from 'react-router-dom';
import './App.css';
import Nav from './Nav';
function App(){
    return(
        <Router>
            
        <div >
          <div><Link to='/'/></div>
          <Switch>
              <Route  path='/' component={Nav}>
                  <Nav></Nav>
              </Route>
          </Switch>
            Mainpage ...
            
        </div>
        </Router>
    );

}
export default App;
