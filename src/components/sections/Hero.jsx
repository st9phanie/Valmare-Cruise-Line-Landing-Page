import pic1 from "../../assets/pic1.jpg";
import pic2 from "../../assets/mobileHero.jpg";


export const Hero = () => {
    return (
        <section id="#">
            <div className="relative w-full lg:min-h-[600px] lg:flex items-center justify-start hidden lg:-top-10 ">
                {/* Background Image */}
                <img
                    src={pic1}
                    alt="Hero section image"
                    className="absolute inset-0 w-full h-full object-cover z-0"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/45 to-transparent z-10 pointer-events-none" />

                {/* Hero Text Content */}
                <div className="text-white z-20 px-32 text-left lg:mt-50">
                    <p className="text-white text-[48px] didot">
                        SALE - UP TO 50% OFF
                    </p>
                    <p className="montserrat-regular mt-2 text-base tracking-[0.5px]">
                        Your dream voyage awaits with our most significant savings event. For a
                        <br />
                        limited time, unlock up to 50% Off on 2025-2026
                        luxury voyages worldwide.
                        <br />Experience unparalleled value and indulge in ultra-luxury travel.
                    </p>
                    <button className="bg-[#cda14a] transition-all duration-300 ease-in-out font-semibold text-white px-4 py-3 mt-6 cursor-pointer hover:bg-[#b88d52] transition duration-300">
                        VIEW VOYAGES
                    </button>
                </div>
            </div>

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
                    <button className="bg-[#cda14a] max-w-[120px] transition-all duration-300 ease-in-out font-semibold text-xs text-white px-2 py-2 mt-2 cursor-pointer hover:bg-[#b88d52] transition duration-300">
                        VIEW VOYAGES
                    </button>
                </div>
            </div>

        </section>
    );
};
