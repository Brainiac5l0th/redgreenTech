import { Menu } from 'antd';
import React from 'react';
import { AiFillMessage, AiTwotoneSetting } from 'react-icons/ai';
import { CgMenuLeft } from 'react-icons/cg';
import { GrMapLocation } from 'react-icons/gr';
import { MdHelpOutline, MdInsertChart, MdPerson } from 'react-icons/md';
function getItem(label, key, icon, children, type) {
    return {
        key,
        icon,
        children,
        label,
        type,
    };
}

const items = [
    getItem('MENU',
        'g1',
        null,
        [getItem('Dashboard', '1', <MdInsertChart />),
        getItem('Maps', '2', <GrMapLocation />),
        getItem('Menu', '3', <CgMenuLeft />),
        getItem('Menu', '4', <AiFillMessage />)]
        , 'group'),

    getItem('OTHERS',
        'g2',
        null,
        [getItem('Settings', '5', <AiTwotoneSetting />),
        getItem('Accounts', '6', <MdPerson />),
        getItem('Helps', '7', <MdHelpOutline />)],
        'group'),
];
const Sidebar = () => {
    return (
        <Menu
            className='sidebar'
            defaultSelectedKeys={['1']}
            mode="vertical"
            items={items}
        />
    )
}

export default Sidebar