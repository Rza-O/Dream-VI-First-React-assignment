import PropTypes from 'prop-types';
import { FaUser } from "react-icons/fa";
import { FaFlag } from "react-icons/fa";

const Player = ({ player }) => {
    const { name, country, image, role, battingType, bowlingType, price } = player;
    return (
        <div className='grid grid-cols-3 gap-6'>
            <div className='w-[424px] h-[528px] border-2 p-6 rounded-xl '>
                <img className='w-fit' src={image} alt="" />
                <span className='flex items-center text-xl font-bold'><FaUser />{name}</span>
                <div className='flex justify-between'>
                    <span className='flex items-center'><FaFlag />{country}</span>
                    <span className='border bg-slate-300 p-1 rounded-md'>{role}</span>
                </div>
                <hr />
                <span className='flex justify-between'><p>Batting-Type:</p> {battingType}</span>
                <span className='flex justify-between'><p>Bowlling-Type:</p> {bowlingType}</span>
                <div className='flex justify-between'>
                    <p>{price}</p>
                    <button className='btn-sm rounded-lg border-2 hover:bg-primary'>Choose Player</button>
                </div>
            </div>
        </div>
    );
};

Player.propTypes = {
    player: PropTypes.object
};

export default Player;