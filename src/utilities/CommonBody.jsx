import { DatePicker} from 'antd';
import React from 'react';
import CommonDiv from './CommonDiv';
import TitleText from './TitleText';

const CommonBody = ({ text, number, date }) => {
    return (
        <CommonDiv>
            <div>
                <TitleText text={text} number={number}/>
            </div>
            <div>
                <DatePicker picker={date} />
            </div>
        </CommonDiv>
    )
}

export default CommonBody