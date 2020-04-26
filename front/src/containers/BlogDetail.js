import React from "react";
import axios from 'axios';
import {Card} from "antd";
import Parser from 'html-react-parser';
class BlogDetail extends React.Component {
    state = {
        blog: {}
    };
    componentDidMount() {
        const id =  this.props.match.params.id;
        let url = 'http://localhost:8000/create/' + id;
        axios.get(url)
            .then(res =>{
                this.setState({
                    blog:res.data
                });
            });
            
    };
    render(){
        return(<div>
            <Card title={this.state.blog.title}>
                <div dangerouslySetInnerHTML={{__html: this.state.blog.content}}></div>
            </Card>
            </div>
            
        )
    };
}

export default BlogDetail;