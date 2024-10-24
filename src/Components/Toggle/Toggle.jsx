import PropTypes from 'prop-types';

const Toggle = ({ handleToggle, toggleActive }) => {
    return (
        <div className='flex items-center justify-between w-11/12 mx-auto mt-16'>
            <h1 className='text-2xl font-bold'>{toggleActive? 'Available Players' : 'Selected Players(0/6)'}</h1>
            <div>
                <button onClick={() => { handleToggle('available') }} className={`${toggleActive ? 'btn bg-primary' : 'btn border-2'}`}>Available</button>
                <button onClick={() => { handleToggle('selected') }} className={`${toggleActive ? 'btn border-2' : 'btn bg-primary'}`}>Selected(0)</button>
            </div>
        </div>
    );
};

Toggle.propTypes = {
    handleToggle: PropTypes.func,
    toggleActive: PropTypes.bool
};

export default Toggle;