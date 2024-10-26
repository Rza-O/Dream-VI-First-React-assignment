import { RiDeleteBin5Line } from "react-icons/ri";
import PropTypes from 'prop-types';

const SingleSelected = ({ sPlayer, deleteBtnHandler }) => {
    // console.log(sPlayer);
    const { name, image, role, price } = sPlayer;
    return (
        <div className="flex justify-between p-6 border-2 rounded-xl items-center mt-4 mb-6">
            <div className="flex gap-4 items-center">
                <img className="w-20 h-20 rounded-xl object-cover" src={image} alt="" />
                <div className="space-y-3">
                    <h1 className="text-xl font-bold">{name}</h1>
                    <p className="text-sm text-gray-500">{role}</p>
                    <p className="font-bold">Price: {price}💲</p>
                </div>
            </div>
            <RiDeleteBin5Line onClick={() => deleteBtnHandler(sPlayer)}  className="text-red-400 cursor-pointer" />
        </div>
    );
};

SingleSelected.propTypes = {
    sPlayer: PropTypes.object,
    deleteBtnHandler: PropTypes.func
};

export default SingleSelected;