import React from 'react';

const Button = ({children}) => {
    return (
        <a className='btn btn-primary font-semibold rounded-lg text-black'>
            {
                children
            }
        </a>
    );
};

export default Button;