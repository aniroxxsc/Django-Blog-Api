import React from "react";
import { List } from 'antd';



const Blog = (props) => {
    return (
  <List
    itemLayout="vertical"
    size="large"
    pagination={{
      onChange: page => {
        console.log(page);
      },
      pageSize: 5,
    }}
    dataSource={props.data}
    footer={
      <div>
      </div>
    }
    renderItem={item => (
      <List.Item
        key={item.title}
        actions={[
        ]}
      >
        <List.Item.Meta
          title={<a href={item.id}> {item.title}</a>}
        />
        {item.body}
      </List.Item>
    )}
  />
);
}
export default Blog;