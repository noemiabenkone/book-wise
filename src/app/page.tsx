import { House, Search, Heart } from "lucide-react"

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
      <footer>
        
      </footer>
    </div>
  );
}
