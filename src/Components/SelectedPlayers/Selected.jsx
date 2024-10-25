import React from 'react';
import PropTypes, { array } from 'prop-types';
import SingleSelected from '../SingleSelected/SingleSelected';

const Selected = ({ players, selectedPlayers, addNewPlayerHandler }) => {
    console.log(players);
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
    selectedPlayers: PropTypes.array
};

export default Selected;