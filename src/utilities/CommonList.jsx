import { Avatar, List } from 'antd';
import React from 'react';

const CommonList = ({ data }) => {
    console.log(data);
    return (
        <List
            dataSource={data}
            renderItem={(item) => (
                <List.Item key={item.id}>
                    <List.Item.Meta
                        avatar={item.src ?
                            <Avatar shape="square" src={item.pic} />
                            :
                            <Avatar shape="square">{item.pic}</Avatar>}
                        title={item.title}
                        description={item.description}
                    />
                    {item.extra?
                    <div style={{color:'#FF3030'}}>{item.extra}</div>
                    :
                    <a href={item.details} alt={item.details}>details</a>}
                </List.Item>
            )}
        />
    )
}

export default CommonList