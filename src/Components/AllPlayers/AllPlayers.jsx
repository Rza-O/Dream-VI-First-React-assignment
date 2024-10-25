import PropTypes from 'prop-types';
import Player from '../Player/Player';

const AllPlayers = ({ players, addPlayerBtnHandler }) => {
    
    return (
        <div className='pt-4 grid grid-cols-3 gap-6 w-11/12 mx-auto'>
            {
                players.map((player) => <Player addPlayerBtnHandler={addPlayerBtnHandler} key={player.playerId} player={player}></Player>)
            }
        </div>
    );
};

AllPlayers.propTypes = {
    players: PropTypes.array,
    addPlayerBtnHandler: PropTypes.func
};

export default AllPlayers;