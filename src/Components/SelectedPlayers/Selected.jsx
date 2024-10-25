import PropTypes from 'prop-types';
import SingleSelected from '../SingleSelected/SingleSelected';

const Selected = ({ selectedPlayers, addNewPlayerHandler }) => {
    if(selectedPlayers.length > 6){
        return alert('enough player added')
    }
    return (
        <div className='w-11/12 mx-auto'>
            {
                selectedPlayers.map((sp) => <SingleSelected key={sp.id} sPlayer={sp} ></SingleSelected>)
            }
            <button onClick={addNewPlayerHandler} className='bg-primary p-3 rounded-2xl font-bold'>Add More Player</button>
        </div>
    );
};

Selected.propTypes = {
    players: PropTypes.array,
    selectedPlayers: PropTypes.array,
    addNewPlayerHandler: PropTypes.func
};

export default Selected;