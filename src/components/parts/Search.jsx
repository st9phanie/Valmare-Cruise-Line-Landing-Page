export const Search = () => {
  const searchItems = ["Destination", "Departure Date", "Duration", "Depart From"];

  return (
    <div>
    <div className="flex border border-gray-200 shadow-sm divide-x montserrat-regular divide-gray-200 overflow-hidden max-w-max mx-auto my-4">
      {searchItems.map((item, index) => (
        <div key={index} className="lg:flex hidden items-center justify-between px-6 py-4 min-w-[180px]">
          <span className="text-gray-800 font-medium">{item}</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path fill="none" stroke="#c9a14a" stroke-linecap="round" stroke-linejoin="round" d="m7 10l5 5l5-5"/></svg>
        </div>
      ))}
      <button className="lg:flex items-center hidden bg-[#c9a14a] hover:bg-[#b88d52] text-white font-semibold px-8 py-4 tracking-wide ">
        FIND A CRUISE
      </button>
    </div>
  
   <div className="bg-black flex  text-white min-h-[100px] w-full lg:hidden relative -top-10 justify-center py-5 px-10 montserrat-regular">
    <div className="flex flex-col">
      <p className=" didot text-lg tracking-[0.5px]">DISCOVER THE WORLD WITH US</p>
      <button className="bg-[white] text-black font-semibold text-sm mt-2 py-2 "> FIND A CRUISE</button></div>
    </div>
    </div>
  );
};
