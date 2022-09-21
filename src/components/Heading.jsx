import { Avatar, Badge, Input, Space } from 'antd';
import React from 'react';
import { BsBell } from 'react-icons/bs';


const { Search } = Input;
const Heading = () => {
    return (
        <div className='menu'>
            <div>
                <h3 style={{ color: '#1890FF' }}>
                    <Avatar
                        style={{
                            color: '#ffff',
                            backgroundColor: '#1890FF',
                            marginRight: '4px'
                        }}
                        size='small'
                    >
                        L
                    </Avatar>
                    LOGOO
                </h3>
            </div>
            <Search
                style={{
                    width: 400,
                    alignItems: 'center'
                }}
                placeholder="input search text" />
            
            <div style={{ flex: '1 1 0%' }}></div>
            <div className="rightSideMenu">
                <Space>
                <Badge dot>
        <Avatar shape="circle" icon={<BsBell/>} />
      </Badge>
                    title with logo
                </Space>
            </div>
        </div>
    )
}

export default Heading