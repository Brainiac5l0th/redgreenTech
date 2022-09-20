import { Card, DatePicker } from 'antd';
import React from 'react';
import { IoEllipsisVerticalOutline } from 'react-icons/io5';
const CommonLayout = (props) => {

  const { title, className, date, children } = props;
  return (
    <Card
      title={title ? title : null}
      className={`${className} cardCss`}
      extra={date ?
        <>
          <DatePicker style={{ marginRight: '1em' }} picker={date} />
          <IoEllipsisVerticalOutline />
        </> : <IoEllipsisVerticalOutline />}
      
    >
      {children}
    </Card>
  )
}

export default CommonLayout