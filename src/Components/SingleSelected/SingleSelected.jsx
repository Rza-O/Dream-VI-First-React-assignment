import { RiDeleteBin5Line } from "react-icons/ri";
import PropTypes from 'prop-types';

const SingleSelected = ({ sPlayer }) => {
    console.log(sPlayer);
    const { name, image, role } = sPlayer;
    return (
        <div className="flex justify-between p-6 border-2 rounded-xl items-center mt-4 mb-6">
            <div className="flex gap-2">
                <img className="w-20 h-16 rounded-xl object-cover" src={image} alt="" />
                <div className="space-y-3">
                    <h1 className="text-xl font-bold">{name}</h1>
                    <p className="text-sm text-gray-500">{role}</p>
                </div>
            </div>
            <RiDeleteBin5Line className="text-red-400 cursor-pointer" />
        </div>
    );
};

SingleSelected.propTypes = {
    sPlayer: PropTypes.object
};

export default SingleSelected;