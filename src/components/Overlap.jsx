import { useState } from "react";

const SlidingText = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative w-full h-10 overflow-hidden text-center "
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >

      <h1 className="text-2xl font-bold text-white">Problem</h1>


      <h1
        className={`absolute inset-0 text-2xl bg-[#211D1F] rounded-2xl brightness-110 font-bold text-white transform transition-transform duration-500 ${
          !hovered ? "-translate-x-full" : "translate-x-0"
        }`}
      >
        Statement
      </h1>
    </div>
  );
};

export default SlidingText;
