import { SkipBack, Play, SkipForward, Pause } from "lucide-react";

const Player = () => {
  return (
    <div className="fixed bottom-0 left-[35%] w-[40rem] bg-[#171717] p-4 flex items-center justify-between text-white">
      <div className="w-16 h-16 bg-gray-700 rounded-md"></div>
      <div className="flex items-center gap-6">
        <SkipBack
          size={24}
          className="cursor-pointer hover:text-white transition-colors"
        />

        <Play
          size={24}
          className="cursor-pointer hover:text-gray-300 text-white transition-colors"
        />

        <Pause
          size={24}
          className="cursor-pointer text-white hover:text-gray-300 transition-colors hidden"
        />

        <SkipForward
          size={24}
          className="cursor-pointer hover:text-white transition-colors"
        />
      </div>
    </div>
  );
};

export default Player;
