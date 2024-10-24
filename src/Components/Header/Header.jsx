import PropTypes from 'prop-types';

Header.propTypes = {
    
};

function Header() {
    return (
        <nav className='flex justify-between w-11/12 mx-auto m-4'>
            <div>
                <img src="../../public/assets/logo.png" alt="Logo" />
            </div>
            <div className='flex space-x-12 items-center'>
                <h4 className=''>Home</h4>
                <h4 className=''>Fixture</h4>
                <h4 className=''>Teams</h4>
                <h4 className=''>Schedules</h4>
                <button className='border py-4 px-5 rounded-xl'>0 Dollar💲</button>
            </div>
        </nav>
    );
}

export default Header;