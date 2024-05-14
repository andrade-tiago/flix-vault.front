import MovieData from "./MovieData";
import PlayButton from "./PlayButton";

export default function FeaturedMovie() {
  const movieBanner = "https://www.tvpop.com.br/wp-content/uploads/2021/04/operacao-big-hero-corujao-20-abril-foto-divulgacao-tvpop.jpg"

  return (
    <section className="relative py-20 flex px-5 sm:px-10 md:px-20 lg:px-28 bg-gradient-to-r from-gray-950 to-gray-950/40">
      {/* background-image */} <img
        src={movieBanner} alt="Banner"
        className="absolute w-full h-full object-cover -z-10 top-0 left-0 opacity-50"
      />

      <div className="max-w-xl flex gap-8 flex-col">
        <MovieData duration={57} rating={8.3} year={2009} />

        <h3 className="text-4xl font-medium">
          Rogue One: uma história Star...
        </h3>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pellentesque commodo diam, in facilisis mi eleifend eget. Suspendisse eu ante eu metus tincidunt vulputate. Ut libero lacus, feugiat ac velit eu, porttitor elementum quam.
        </p>

        <PlayButton />
      </div>
    </section>
  ) 
}
