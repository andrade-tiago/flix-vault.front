import Carousel from "../components/Carousel";
import Hero from "../components/Hero";
import MovieCard from "../components/movie/MovieCard";

export function Home() {
  return (
    <>
      <Hero />

      <Carousel>
        {new Array(15).fill(<MovieCard />)}
      </Carousel>
    </>
  )
}
