export const Search = () => {
  const searchItems = ["Destination", "Departure Date", "Duration", "Depart From"];

  return (
    <div className="flex border border-gray-200 shadow-sm divide-x montserrat-regular divide-gray-200 overflow-hidden bg-white max-w-max mx-auto my-4">
      {searchItems.map((item, index) => (
        <div key={index} className="flex items-center justify-between px-6 py-4 min-w-[180px]">
          <span className="text-gray-800 font-medium">{item}</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path fill="none" stroke="#c9a14a" stroke-linecap="round" stroke-linejoin="round" d="m7 10l5 5l5-5"/></svg>
        </div>
      ))}
      <button className="bg-[#c9a14a] hover:bg-[#b88d52] text-white font-semibold px-8 py-4 tracking-wide ">
        SEARCH
      </button>
    </div>
  );
};
