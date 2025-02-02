import MovieCardLoading from "@/components/Loading/MovieCardLoading"
import MovieCard from "@/components/MovieCard"
import IconButton from "@/components/OutlinedButton"
import useSearchMovie from "@/hooks/use-search-movie"
import { useEffect, useState } from "react"
import { LuChevronFirst, LuChevronLast, LuChevronLeft, LuChevronRight } from "react-icons/lu"
import { useSearchParams } from "react-router-dom"
import { twMerge } from "tailwind-merge"

const SearchPage: React.FunctionComponent = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [pageNumber, setPageNumber] = useState(Number(searchParams.get('page')) || 1)

  const searchQuery = searchParams.get('query') ?? ''

  const search = useSearchMovie({ query: searchQuery, pageNumber })

  const handlePreviousPage = () => setPageNumber(state => state - 1)
  const handleNextPage     = () => setPageNumber(state => state + 1)
  const handleFirstPage    = () => setPageNumber(1)
  const handleLastPage     = () => setPageNumber(search.results?.totalPages || 1)

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
  const handleChangeSearch = () => setPageNumber(1)

  useEffect(handleChangePageNumber, [pageNumber])
  useEffect(handleChangeDocumentTitle, [search.results])
  useEffect(handleChangeSearch, [searchQuery])

  return (
    <div className="flex flex-col gap-8 mt-40 mb-8">
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
        <IconButton
          title="Primeira página"
          onClick={handleFirstPage}
          disabled={pageNumber === 1}
          Icon={LuChevronFirst}
        />
        <IconButton
          title="Página anterior"
          onClick={handlePreviousPage}
          disabled={pageNumber === 1}
          Icon={LuChevronLeft}
        />

        <p className={twMerge(
          "px-4",
          search.results ? null : "animate-pulse",
        )}>
          {search.results
            ? `Página ${pageNumber} de ${search.results?.totalPages}`
            : "Buscando..."
          }
        </p>

        <IconButton
          title="Próxima página"
          onClick={handleNextPage}
          disabled={pageNumber === search.results?.totalPages}
          Icon={LuChevronRight}
        />
        <IconButton
          title="Última página"
          onClick={handleLastPage}
          disabled={pageNumber === search.results?.totalPages}
          Icon={LuChevronLast}
        />
      </div>
    </div>
  )
}

export default SearchPage
