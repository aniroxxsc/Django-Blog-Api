import React, {Component} from 'react';
import { BrowserRouter as Router,Switch, Route, Link} from 'react-router-dom';
import './mainarea.css';
import blog from './blog.png';
import Nav from './Nav';


export default function mainarea(props){
    return(
        
        <Router>
        <div><Link  to='/Nav'></Link>
        <Switch>
        <Route  path='/Nav'>
        <Nav />
        </Route>
        </Switch>
        </div>
        
        <div className="index">
        <div className="index-appside"><img src={blog} width="512px" height="512px" mode="fit"></img></div>
        <div className="index-formside">
         
        
        <div>
        
              <form action="" method="post">
                <div> <Link to='/'  className="FormTitle__Link">Signin</Link>|<Link to='/signup' className="FormTitle__Link">Signup</  Link></div>
                <Switch> 
            
                <Route path='/signup'>
                       <Signup/>
                </Route>
                <Route  path='/'>
                            <Signin/>
                </Route>
                
                </Switch>
            </form>
        </div>
             
          
      </div>
       </div>
       </Router>
    );
}

function Signin() {
    
        return(
               <div>
             <div className="form-group">
                    <label >Email address</label>
                    <input type="email" className="form-control"  />
                </div>
               
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control"  />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" className="button">Submit</button>
                
                <p className="forgot-password-text-right">
                    Forgot <a href="#">password?</a>
                </p>
                </div>
        );
    }
    

function Signup(){
    return(
        <div>
                <div className="form-group">
                    <label >Name</label>
                    <input type="name" className="form-control"  />
                </div>
               
                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control"  />
                </div>
                <div className="form-group">
                    <label>Create password</label>
                    <input type="password" className="form-control"  />
                </div>
            


                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Agree terms & conditions</label>
                    </div>
                </div>
                <div>
                <button type="submit" className="button">Submit</button>
                <p className="forgot-password-text-right">
                    have <a href="#">account</a>
                </p>
                </div>
                </div>
    );

}


