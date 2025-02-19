import original from "../assets/original.png";
import emoji from "../assets/emoji.png";

const Result = () => {
  return (
    <div className="mx-4 my-3 lg:mx-44 mt-14 min-h-[75vh] font-mono">
      
      <div className="bg-white px-8 py-6 rounded-lg drop-shadow-lg">
        {/* Image Container */}
        <div className="flex flex-col sm:grid grid-cols-2 gap-8">
          {/* Left Side Image */}
          <div>
            <p className="font-semibold text-gray-600 mb-2">Original</p>
            <img className="rounded-md border border-orange-400" src={original} alt="" />
          </div>
          {/* Right Side Image */}
          <div className="flex flex-col"> 
            <p className="font-semibold text-gray-600 mb-2">Artified</p>
            <div className="rounded-md border border-orange-400 h-full relative "> 
              <img className="rounded-md border border-orange-400" src={emoji} alt="" />
              {/* <div className="absolute right-1/2 bottom-1/2 transform translate-x-1/2 translate-y-1/2">
                <div className="border-4 border-violet-600 rounded-full h-12 w-12 border-t-transparent animate-spin"></div>
              </div> */}
            </div>
          </div>
        </div>
        <div className="flex justify-center sm:justify-end items-center flex-wrap gap-4 mt-6">
          <button className="px-8 py-2.5 text-red-600 text-sm border border-orange-600 rounded-full hover:scale-105 transition-all duration-500">Try Another Image </button>
          <a className="px-8 py-2.5 text-white text-sm bg-gradient-to-r from-red-500 to-orange-500 rounded-full hover:scale-105 transition-all duration-500" href="">Download Image</a>
        </div>
      </div>

    </div>
  )
}

export default Result
