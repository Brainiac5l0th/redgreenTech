import React from 'react';
import { Typography } from 'antd';
const { Title } = Typography;

const TitleText = ({text,number}) => {
    return (
        <>
            <Title
                style={{ fontWeight: 400 }} level={5}
            >
                {text}
            </Title>
            <Title style={{ marginTop: 0 }} level={3}>
                {number}
            </Title>
        </>
    )
}

export default TitleText