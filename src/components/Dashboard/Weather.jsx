import { Typography } from 'antd';
import React from 'react';
import datas from '../../assets/dummydata/Weather';
import img from '../../assets/images/Light.png';
import CommonDiv from '../../utilities/CommonDiv';
const { Title } = Typography;
const Weather = () => {
  const today = new Date().toDateString();
  const time = new Date().toLocaleTimeString();
  return (
    <CommonDiv>
      <div style={{ textAlign: 'center' }}>
        <Title level={2}>
          {time}
        </Title>
        <img src={img} alt='weather' />
        <Title level={4}>
          Cloudy Sunny, 24°C
        </Title>
      </div>
      <div>
        <Title
          style={{ fontWeight: 500 }} level={4}
        >
          {today}
        </Title>
        <div>
          {datas ? datas.map(data => (
            <CommonDiv key={data.time}>
              <p>{data.time}</p>
              <p style={{ margin: '0 1em' }}>{data.desc}</p>
            </CommonDiv>
          )) : null}
        </div>

      </div>
    </CommonDiv>
  )
}

export default Weather