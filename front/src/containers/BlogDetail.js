import React from "react";
import axios from 'axios';
import Comment from '../components/Comment'


class BlogDetail extends React.Component {
    state = {
        blog: {},
        comments: [],
    };
    componentWillMount() {
        const id =  this.props.match.params.id;
        let url = 'http://localhost:8000/blog/' + id;
        let url2 = url + "/comments/view"
        axios.get(url)
            .then(res =>{
                this.setState({
                    blog:res.data
                });
           
           axios.get(url2)
            .then(res =>{
                this.setState({
                    comments:res.data
                });
            });
        });   
    };


    render(){
        return(<div>
            <h1>{this.state.blog.title}</h1>
                <div dangerouslySetInnerHTML={{__html: this.state.blog.content}}></div>
                <div >________________________________________________________________________________________</div>
                <h3>Comments</h3>
                <Comment data={this.state.comments} />
            </div>
            
        )
    };
}

export default BlogDetail;