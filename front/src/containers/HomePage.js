import React from 'react';
import axios from 'axios';
import Blog from '../components/Blog'
import { connect } from 'react-redux'

class HomePage extends React.Component {
    state = {
        articles: [],
        images: []
    }
    componentDidMount() {
        axios.get('http://localhost:8000/blog/latest',)
            .then(res =>{
                this.setState({
                    articles:res.data
                });
                
            })
            axios.get('http://localhost:8000/blog/latest/images',)
                .then(res =>{
                    this.setState({
                        images:res.data
                    });
                    console.log(res.data)
                    console.log(this.state.images)
                    
                })
    }

    render(){
        return(
            <div>
        
                <Blog data={this.state}/>
                
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
      userdata: state.userdata
    }
  }


export default connect(mapStateToProps)(HomePage);