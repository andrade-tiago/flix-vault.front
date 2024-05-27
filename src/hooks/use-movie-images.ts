import { useQuery } from "react-query";
import getIMDbMovieImages from "../services/imdb-api/get-imdb-movie-images";
import { imgBaseURL } from "../services/imdb-api/imdb-api";

export default function useMovieImages(
  movieId: number,
) {
  const queryFn = async () => {
    const movieImages = await getIMDbMovieImages(movieId)

    let titleImgPath: string | null = 
      movieImages.logos.find(logo => logo.iso_639_1 === 'pt-BR')?.file_path
      || null
    if (titleImgPath) {
      titleImgPath = imgBaseURL + 'w500' + titleImgPath
    }

    let backdropImgPath: string | null =
      movieImages.backdrops.find(backdrop => backdrop.iso_639_1 == null)?.file_path
      || null
    if (backdropImgPath) {
      backdropImgPath = imgBaseURL + 'original' + backdropImgPath
    }

    let posterImgPath: string | null =
      movieImages.posters.find(poster => poster.iso_639_1 == 'pt-BR')?.file_path
      || movieImages.posters[0].file_path
      || null
    if (posterImgPath) {
      posterImgPath = imgBaseURL + 'w342' + posterImgPath
    }

    return {
      backdropImgPath,
      titleImgPath,
      posterImgPath,
    }
  }

  return useQuery({
    queryKey: ['movie', movieId, 'images'],
    queryFn,
  })
}
