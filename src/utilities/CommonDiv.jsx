import React from 'react';

const CommonDiv = (props ) => {
    const { className, children } = props;
    return (
        <div className= {`${className} customLayout`}>
            {children}
        </div>
    )
}

export default CommonDiv