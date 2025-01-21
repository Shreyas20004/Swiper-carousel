/* eslint-disable react/prop-types */
import { CiLock } from "react-icons/ci";
const Card = ({ title, description }) => {
    return (
        <div className="relative w-full h-[50vh] my-7 rounded-lg overflow-hidden shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105">
            <div className="z-0 w-full h-full bg-[#040507] blur-sm"></div>
            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center p-6 opacity-40 bg-gradient-to-br from-black to-[#040507,#eceff46b] " id="card">
                <CiLock color="white" size={50} className="bg-[#212429] rounded-full p-1 border-2 border-white mb-2" />
                <h2 className="mb-2 font-bold text-white lg:text-3xl md:text-2xl">{title}</h2>
                <h2 className="text-white lg:text-2xl md:text-xl">{description}</h2>
            </div>
        </div>
    )
}

export default Card

