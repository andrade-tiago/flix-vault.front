function MovieCardLoading() {
  return (
    <div className="w-44 flex flex-col gap-2">
      <div className="w-full h-64 rounded-xl bg-gray-600/30 animate-pulse" />

      <div className="w-2/3 h-4 bg-gray-600/30 rounded-md animate-pulse" />

      <div className="flex justify-between">
        <div className="h-4 w-10 bg-gray-600/30 rounded-md animate-pulse" />
        <div className="h-4 w-10 bg-gray-600/30 rounded-md animate-pulse" />
        <div className="h-4 w-16 bg-gray-600/30 rounded-md animate-pulse" />
      </div>
    </div>
  )
}
export default MovieCardLoading
