import { Layout } from 'antd';
import React from 'react';
import './App.css';

import Dashboard from './components/Dashboard/Dashboard';
import Heading from './components/Heading';
import Sidebar from './components/Sidebar';
const { Header, Sider, Content } = Layout;
const App = () => {
    return (
        <Layout>
            <Header>
                <Heading />
            </Header>
            <Layout
            >
                <Sider width={280} className='sider'>
                    <Sidebar />
                </Sider>
                <Content
                    className="site-layout-background"
                    style={{
                        background:'#fff',
                        padding: 20,
                        margin: 0,
                    }}>
                        <Dashboard/>
                    </Content>
            </Layout>
        </Layout>
    )
}

export default App