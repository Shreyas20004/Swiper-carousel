/* eslint-disable react/prop-types */
import { CiLock } from "react-icons/ci";
import Overlap from "./Overlap";

const Card = ({ title, category, description, problemLink, submissionLink }) => {
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
        <div className="card-container relative w-full min-h-[50vh] rounded-3xl overflow-hidden bg-[#1c1f26] p-8 shadow-lg transition-all duration-300 ease-in-out  ">
            <div className="flex flex-col h-full gap-6 ">
                {/* Header */}
                <div className="mb-4 text-center">
                    <Overlap/>
                    <h3 className="text-xl text-gray-200">{title}</h3>
                </div>

                {/* Category */}
                <div className="flex items-center gap-2">
                    <span className="text-[#ff47c7] font-semibold">Category:</span>
                    <span className="text-gray-200">{category}</span>
                </div>

                {/* Description */}
                <div className="flex-grow">
                    <p className="leading-relaxed text-gray-300">{description}</p>
                </div>

                {/* Links */}
                <div className="flex flex-col gap-3 mt-4">
                    <div className="flex items-center gap-2">
                        <span className="text-gray-300">Problem Statement:</span>
                        <a
                            href={problemLink}
                            className="text-[#ff47c7] hover:text-[#ff71d4] transition-colors"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {problemLink}
                        </a>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-gray-300">Submission:</span>
                        <a
                            href={submissionLink}
                            className="text-[#ff47c7] hover:text-[#ff71d4] transition-colors"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {submissionLink}
                        </a>
                    </div>
                    <div className="absolute inset-0 z-10 flex flex-col items-center justify-center w-full h-full bg-black bg-opacity-50 backdrop-blur-sm" id="card">
                        <CiLock
                            color="white"
                            size={
                                sizeAdjust(screen)
                            }
                            className="bg-[#212429] rounded-full p-1 border-2 border-white mb-2" />
                        <h2 className="mb-2 font-bold text-white lg:text-2xl md:text-xl xs:text-sm">Locked Content</h2>
                        <h2 className="text-white lg:text-2xl md:text-xl xs:text-xsw">Will be available soon!!!😄</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card

