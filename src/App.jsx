import Carousel from "./components/Carousel"

const carouselItems = [
  {
    id: 1,
    title: "AiHello Problem Statements",
    category: "Machine Learning",
    problemLink: "https://shorturl.at/VLAaq",
  },
  {
    id: 2,
    title: "Data Analysis Challenge",
    category: "Data Science",
    problemLink: "https://shorturl.at/example1",
  
  },
  {
    id: 3,
    title: "Computer Vision Task",
    category: "Deep Learning",
    problemLink: "https://shorturl.at/example3",
  
  },
  {
    id: 4,
    title: "Computer Vision Task",
    category: "Deep Learning",
    problemLink: "https://shorturl.at/example3",
  
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

