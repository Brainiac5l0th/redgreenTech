import { Alert, Typography } from 'antd'
import React from 'react'
import img from '../../assets/images/Rainy.png'
import CommonLayout from '../../utilities/CommonLayout'
import PopularPro from './PopularPro'
import Sale from './Sale'
import SalesChart from './SalesChart'
import TotalSale from './TotalSale'
import Weather from './Weather'

const Dashboard = () => {
    return (
        <>
            <Typography.Title level={4} className='dashTitle'>
                Redgreen Sales
            </Typography.Title>
            <Alert
                message="Notification"
                className='alert'
                description="You dont have enough stock for the next campaign."
                type="warning"
                showIcon
                closable
                icon={<img src={img} alt='rainy img' />}
            />
            <div className="dash">
                <CommonLayout title='Total Sale' className='dash1' date={'month'}>
                    <TotalSale/>
                </CommonLayout>
                <CommonLayout title='Sales Chart' className='dash2'>
                    <SalesChart/>
                </CommonLayout>
                <CommonLayout title='Most Popular Product' className='dash3'>
                    <PopularPro/>
                </CommonLayout>
                <CommonLayout title='Sale' className='dash4'>
                <Sale/>
                </CommonLayout>
                <CommonLayout title='Weather' className='dash5'>
                    <Weather/>
                </CommonLayout>
            </div>

        </>
    )
}

export default Dashboard