import crb from '../../assets/crb1.jpg';
import ant from '../../assets/ant3.jpg';
import med from '../../assets/med1.jpg';


export const featured = [
    { title: "Caribbean Dreams", img: crb, desc: "7-Night Island Escape" },
    { title: "Antarctic Expedition", img: ant, desc: "Discover the Last Frontier" },
    { title: "Mediterranean Voyage", img: med, desc: "Sail Through History" }
]

export const Featured = () => {
    return (
        <section className='bg-white'>
            <div className="px-6 lg:px-32 lg:py-16 w-full">
                <h1 className="text-4xl font-[The_Seasons] tracking-[1px] text-center">FEATURED</h1>

                <div className='flex flex-row w-full gap-x-8'>
                    {featured.map((feature, key) => {
                        return (
                            <div key={key} className="flex flex-col lg:flex-row mt-10 gap-6 w-full justify-center font-[Beautifully_Delicious] cursor-pointer">
                                <div className="relative lg:max-h-max max-h-[250px] shadow-sm overflow-hidden group">
                                    <img src={feature.img} alt={feature.title} className="w-full h-full object-cover" loading="lazy" />
                                    <div className="absolute inset-0 bg-black/25 group-hover:bg-black/50 transition duration-300" />
                                    <div className='absolute pt-6 bottom-0 w-full'>
                                    <div className=" bg-[#051822]/25 px-6 py-4 text-white z-10 justify-center">
                                        <h2 className="text-xl font-semibold ">{feature.title}</h2>
                                        <p className="text-sm">{feature.desc}</p>
                                        <button className="flex text-center mt-4 bg-[#051822]/80 border border-[#aaa] text-white px-4 py-2 text-sm font-semibold hover:bg-[#ba9271] transition">
                                            Learn More
                                        </button>
                                    </div>
                                </div></div>
                            </div>
                        )
                    })}
                </div>

            </div>
        </section>
    );
};
