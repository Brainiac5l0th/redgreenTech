import React from 'react';

const CommonDiv = (props ) => {
    const { children } = props;
    return (
        <div className='customLayout'>
            {children}
        </div>
    )
}

export default CommonDiv