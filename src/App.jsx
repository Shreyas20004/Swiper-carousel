import Carousel from "./components/Carousel"

const carouselItems = [
  {
    id: 1,
    title: "Lorem ipsum dolor",
    category: "Lorem ipsum dolor sit amet",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque pretium ultricies dolor, eu consectetur augue consectetur quis. Cras ac pharetra.",
    problemLink: "https://www.google.com",
  },
  {
    id: 2,
    title: "Lorem ipsum dolor",
    category: "Lorem ipsum dolor sit amet",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque pretium ultricies dolor, eu consectetur augue consectetur quis. Cras ac pharetra.",
    problemLink: "https://www.google.com",
  },
  {
    id: 3,
    title: "Lorem ipsum dolor",
    category: "Lorem ipsum dolor sit amet",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque pretium ultricies dolor, eu consectetur augue consectetur quis. Cras ac pharetra.",
    problemLink: "https://www.google.com",
  },
  {
    id: 4,
    title: "Lorem ipsum dolor",
    category: "Lorem ipsum dolor sit amet",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque pretium ultricies dolor, eu consectetur augue consectetur quis. Cras ac pharetra.",
    problemLink: "https://www.google.com",
  },


]

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 sm:p-8 bg-[#121417]">
      <h1 className="mb-8 text-3xl font-bold text-center text-white sm:text-4xl">Problem Statements</h1>
      <div className="w-full">
        <Carousel items={carouselItems} />
      </div>
    </div>
  )
}

export default App

