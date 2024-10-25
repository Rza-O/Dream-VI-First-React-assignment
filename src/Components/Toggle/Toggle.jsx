import PropTypes from 'prop-types';
import AllPlayers from '../AllPlayers/AllPlayers';
import Selected from '../SelectedPlayers/Selected';

const Toggle = ({ handleToggle, toggleActive, selectedPlayers, players, addPlayerBtnHandler, addNewPlayerHandler, deleteBtnHandler }) => {
    return (
        <div >
            <div className='flex items-center justify-between w-11/12 mx-auto mt-16'>
                <h1 className='text-2xl font-bold'>{toggleActive? 'Available Players' : `Selected Players(${selectedPlayers.length}/6)`}</h1>
                <div>
                    <button onClick={() => { handleToggle('available') }} className={`${toggleActive ? 'btn bg-primary' : 'btn border-2'}`}>Available</button>
                    <button onClick={() => { handleToggle('selected') }} className={`${toggleActive ? 'btn border-2' : 'btn bg-primary'}`}>Selected({selectedPlayers.length})</button>
                </div>
            </div>
            {
                toggleActive ? <AllPlayers addPlayerBtnHandler={addPlayerBtnHandler} players={players}></AllPlayers> : <Selected deleteBtnHandler={deleteBtnHandler} addNewPlayerHandler={addNewPlayerHandler} selectedPlayers={selectedPlayers} players={players}></Selected>
            }
        </div>
    );
};

Toggle.propTypes = {
    handleToggle: PropTypes.func,
    toggleActive: PropTypes.bool,
    selectedPlayers: PropTypes.array,
    players: PropTypes.array,
    addPlayerBtnHandler: PropTypes.func,
    addNewPlayerHandler: PropTypes.func,
    deleteBtnHandler: PropTypes.func
};

export default Toggle;