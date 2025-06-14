import { Clock, Heart } from "lucide-react";
import Link from "next/link";

const page = async () => {

  //loader
  await new Promise((resolve) => setTimeout(() => {
    resolve("Content is currently loading...")
  }, 4000)
);

  const songs = [
    {
      id: 1,
      artist: "Dopesmoke",
      title: "(67) Dopesmoke - Smoking Kills",
      time: "2:19",
    },
    {
      id: 2,
      artist: "Fumez",
      title:
        "(Zone 2) Trizzac X Kwengface X Karma X LR - Plugged In W Fumez The Engineer",
      time: "4:11",
    },
    {
      id: 3,
      artist: "Joyner Lucas",
      title: "Best For Me",
      time: "3:11",
    },
    {
      id: 4,
      artist: "Laddskii",
      title: "#OFB Kash X Laddskii - Rumble Reload",
      time: "3:11",
    },
  ];
  return (
    <>
      <div className="w-[96%] mx-auto px-4">
        <h2 className="text-3xl text-white mt-8 font-bold mb-6">Songs Collection</h2>

        <ul className="space-y-4">
       
          {songs.map((song) => (
               <Link href={`/musics/${song.id}`} key={song.id}>
            <li
              key={song.id}
              className="flex items-center justify-between p-3 hover:bg-[#2A2929] rounded-md cursor-pointer transition-all duration-200 ease-in-out transform hover:scale-105"
            >
              <div className="flex items-center gap-5">
                <img className="h-16 w-16 bg-gray-700 rounded-md flex-shrink-0"
                  src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Unsplash image"
                />

                <div>
                  <p className="text-white font-medium">{song.artist}</p>
                  <p className="text-sm text-gray-4">{song.title}</p>
                </div>
              </div>

              <div className="flex items-center gap-6 text-gray-400">
                <div className="flex items-center gap-1">
                  <Clock size={16}/>
                  <span>{song.time}</span>
                </div>

                <Heart size={16} className="cursor-pointer hover:text-red-500"/>

                <button className="text-lg font-bold">:</button>
              </div>
            </li>
            </Link>
          ))}
        </ul>
      </div>
    </>
  );
};

export default page;
