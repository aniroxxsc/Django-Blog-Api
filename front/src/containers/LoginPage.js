import React, { Component , useEffect} from 'react';
import './css/main.css';
import Oauth from './Googlesignin';
import axios from 'axios';
import Cookies from'js-cookie'
import { connect } from 'react-redux';
import {fetchUser} from '../redux'

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sap: '',
      password: '',
      error: '',
      token: '',
      userid:'',
    };

    this.handlePassChange = this.handlePassChange.bind(this);
    this.handleUserChange = this.handleUserChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.dismissError = this.dismissError.bind(this);
  }
  
  dismissError() {
    this.setState({ error: '' });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.setState({ error: '' });
    console.log(this.state);


    axios.post(`http://localhost:8000/auth/token/login`, {
      sap:this.state.sap,
      password: this.state.password,
    })
    .then(res => {
        this.setState({ token : res.data.auth_token });
        this.props.fetchUser(this.state.token)
        console.log(this.state.token)
        Cookies.set('auth_token', this.state.token , { expires: 7 });
          
        this.props.history.push('/')
        
      }).catch(error => {
        console.log(error.response);
    });

  }

  handleUserChange(evt) {
    this.setState({
      sap: evt.target.value,
    });
  };

  handlePassChange(evt) {
    this.setState({
      password: evt.target.value,
    });
  }
  render() {

    return (
    <div>
          <script src="https://apis.google.com/js/platform.js" async defer></script>
          <meta name="google-signin-client_id" content="849906640607-rot890jh0ubg1qi93b73uevcdisq8ld4.apps.googleusercontent.com"></meta>

          <form onSubmit={this.handleSubmit}>

  <div className="container">
    <label for="uname"><b>SAP ID</b></label>
    <input type="text" placeholder="Enter Username" name="uname" onChange={this.handleUserChange} required />

    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" onChange={this.handlePassChange} required />

    <button type="submit">Login</button>

  </div>
  <span className="psw">Don't have an account <a href="/signup/">Sign Up!</a></span>
  <div className="container" style={{backgroundColor:"#f1f1f1"}}>   
  </div>
</form>


        <Oauth />
    </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    userData: state.userData
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchUser: token => dispatch(fetchUser(token))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(LoginPage);







// axios.get('http://localhost:8000/auth/users/me',{ 
//           headers: {
//            Authorization: 'Token '+ this.state.token} 
//       })
//       .then(function (response) {
//         console.log(response.data);
//         Cookies.set('username', response.data.id, { expires: 7 });
//       })
//       .catch(function (error) {
//         console.log(error);
//       });