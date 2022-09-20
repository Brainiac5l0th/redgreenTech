import { Line } from '@ant-design/charts';
import React from 'react';

const PopularChart = () => {
    var data = [
        {
          year: '07',
          value: 600000,
          series: "time"
        },
        {
          year: '10',
          value: 700000,
          series: "time"
        },
        {
          year: '14',
          value: 900000,
          series: "time"
        },
        {
          year: '17',
          value: 1200000,
          series: "time"
        },
        {
          year: '21',
          value: 1150000,
          series: "time"
        },
        {
          year: '25',
          value: 1500000,
          series: "time"
        },
        {
          year: '28',
          value: 2010287, 
          series: "time"
        }
      ];
      var config = {
        data: data,
        width:600,
        height: 400,
        autofit:true,
        xField: "year",
        yField: "value",
        seriesField: "series",
        smooth: true,
        tooltip: {
          showTitle: false
        }
      };
      return <Line {...config} />;
}

export default PopularChart