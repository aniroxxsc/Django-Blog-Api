import React from "react";
import { List, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import axios from 'axios';
import { resolve } from 'react-resolver'


class Comment extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      users :[]
    };
  }


  componentWillMount(){
  var sample=[]
  console.log(this.props.data)
    for (var comment of this.props.data){
      console.log(comment)
      let url = 'http://localhost:8000/auth/allusers/' + comment.user;
      axios.get(url)
      .then(res =>{
        console.log(res.data)
          this.state.users.push(res.data[0])
          // console.log(sample[0].first_name)
      });
    }
  //   this.setState({
  //     users.push(sample)
  // });
  }
  render(){
     return (
        <List
        itemLayout="horizontal"
        dataSource={this.props.data}
        renderItem={item => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar icon={<UserOutlined />} />} title={<a href="#">{}</a>}
              
              description={item.content}
            />
          </List.Item>
        )}
      />
 );
        }
 }



 export default Comment;

