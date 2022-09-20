import React from 'react'
import CommonBody from '../../utilities/CommonBody'
import Chart from './Chart'
const Sales = () => {
  return (
    <>
      <div>
        <CommonBody text='Todays Sale' number='156' date='day'/>
      </div>
      <div>
        <Chart/>
      </div>
    </>
  )
}

export default Sales