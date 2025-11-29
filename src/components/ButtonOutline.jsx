import React from 'react';

const ButtonOutline = ({children}) => {
    return (
        <div className='btn btn-primary font-semibold rounded-lg text-black'>
            {
                children
            }
        </div>
    );
};

export default ButtonOutline;