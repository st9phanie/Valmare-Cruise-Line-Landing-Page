import date from '../../assets/coup.jpg';
import ppl from '../../assets/int.jpg';
import solo from '../../assets/solo.jpg';

export const offers = [
    { title: "2-for-1 Fares", img: date, desc: "Experience luxury with a companion" },
    { title: "Valmare Past Guests", img: ppl, desc: "Enjoy savings on a variety of cruises" },
    { title: "Solo Travellers", img: solo, desc: "Enjoy lower fares on select voyages" }
]


export const Offers = () => {
    return (
        <section className=''>
            <div className="px-6 lg:px-32 lg:py-16 w-full">
                <h1 className="text-4xl font-[The_Seasons] tracking-[1px] text-center">EXCLUSIVE OFFERS</h1>

                <div className='flex flex-row w-full gap-x-8'>
                    {offers.map((offer, key) => {
                        return (
                            <div key={key} className="flex flex-col lg:flex-row mt-10 gap-6  w-full justify-center font-[Beautifully_Delicious] cursor-pointer">
                                <div className="relative lg:max-h-max max-h-[250px] shadow-sm overflow-hidden group">
                                    <img src={offer.img} alt={offer.title} className="w-full h-full object-cover" loading="lazy" />
                                    <div className="absolute inset-0 bg-black/25 group-hover:bg-black/50 transition duration-300" />
                                    <div className='absolute pt-6 bottom-0 w-full'>
                                        <div className=" bg-[#051822]/25 px-6 py-4 text-white z-10 justify-center">
                                            <h2 className="text-xl font-semibold">{offer.title}</h2>
                                            <p className="text-sm">{offer.desc}</p>
                                            <button className="flex items-center justify-center mt-4 bg-[#051822]/80 border border-[#aaa] text-white px-4 py-2 text-sm font-semibold hover:bg-[#ba9271] transition">
                                                Learn More
                                            </button>
                                        </div></div>
                                </div>
                            </div>
                        )
                    })}
                </div>

            </div>
        </section>
    );
};
