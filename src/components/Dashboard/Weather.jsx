import React from 'react';
import datas from '../../assets/dummydata/Weather';
import CommonDiv from '../../utilities/CommonDiv';
const Weather = () => {
  return (
    <CommonDiv>
      <div>weather icon with time</div>
      <div>
        <div>Date</div>
        <div>
        {datas?datas.map(data=>(
          <CommonDiv key={data.time}>
            <p>{data.time}</p>
            <p>{data.desc}</p>
          </CommonDiv>
        )):null}
        </div>

      </div>
    </CommonDiv>
  )
}

export default Weather