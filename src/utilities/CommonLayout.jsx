import { Card } from 'antd';
import React from 'react';
const CommonLayout = (props,...{children}) => {
  return (
    <Card title={props.title?props.title:null} className={props.className}>
        {children}
    </Card>
  )
}

export default CommonLayout