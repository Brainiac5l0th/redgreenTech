import { Alert, Typography } from 'antd'
import React from 'react'
import img from '../../assets/images/Rainy.png'
import CommonLayout from '../../utilities/CommonLayout'

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
                <CommonLayout title='Total Sale' className='dash1'>common Child</CommonLayout>
                <CommonLayout title='Sales Chart'>common Child</CommonLayout>
                <CommonLayout title='Most Popular Product' className='dash3'>common Child</CommonLayout>
                <CommonLayout title='Sale' className='dash4'>common Child</CommonLayout>
                <CommonLayout title='Weather' className='dash5'>common Child</CommonLayout>
            </div>

        </>
    )
}

export default Dashboard