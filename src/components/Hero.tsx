import { ChevronDown } from "lucide-react"
import movieTitle from "../img/rogue1.png"
import MovieData from "./movie/MovieData"
import PlayButton from "./movie/PlayButton"

export default function Hero() {
  const bannerIMG = "https://miro.medium.com/v2/resize:fit:1400/1*1mXR8N_HiaAl8GLT0Kd4ZA.jpeg"

  return (
    <div className="relative pt-48 pb-20 bg-gradient-to-b from-transparent to-gray-950 px-4">
      {/* background-image */} <img
        src={bannerIMG} alt="Banner"
        className="absolute w-full h-full object-cover -z-10 top-0 left-0 opacity-50"
      />

      <div className="max-w-[660px] mx-auto flex items-center gap-5 flex-col">
        <img src={movieTitle} alt="Título do filme" className="max-h-32" />

        <MovieData duration={145} year={2020} rating={7} />

        <p title="Sinopse" className="text-center text-gray-300">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pellentesque commodo diam, in facilisis mi eleifend eget. Suspendisse eu ante eu metus tincidunt vulputate. Ut libero lacus, feugiat ac velit eu, porttitor elementum quam.
        </p>

        <PlayButton className="shadow-amber-500" />

        <ChevronDown className="mt-5" />
      </div>
    </div>
  )
}
