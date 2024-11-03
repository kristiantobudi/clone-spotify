import spotifyLogo from "../../../public/image/spotify.png";
import homeLogo from "../../../public/image/home.png";
import downloadLogo from "../../../public/svg/download-circular-button.svg";
import Image from "next/image";

export default function NavBar() {
  return (
    <div className="bg-black px-4 sm:px-6 lg:px-8">
      <div className="flex items-center h-20 justify-between flex-wrap space-y-4 md:space-y-0">
        {/* Left Section: Spotify Icon */}
        <div className="flex items-center space-x-4 hover:scale-110 transition duration-75">
          <Image
            src={spotifyLogo}
            alt="Spotify"
            width={40}
            height={40}
            className="cursor-pointer"
          />
        </div>

        {/* Center Section: Home Icon and Search Bar */}
        <div className="flex items-center justify-between gap-2 w-full md:w-auto flex-grow md:flex-grow-0">
          {/* Home Icon */}
          <div className="p-2 rounded-full bg-gray-800 cursor-pointer hover:scale-110 transition duration-75">
            <Image src={homeLogo} alt="Home" width={30} height={30} />
          </div>

          {/* Search Bar */}
          <div className="flex-grow max-w-full md:max-w-lg mx-auto relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-5 h-5 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="text"
              placeholder="What do you want to play?"
              className="w-full py-3 pl-10 pr-10 bg-elevatedBase text-gray-200 hover:bg-tintedBase text-base rounded-full focus:outline-none md:w-[500px]"
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3">
              <svg
                className="w-5 h-5 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M20 6h-4.586l-.707-.707A1 1 0 0 0 14 5H6a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h8a1 1 0 0 0 .707-.293l.707-.707H20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2z"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <button className="text-black font-semibold rounded-full px-4 py-2 bg-white hover:scale-105 transition duration-75 hidden md:block">
            Explore Premium
          </button>
          <div className="items-center justify-between gap-2 flex hover:scale-105 transition duration-75 pr-3">
            <Image src={downloadLogo} alt="Download" width={20} height={20} />
            <button className="text-white font-semibold hidden sm:block">
              Install App
            </button>
          </div>
          <svg
            className="w-5 h-5 text-white cursor-pointer hidden sm:block"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M12 22s8-4 8-10V7.5A4.5 4.5 0 0 0 15.5 3h-7A4.5 4.5 0 0 0 4 7.5V12c0 6 8 10 8 10Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <div className="w-8 h-8 md:w-11 md:h-11 rounded-full bg-green-900 flex items-center justify-center text-white text-sm md:text-base">
            K
          </div>
        </div>
      </div>
    </div>
  );
}
