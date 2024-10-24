import PropTypes from 'prop-types';
import { FaUser } from "react-icons/fa";
import { FaFlag } from "react-icons/fa";

const Player = ({ player }) => {
    const { name, country, image, role, battingType, bowlingType, price } = player;
    return (
        <div className='border-2 p-6 rounded-xl '>
            <img className='w-fit rounded-xl shadow-lg mb-6' src={image} alt="" />
            <span className='flex items-center text-xl font-bold mb-4 gap-1'><FaUser />{name}</span>
            <div className='flex justify-between mb-4'>
                <span className='flex items-center gap-1'><FaFlag />{country}</span>
                <span className='border bg-slate-300 p-1 rounded-md'>{role}</span>
            </div>
            <hr />
            <span className='flex justify-between mb-4'><p className='font-semibold'>Batting-Type:</p> {battingType}</span>
            <span className='flex justify-between mb-4'><p className='font-semibold'>Bowlling-Type:</p> {bowlingType}</span>
            <div className='flex justify-between items-center'>
                <p className='font-semibold'>Price: {price}$</p>
                <button className='btn-sm rounded-lg border-2 hover:bg-primary'>Choose Player</button>
            </div>
        </div>
    );
};

Player.propTypes = {
    player: PropTypes.object
};

export default Player;