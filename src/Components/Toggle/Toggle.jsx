import React from 'react';
import PropTypes from 'prop-types';

const Toggle = () => {
    return (
        <div className='flex items-center justify-between w-11/12 mx-auto mt-16'>
            <h1 className=''>Available Players</h1>
            <div>
                <button className='btn bg-primary'>Available</button>
                <button className='btn border-2'>Selected</button>
            </div>
        </div>
    );
};

Toggle.propTypes = {
    
};

export default Toggle;