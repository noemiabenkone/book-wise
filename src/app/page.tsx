import { House, Search, Heart, Shuffle, SkipBack, Play, SkipForward, Repeat } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <header className=" w-full h-16 bg-white shadow-md">
        <div className="flex items-center justify-between px-8 h-full ">
          <div>
            <h1 className="text-xl font-bold text-blue-600">BOOK-WISE</h1>
          </div>
         <div className="flex space-x-6 text-gray-600">
            <House className="w-6 h-6 hover:text-blue-600 cursor-pointer"/>
            <Search className="w-6 h-6 hover:text-blue-600 cursor-pointer"/>
            <Heart className="w-6 h-6 hover:text-red-500 cursor-pointer"/>
         </div>
        </div>
      </header>
      <main className="flex-grow px-8 py-4">
        <p className="text-center text-lg text-gray-700">
          Explore livros de programação e melhore suas habilidades!
        </p>
      </main>
      <footer className="flex flex-col items-center">
        <div className="flex items-center gap-6">
       < Shuffle size={20} className="text-zinc-600" />
       <SkipBack size={20} className="text-zinc-600" />
       <button className="w-10 h-10 flex items-center justify-center pl-1 rounded-full bg-white text-black ml-auto mr-8 group-houver:visible">
       <Play />
       </button>
       <SkipForward size={20} className="text-zinc-600"/>
       <Repeat size={20} className="text-zinc-600"/>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-zinc-500">0:31</span>
          <div className="h-1 rounded-full w-96 bg-zinc-600">
            <div className="h-1 w-40 bg-zinc-200 rounded-full"></div>
          </div>
          <span className="text-xs text-zinc-500">0:31</span>

        </div>
      </footer>
    </div>
  );
}
