import React from 'react';
import CommonDiv from '../../utilities/CommonDiv';
import TitleText from '../../utilities/TitleText';
import PopularChart from './PopularChart';

const TotalSale = () => {
  const datas = [
    {
      name: 'TV',
      value: '600,000'
    },
    {
      name: 'Laptop',
      value: '1,200,000'
    },
    {
      name: 'Other',
      value: '210,287'
    }
  ]
  return (
    <CommonDiv>
      <div >
        {datas.map((data) => (
          <TitleText key={data.name} text={data.name} number={data.value} />
        ))}
      </div>
      <div style={{paddingLeft:'1em'}}>
        <PopularChart />
      </div>
    </CommonDiv>
  )
}

export default TotalSale