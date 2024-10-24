import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import Player from '../Player/Player';

const AllPlayers = () => {
    const [players, setPlayers] = useState([]);
    useEffect(() => {
        fetch('./fakeData.json')
        .then(res=> res.json())
        .then(data=> setPlayers(data))
    }, []);
    return (
        <div className='w-11/12 mx-auto'>
            {
                players.map((player) => <Player key={player.playerId} player={player}></Player>)
            }
        </div>
    );
};

AllPlayers.propTypes = {
    
};

export default AllPlayers;