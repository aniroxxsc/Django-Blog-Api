import React, {Component} from 'react';
import  { BrowserRouter as Router,Switch, Route, Link} from 'react-router-dom';
import './Nav.css';
import HomePage from './HomePage';



class Nav extends React.Component  {
  render(){
  return (
 
    <div>
     
      <ul>
       <li><Link to='/'>HomePage</Link></li>
       <li><Link to='/form/blogeditor'>Blogeditor</Link></li> 
       <li><Link  to='/mainarea'>SignIn</Link></li> 
       <li><Link to='/blogspart/blogdisplay'>Blogdisplay</Link></li>
      </ul>
       
      
      
   
    </div>
    
  );
}
}

export default Nav;
