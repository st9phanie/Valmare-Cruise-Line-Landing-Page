import crb from '../../assets/carribean.jpg';
import ant from '../../assets/ant.jpg';
import med from '../../assets/med.jpg';

export const Featured = () => {
    return (
        <section className=''>
        <div className="px-6 lg:px-32 lg:py-16">
            <h1 className="text-4xl didot tracking-[1px] text-center">FEATURED</h1>

            <div className="flex flex-col lg:flex-row mt-10 gap-6 lg:gap-x-10 w-full justify-center montserrat-regular cursor-pointer">
                {/* Caribbean Dreams */}
                <div className="relative w-full lg:max-h-max max-h-[250px] lg:w-1/3 shadow-sm overflow-hidden group">
                    <img src={crb} alt="Caribbean" className="w-full h-full object-cover"   loading="lazy"/>
                    <div className="absolute inset-0 bg-black/25 group-hover:bg-black/50 transition duration-300" />
                    <div className="absolute bottom-6 left-6 text-white z-10">
                        <h2 className="text-xl font-semibold">Caribbean Dreams</h2>
                        <p className="text-sm">7-Night Island Escape</p>
                        <button className="mt-3 bg-[#c9a14a] text-white px-4 py-2 text-sm font-medium hover:bg-[#b88d52] transition">
                            Learn More
                        </button>
                    </div>
                </div>

                {/* Antarctic Expedition */}
                <div className="relative w-full lg:max-h-max  max-h-[250px] lg:w-1/3 shadow-sm overflow-hidden group">
                    <img src={ant} alt="Antarctic" className="w-full h-full object-cover"    loading="lazy"/>
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition duration-300" />
                    <div className="absolute bottom-6 left-6 text-white z-10">
                        <h2 className="text-xl font-semibold">Antarctic Expedition</h2>
                        <p className="text-sm">Discover the Last Frontier</p>
                        <button className="mt-3 bg-[#c9a14a] text-white px-4 py-2 text-sm font-medium hover:bg-[#b88d52] transition">
                            Learn More
                        </button>
                    </div>
                </div>

                {/* Mediterranean Voyage */}
                <div className="relative lg:max-h-max w-full lg:w-1/3 max-h-[250px] shadow-sm overflow-hidden group">
                    <img src={med} alt="Mediterranean" className="w-full h-full object-cover"   loading="lazy" />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition duration-300" />
                    <div className="absolute bottom-6 left-6 text-white z-10">
                        <h2 className="text-xl font-semibold">Mediterranean Voyage</h2>
                        <p className="text-sm">Sail Through History</p>
                        <button className="mt-3 bg-[#c9a14a] text-white px-4 py-2 text-sm font-medium hover:bg-[#b88d52] transition">
                            Learn More
                        </button>
                    </div>
                </div>
            </div>


            
        </div>
        </section>
    );
};
