import pic1 from "../../assets/cruise.jpg";
import pic2 from "../../assets/mobileHero.jpg";


export const Hero = () => {
    return (
        <section id="#">
            <div className="relative w-full lg:min-h-[600px] hidden lg:flex items-center justify-center font-[Beautifully_Delicious]">
                {/* Background Image */}
                <img
                    src={pic1}
                    alt="Hero section image"
                    className="absolute inset-0 w-full h-full object-cover z-0"
                />

                {/* Stronger Gradient Overlay */}
                <div className="absolute inset-0 bg-black/55 z-10 pointer-events-none" />

                {/* Hero Text Content */}
                <div className="relative z-20 text-center px-8 ">
                    <p className="text-white text-[40px] lg:text-[48px] font-[The_Seasons] tracking-[1px] ">
                        Unrivaled Journeys. Infinite Horizons.
                    </p>

                    <p className="text-white font-[Beautifully_Delicious] text-lg lg:text-xl uppercase tracking-wider leading-relaxed">
                        Step aboard Valmare and experience the pinnacle of luxury cruising.
                    </p>

                    <button className="bg-[#4E7187]/80 mt-10 border border-white text-white text-xs font-semibold tracking-[1px] px-6 py-3  hover:bg-[#051822]/80  transition duration-300">
                        EXPLORE
                    </button>
                </div></div>


            {/* MOBILE */}
            <div className="relative w-full lg:hidden flex min-h-[300px] montserrat-regular">
                <img
                    src={pic2}
                    alt="Hero section image"
                    className="absolute inset-0 w-full h-full object-cover z-0"
                    loading="lazy"

                />

                <div className="absolute inset-0 bg-gradient-to-r from-black/35 to-transparent z-10 pointer-events-none" />

                <div className="text-white z-20 px-10 text-left flex flex-col justify-center">
                    <p className="text-white text-2xl didot">
                        SALE - UP TO 50% OFF
                    </p>
                    <p className="mt-1 text-xs tracking-[0px]">
                        Your dream voyage awaits with our most significant savings event. For a
                        limited time, unlock up to 50% Off on 2025-2026
                        luxury voyages worldwide.
                        <br />
                    </p>
                    <button className="bg-[#4E7187] max-w-[120px] transition-all duration-300 ease-in-out font-semibold text-xs text-white px-2 py-2 mt-2 cursor-pointer hover:bg-[#b88d52] transition duration-300">
                        VIEW VOYAGES
                    </button>
                </div>
            </div>

        </section>
    );
};
