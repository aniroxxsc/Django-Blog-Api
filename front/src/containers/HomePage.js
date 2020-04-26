import React from 'react';
import axios from 'axios';
import Blog from '../components/Blog'
class HomePage extends React.Component {
    state = {
        articles: []
    }
    componentDidMount() {
        axios.get('http://localhost:8000/create')
            .then(res =>{
                this.setState({
                    articles:res.data
                });
            })
    }

    render(){
        return(
            <div>
                <Blog data={this.state.articles}/>
            </div>
        )
    }
}
export default HomePage;