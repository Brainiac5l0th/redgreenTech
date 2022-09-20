import { Menu, Avatar, Input } from 'antd';
import React from 'react';

const { Search } = Input;
const Heading = () => {
    return (
        <>
            <Menu
                theme="light"
                mode="horizontal"
                className='menubar'
            >
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
                <div>
                    <Search 
                    style={{
                        width: 304,
                      }}
                    placeholder="input search text" />
                </div>
                <div className="rightSideMenu">
                    <h3>hell</h3>
                </div>
            </Menu>
        </>
    )
}

export default Heading