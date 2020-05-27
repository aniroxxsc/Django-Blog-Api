import React from 'react';
import axios from 'axios';
import ImgMediaCard from '../components/Blog'


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
        
                <ImgMediaCard data={this.state}/>
            </div>
        )
    }
}
export default HomePage;