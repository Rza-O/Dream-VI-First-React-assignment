import PropTypes from 'prop-types';

Header.propTypes = {
    
};

function Header() {
    return (
        <nav className='flex justify-between w-11/12 mx-auto m-4'>
            <div>
                <img src="../../public/assets/logo.png" alt="Logo" />
            </div>
            <div className='flex space-x-2 sm:space-x-12 items-center'>
                <h4 className='text-xs md:text-base'>Home</h4>
                <h4 className='text-xs md:text-base'>Fixture</h4>
                <h4 className='text-xs md:text-base'>Teams</h4>
                <h4 className='text-xs md:text-base'>Schedules</h4>
                <button className='btn btn-xs sm:btn-sm md:btn-md lg:btn-lg bg-transparent border-2'>0 Dollar💲</button>
            </div>
        </nav>
    );
}

export default Header;