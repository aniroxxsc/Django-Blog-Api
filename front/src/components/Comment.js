import React from "react";
import { List, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import axios from 'axios';
import { resolve } from 'react-resolver'


const Comment = (props) => {
  let users=[]
    for (var comment of props.data){
      console.log(comment)
      let url = 'http://localhost:8000/auth/allusers/' + comment.user;
      axios.get(url)
      .then(res =>{
          users.push(res.data[0])
          console.log(users[0].first_name)
      });
    }
    
     return (
        <List
        itemLayout="horizontal"
        dataSource={props.data}
        renderItem={item => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar icon={<UserOutlined />} />} title={<a href="#">{users[0].first_name}</a>}
              
              description={item.content}
            />
          </List.Item>
        )}
      />
 );
      
 }



 export default Comment;

