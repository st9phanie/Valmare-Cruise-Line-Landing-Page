import date from '../../assets/2ppl.jpg';
import ppl from '../../assets/ppl.jpg';
import solo from '../../assets/solo.jpeg';




export const Offers = () => {
    return (
        <section>
        <div className="px-6 lg:px-32 py-16">
            <h1 className="text-4xl didot tracking-[1px] text-center">EXCLUSIVE OFFERS</h1>

            <div className="flex flex-col lg:flex-row mt-10 gap-6 lg:gap-x-10 w-full justify-center  montserrat-regular cursor-pointer">
                {/* 2 for 1 */}
                <div className="relative w-full lg:max-h-max  max-h-[250px] lg:w-1/3 shadow-sm overflow-hidden group">
                    <img src={date} alt="Caribbean" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/25 group-hover:bg-black/50 transition duration-300" />
                    <div className="absolute bottom-6 px-6 text-white z-10">
                        <h2 className="text-xl font-semibold">Limited-Time 2-for-1 Fares</h2>
                        <p className="text-sm">Experience luxury with a companion and enjoy <br/> 2-for-1 pricing on select sailings</p>
                        <button className="mt-3 bg-[#c9a14a] text-white px-4 py-2 text-sm font-medium hover:bg-[#b88d52] transition">
                            Learn More
                        </button>
                    </div>
                </div>

                {/* Valmare Society Savings */}
                <div className="relative w-full lg:max-h-max  max-h-[250px] lg:w-1/3 shadow-sm overflow-hidden group">
                    <img src={ppl} alt="Antarctic" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition duration-300" />
                    <div className="absolute bottom-6 left-6 text-white z-10">
                        <h2 className="text-xl font-semibold">Valmare Society Savings</h2>
                        <p className="text-sm">Past guests enjoy additional savings on a wide variety of cruises in all destinations</p>
                        <button className="mt-3 bg-[#c9a14a] text-white px-4 py-2 text-sm font-medium hover:bg-[#b88d52] transition">
                            Learn More
                        </button>
                    </div>
                </div>

                {/* Solo Travellers*/}
                <div className="relative lg:max-h-max  max-h-[250px] w-full lg:w-1/3 shadow-sm overflow-hidden group">
                    <img src={solo} alt="Mediterranean" className="w-full lg:h-full h-[250px] object-cover" />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition duration-300" />
                    <div className="absolute bottom-6 left-6 text-white z-10">
                        <h2 className="text-xl font-semibold">Solo Travellers</h2>
                        <p className="text-sm">Traveling Solo? Single guests pay a lower fare on select voyages
</p>
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
