// import PropTypes from 'prop-types';

const Newsletter = () => {
    return (
        <div className='w-3/4 h-80 mx-auto bg-banner-shadow bg-center text-center flex flex-col justify-center space-y-6 relative -bottom-32 z-10 bg-white'>
            <h1 className='text-4xl font-bold'>Subscribe to our Newsletter</h1>
            <p className='text-xl text-gray-500'>Get the latest updates and news right in your inbox!</p>
            <div className='space-x-4'>
                <input
                    type="text"
                    placeholder="Type here"
                    className="input input-info border-2 border-blue-300  w-full max-w-xs" />
                <button className='btn bg-gradient-to-r from-purple-300 to-yellow-300'>Subscribe</button>
            </div>
        </div>
    );
};

// Newsletter.propTypes = {

// };

export default Newsletter;