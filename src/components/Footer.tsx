import { Play, Repeat, Shuffle, SkipBack, SkipForward } from "lucide-react";


export default function Footer(){
    return (
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
    )
}