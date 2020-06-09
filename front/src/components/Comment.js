import React from "react";
import { List, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import axios from 'axios'
import {Link} from 'react-router-dom'

class Comment extends React.Component {
    constructor(props){
      super(props)
    }
    componentDidUpdate(){
      console.log(this.props.data)
    }
  render(){
     return (<div>
        <List
        itemLayout="horizontal"
        dataSource={this.props.data}
        renderItem={item => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar icon={<UserOutlined />} />} title={<Link to="#">{item.username}</Link>}
              
              description={item.content}
            />
          </List.Item>
        )}
      />


</div>
 )}
        
 
}


 export default Comment;

