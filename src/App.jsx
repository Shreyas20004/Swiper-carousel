import Carousel from "./components/Carousel"

const carouselItems = [
  {
    id: 1,
    title: "AiHello Problem Statements",
    category: "Machine Learning",
    description:
      "Our sponsor - AiHello (https://www.aihello.com/) have released 2 problem statements. Anyone who performs well and submits their work to us will get a direct entry to Code Kshetra 2.0! They can use their project for the hackathon and also stand a chance to get hired by the company!!!",
    problemLink: "https://shorturl.at/VLAaq",
    submissionLink: "https://shorturl.at/ew4Gy",
  },
  {
    id: 2,
    title: "Data Analysis Challenge",
    category: "Data Science",
    description:
      "Analyze complex datasets and provide meaningful insights using advanced statistical methods and visualization techniques. Create a comprehensive report detailing your findings and methodology.",
    problemLink: "https://shorturl.at/example1",
    submissionLink: "https://shorturl.at/example2",
  },
  {
    id: 3,
    title: "Computer Vision Task",
    category: "Deep Learning",
    description:
      "Develop an efficient computer vision model for real-time object detection and classification. Focus on optimization and accuracy while maintaining reasonable computational requirements.",
    problemLink: "https://shorturl.at/example3",
    submissionLink: "https://shorturl.at/example4",
  },
  {
    id: 4,
    title: "Computer Vision Task",
    category: "Deep Learning",
    description:
      "Develop an efficient computer vision model for real-time object detection and classification. Focus on optimization and accuracy while maintaining reasonable computational requirements.",
    problemLink: "https://shorturl.at/example3",
    submissionLink: "https://shorturl.at/example4",
  },
]

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 sm:p-8 bg-[#121417]">
      <h1 className="text-3xl font-bold text-center text-white sm:text-4xl">Problem Statements</h1>
      <div className="h-[600px] w-full mt-8">
        <Carousel items={carouselItems} />
      </div>

    </div>
  )
}

export default App

