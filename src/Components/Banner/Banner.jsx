import React from 'react';
import PropTypes from 'prop-types';

Banner.propTypes = {
    handleSetCredit: PropTypes.func
};

function Banner({ handleSetCredit }) {
    return (
        <div className='bg-banner-shadow bg-cover bg-black w-11/12 mx-auto'>
            <div className='p-14 text-center flex flex-col justify-center items-center gap-6'>
                <img src="../../../public/assets/banner-main.png" alt="" />
                <h1 className='text-4xl text-white font-bold'>Assemble Your Ultimate Dream 11 Cricket Team</h1>
                <p className='text-gray-400 text-lg'>Beyond Boundaries Beyond Limits</p>
                <button onClick={handleSetCredit} className='bg-primary p-5 rounded-2xl font-bold'>Claim Free Credit</button>
            </div>
        </div>
    );
}

export default Banner;