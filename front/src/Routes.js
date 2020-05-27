import React from "react";
import { Route, BrowserRouter, Switch, Redirect } from 'react-router-dom';
import LoginPage from "./containers/LoginPage";
import Signup from "./containers/Signup";
import Oauth from "./containers/Googlesignin";
import NewBlog from "./containers/NewBlog"
import HomePage from "./containers/HomePage"
import BlogDetail from "./containers/BlogDetail"
import requireAuth from "./components/authComponent"
import Cookies from "js-cookie"

class BaseRouter extends React.Component {
    state = {
     auth: true
    }
    componentDidMount() {
     if ( ! Cookies.get('auth')) {
       this.setState({auth:false });
     }
    }
    render() {
     return (
       <BrowserRouter>
        <Switch>
         <Route exact path="/createnew" component={requireAuth(NewBlog)} />
         <Route exact path = '/login' component={LoginPage}/>
         <Route exact path="/" component={requireAuth(HomePage)} />
         <Route exact path = '/:id' component={requireAuth(BlogDetail)}/>
         <Route exact path = '/signup/' component={Signup}/>
          {/* <Route exact path = '/create2/' component={Oauth}/> */}
         {!this.state.auth &&  <Redirect push to="/login"/> }
        </Switch>
       </BrowserRouter>
        );
      }
     }

export default BaseRouter;