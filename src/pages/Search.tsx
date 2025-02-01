import MovieCardLoading from "@/components/Loading/MovieCardLoading"
import MovieCard from "@/components/MovieCard"
import useSearchMovie from "@/hooks/use-search-movie"
import { ChevronFirst, ChevronLast, ChevronLeft, ChevronRight } from "lucide-react"
import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"
import { twMerge } from "tailwind-merge"

const SearchPage: React.FunctionComponent = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [pageNumber, setPageNumber] = useState(Number(searchParams.get('page')) || 1)

  const searchQuery = searchParams.get('query') ?? ''

  const search = useSearchMovie({
    query: searchQuery,
    pageNumber,
  })

  const handlePreviousPage = () => setPageNumber(state => state - 1)
  const handleFirstPage = () => setPageNumber(1)
  const handleNextPage = () => setPageNumber(state => state + 1)
  const handleLastPage = () => setPageNumber(search.results?.totalPages || 1)

  const handleChangeDocumentTitle = () => {
    const searchState = search.results
      ? `${search.results.totalResults} resultados`
      : 'buscando...'  

    document.title = `FlixVault: busca por "${searchQuery}" (${searchState})`
  }
  const handleChangePageNumber = () => {
    setSearchParams(params => {
      params.set('page', JSON.stringify(pageNumber))

      return params
    })
    window.scroll({ top: 0, behavior: 'smooth' })
  }

  useEffect(handleChangePageNumber, [pageNumber])
  useEffect(handleChangeDocumentTitle, [searchQuery, search.results])

  return (
    <div className="flex flex-col gap-8 mt-40">
      <p className={twMerge(
        "leading-8 flex items-center gap-2 justify-center",
        search.results ? null : "animate-pulse",
      )}>
        {search.isLoading ? (
          "Buscando..."
        ) : (
          `Filmes com "${searchQuery}" encontrados: 
          ${search.error ? 0 : search.results!.totalResults}`
        )}
      </p>

      <div className="flex gap-4 justify-center flex-wrap">
        {search.results ? search.results.data.map(movie => (
          <MovieCard movie={movie} key={movie.id} />
        )) : Array.from({ length: 20 }).map((_, i) => (
          <MovieCardLoading key={i} />
        ))}
      </div>

      <div className="flex justify-center gap-2 items-center">
        <button
          className="border border-w-[1px] border-gray-700 rounded p-2"
          title="Primeira página"
          onClick={handleFirstPage}
        >
          <ChevronFirst />
        </button>
        <button
          className="border border-w-[1px] border-gray-700 rounded p-2"
          title="Página anterior"
          onClick={handlePreviousPage}
        >
          <ChevronLeft />
        </button>

        <p className={twMerge(
          "px-4",
          search.results ? "" : "animate-pulse",
        )}>
          {search.results
            ? `Página ${pageNumber} de ${search.results?.totalPages}`
            : "Buscando..."
          }
        </p>

        <button
          className="border border-w-[1px] border-gray-700 rounded p-2"
          title="Próxima página"
          onClick={handleNextPage}
        >
          <ChevronRight />
        </button>
        <button
          className="border border-w-[1px] border-gray-700 rounded p-2"
          title="Última página"
          onClick={handleLastPage}
        >
          <ChevronLast />
        </button>
      </div>
    </div>
  )
}

export default SearchPage
