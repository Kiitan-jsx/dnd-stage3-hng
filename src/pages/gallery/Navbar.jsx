import { AiOutlineSearch, AiOutlineLogout } from "react-icons/ai";

export default function Navbar() {
  return (
    <nav className="w-full py-3 px-3 bg-gray-800 flex items-center border-b bg-gradient-to-b from-slate-800  to-stone-950 mb-4">
      <h1 className="font-bold text-sm md:text-2xl text-white mr-3 whitespace-nowrap ">Drag  <span className="text-gray-500">n'</span> Drop </h1>
      <form className="flex items-center gap-1 text-sm">
        <input
          type="text"
          placeholder="Search..."
          className="ml-8 lg:ml-96 py-1 w-20 md:w-full md:py-2 px-2 rounded bg-transparent text-white placeholder:text-white border-2 flex-grow"
        />
        <button className="border-2 text-white py-1 px-1 rounded-full flex gap-2 items-center hover:bg-[#263460] active:bg-[#182244]">
          <AiOutlineSearch className="text-sm md:text-xl" />
        </button>
      </form>

      <button className="flex gap-2 items-center text-white ml-auto border-2 border-white py-1 px-2 text-sm md:text-base rounded-full hover:bg-red-600 active:bg-red-800">
        <AiOutlineLogout className="text-sm md:text-base" />
        <span>Signout</span>
      </button>
    </nav>
  );
}