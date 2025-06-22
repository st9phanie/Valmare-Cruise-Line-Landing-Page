export const Search = () => {
  const searchItems = ["Destination", "Departure Date", "Duration", "Depart From"];

  return (
    <div className="pb-16 bg-white">
    <div className=" mt-18 flex border border-gray-200 bg-[#051822] shadow-sm divide-x-1 font-[Beautifully_Delicious] divide-[#EDF8FF] overflow-hidden max-w-max mx-auto my-4">
      {searchItems.map((item, index) => (
        <div key={index} className="lg:flex hidden items-center bg-[#051822] justify-between px-6 py-4 min-w-[180px]">
          <span className="text-white font-semibold">{item}</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path fill="none" stroke="#AD815B" stroke-linecap="round" stroke-linejoin="round" d="m7 10l5 5l5-5"/></svg>
        </div>
      ))}
      <button className="lg:flex items-center hidden bg-[#AD815B] hover:bg-[#ba9271] text-white font-semibold px-8 py-4 tracking-wide ">
        FIND A CRUISE
      </button>
    </div>
  
   <div className="bg-black flex  text-white min-h-[100px] w-full lg:hidden relative -top-10 justify-center py-5 px-10 [Beautifully_Delicious]">
    <div className="flex flex-col">
      <p className=" didot text-lg tracking-[0.5px]">DISCOVER THE WORLD WITH US</p>
      <button className="bg-[white] text-black font-semibold text-sm mt-2 py-2 "> FIND A CRUISE</button></div>
    </div>
    </div>
  );
};
