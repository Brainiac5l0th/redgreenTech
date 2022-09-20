import React from 'react'
import data from '../../assets/dummydata/Sale'
import CommonBody from '../../utilities/CommonBody'
import CommonList from '../../utilities/CommonList'

const Sale = () => {
  return (
    <div>
      <div>
        <CommonBody 
          text='Monthly Sales'
          number='918'
          date='month'
          />
      </div>
      <div>
        <CommonList data={data}/>
      </div>
    </div>
  )
}

export default Sale