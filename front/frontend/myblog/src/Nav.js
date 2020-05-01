import React, {Component} from 'react';
import  { BrowserRouter as Router,Switch, Route, Link} from 'react-router-dom';
import mainarea from './mainarea';
import logo from './logo.svg';
import './Nav.css';
import Mainpage from './form/blogeditor';
import blogdisplay from './blogspart/blogdisplay';



function Nav() {
  return (
 
    <div>
     <Router>
      <ul>
      
       <li><Link to='/form/blogeditor'>blogeditor</Link></li> 
       <li><Link  to='/mainarea'>SignIn</Link></li>
       <li><a href="#">SignUp</a></li>
       <li><Link to='/blogspart/blogdisplay'>blogdisplay</Link></li>
      </ul> 
      <Switch>   
       <Route exact path='/form/blogeditor' component={Mainpage}></Route>
       <Route exact path='/mainarea' component={mainarea}></Route>
       <Route exact path='/blogspart/blogdisplay' component={blogdisplay}></Route>
     </Switch> 
      
     </Router>
    </div>
    
  );
}

export default Nav;
