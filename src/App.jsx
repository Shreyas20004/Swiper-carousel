import Carousel from "./components/Carousel"
const carouselItems = [
  {
    id: 1,
    title: "Locked content",
    description: "Will be reveal soon!!😄",

  },
  {
    id: 2,
    title: "Locked content",
    description: "Will be reveal soon!!😄",

  },
  {
    id: 3,
    title: "Locked content",
    description: "Will be reveal soon!!😄",
 
  },
  {
    id: 4,
    title: "Locked content",
    description: "Will be reveal soon!!😄",
  },
  {
    id: 5,
    title: "Locked content",
    description: "Will be reveal soon!!😄",
    
  },
]

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-[12vw] text-white bg-[#040507]">
      <h1 className="mb-8 text-4xl font-bold">React Carousel</h1>
      <Carousel items={carouselItems} />
    </div>
  )
}

export default App

