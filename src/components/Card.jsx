/* eslint-disable react/prop-types */
import { CiLock } from "react-icons/ci";
import Overlap from "./Overlap";

const Card = ({ title, category,description,problemLink}) => {
    let screen = window.screen.width
    const sizeAdjust = (screen) => {
        if (screen >= 640) {
            return 40
        } else if (screen >= 1024) {
            return 50
        } else {
            return 30
        }
    }
    return (
        <div className="card-container relative w-full h-[450px]  rounded-3xl overflow-hidden bg-[#1c1f26f4] bg-blend-overlay bg-cover  transition-all duration-300 ease-in-out hidden ">
            <div className="flex flex-col w-full h-full gap-2 p-6 text-xl select-none md:text-xl xs:text-sm">
                {/* Header */}
                <div className="mb-4 text-center">
                    <Overlap />
                </div>
                
                <div className="flex items-center gap-2">
                    <span className="text-[#485385] font-semibold">Title:</span>
                    <span className="text-gray-200">{title}</span>
                </div>

                {/* Category */}
                <div className="flex items-center gap-2">
                    <span className="text-[#485385] font-semibold">Category:</span>
                    <span className="text-gray-200">{category}</span>
                </div>
                
                 {/* description */}
                 <div className="block gap-0 ">
                    <span className="text-[#485385] font-semibold">Description:</span><br />
                    <span className="text-gray-200">{description}</span>
                </div>
                
                {/* Links */}
                <div className="flex flex-col gap-0 mt-4">
                    <div className="flex items-center gap-2">
                        <span className="text-gray-300">Problem Statement:</span>
                        </div>
                        <a
                            href={problemLink}
                            className="text-[#485385] hover:text-[#1A2867] transition-colors"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {problemLink}
                        </a>
                    
                </div>
            </div>
            {/* Lock Icon */}
            {/* <div className="absolute inset-0 z-10 flex flex-col items-center justify-center w-full h-full bg-black bg-opacity-50 backdrop-blur-sm" id="card">
                <CiLock
                    color="white"
                    size={
                        sizeAdjust(screen)
                    }
                    className="bg-[#212429] rounded-full p-1 border-2 border-white mb-2" />
                <h2 className="mb-2 font-bold text-white lg:text-2xl md:text-xl xs:text-sm">Locked Content</h2>
                <h2 className="text-white lg:text-2xl md:text-xl xs:text-xsw">Will be available soon!!!😄</h2>
            </div> */}
        </div>
    )
}

export default Card

