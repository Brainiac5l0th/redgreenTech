import { Pie } from '@ant-design/plots';
import React from "react";
const Chart = () => {
        const data = [
          {
            type: 'TV',
            value: 50,
          },
          {
            type: 'Laptop',
            value: 25,
          },
          {
            type: 'Others',
            value: 25,
          }
        ];
        const config = {
            width:300,
            height:300,
          appendPadding: 10,
          data,
          angleField: 'value',
          colorField: 'type',
          color: ['#2D5BFF', '#6284FD', '#96ADFF'],
          radius: 1,
          innerRadius: 0.7,
      
          statistic: {
            title: false,
            content: {
              style: {
                whiteSpace: 'pre-wrap',
                overflow: 'hidden'
              },
              content: '',
            },
          },
        };
        return <Pie {...config} />;
};

export default Chart