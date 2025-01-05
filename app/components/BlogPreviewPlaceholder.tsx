export const BlogPreviewPlaceholder = () => {
  return (
    <div className="bg-gray-800/50 hover:bg-gray-800/70 rounded-xl p-6 flex flex-col md:flex-row gap-6 transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer">
      <div className="md:w-1/3">
        <div className="rounded-lg bg-gray-700/20 object-cover w-full h-48" />
      </div>
      <div className={"md:w-2/3"}>
        <div className="h-6 rounded w-3/4 bg-gray-700/20 mb-4"></div>
        <div className="h-4 rounded w-1/2 bg-gray-700/20 mb-3"></div>
        <div className="h-4 rounded w-1/4 bg-gray-700/20 mb-3"></div>
      </div>
    </div>
  )
}