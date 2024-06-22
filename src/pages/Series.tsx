import { useParams } from "react-router-dom"
import GenreList from "@/components/GenreList"
import BackButton from "@/components/BackButton"
import useMediaImages from "@/hooks/use-media-images"
import Rating from "@/components/Rating"
import { MediaData } from "@/components/MediaData"
import { MediaType } from "@/enums/media-type"
import useSeriesDetails from "@/hooks/use-series-details"
import useSeriesRecommendationsList from "@/hooks/use-series-recommendations-list"
import MediaListSection from "@/components/MediaListSection"
import { useEffect } from "react"

type RouteParams = {
  id: string
}

export default function SeriesPage() {
  const params = useParams<RouteParams>()
  const seriesID = Number(params.id)

  const { data: series } = useSeriesDetails(seriesID)
  const { data: seriesImages } = useMediaImages(MediaType.Series, seriesID)
  const { data: seriesRecommendations } = useSeriesRecommendationsList(seriesID)

  useEffect(() => {
    document.title = `FlixVault: assistir a "${series?.title}"`
  }, [series])

  if (!series) {
    return "Carregando..."
  }

  const productionCompanies = 
    series.productionCompanies.length > 0
    ? series.productionCompanies.join(', ').concat('.')
    : '(indisponível)'

  return (
    <div>
      <div className="relative bg-gradient-to-t from-gray-950 pt-40 pb-16 min-h-screen px-3 md:px-6">
        {seriesImages?.backdrop && (
          <img
            src={seriesImages.backdrop} alt=""
            className="absolute w-full h-full object-cover -z-10 top-0 left-0 opacity-30"
          />
        )}

        <div className="flex flex-col gap-10 mx-auto max-w-2xl sm:max-w-6xl">
          <BackButton />

          <div className="flex flex-col md:flex-row gap-10 items-center md:items-start justify-between">
            <div className="flex flex-col items-center md:order-2 w-full max-w-sm">
              {seriesImages?.poster && (
                <img
                  src={seriesImages.poster}
                  alt=""
                  className="min-w-60 max-w-60 rounded-lg shadow-lg"
                />
              )}
            </div>

            <div className="flex flex-col gap-5 max-w-2xl w-full">
              <MediaData.Root>
                {/* <MediaData.Item>{series.year}</MediaData.Item>
                <MediaData.Item>{series.runtime} min</MediaData.Item> */}
                <MediaData.Item><Rating value={series.rating} /></MediaData.Item>
              </MediaData.Root>

              <p className="uppercase tracking-widest font-medium -mb-4 text-sm">
                Assistir a
              </p>

              <h1 className="font-medium text-4xl">
                {series.title}
              </h1>

              <p className="text-gray-300 md:text-justify">
                {series.overview || 'Sinopse indisponível'}
              </p>

              <GenreList genres={series.genres} />

              <ul className="list-disc pl-6">
                <li>
                  Título original ({series.originalLanguage}): {series.originalTitle}
                </li>
                <li>
                  Produtores: {productionCompanies}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {seriesRecommendations && seriesRecommendations.length > 0 && (
        <MediaListSection title="Com base neste" mediaList={seriesRecommendations} />
      )}
    </div>
  )
}
