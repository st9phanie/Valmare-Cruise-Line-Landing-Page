import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
// Import Swiper styles for custom navigation (important for arrow styling)


import galapagos from '../../assets/galapagos.jpg';
import mediterranean from '../../assets/mediterranean.jpg';
import arctic from '../../assets/arctic.jpg';
import bi from '../../assets/BI.jpg';
import ant from '../../assets/ant2.jpg';
import afr from '../../assets/afr.jpg';

export const Destinations = () => {

    const slides = [
        { title: "GALÁPAGOS ISLANDS", image: galapagos, desc: "Untouched nature, rare wildlife, and dramatic volcanic landscapes." },
        { title: "MEDITERRANEAN", image: mediterranean, desc: "Sun-kissed timeless coastal cities, vibrant cultures, and crystal-clear waters." },
        { title: "ARCTIC", image: arctic, desc: "Towering glaciers, elusive wildlife, and mesmerizing Aurora Borealis." },
        { title: "NORTHERN EUROPE & THE BRITISH ISLES", image: bi, desc: "Charming cobblestone streets, dramatic fjords, and timeless castles." },
        { title: "ANTARCTICA", image: ant, desc: "Towering icebergs, pristine wilderness, and unforgettable wildlife encounters." },
        { title: "AFRICA", image: afr, desc: "Stunning landscapes, iconic wildlife safaris, and rich cultural heritage." },
    ];

    return (
        // Adjusted padding-bottom for the section for more breathing room
        <section id="#destinations" className="font-[Beautifully_Delicious] flex flex-col justify-center items-center w-full py-20 lg:py-28 bg-white">
            <div className="px-8 lg:px-32 w-full "> 
                <div className="flex flex-col items-center justify-center gap-y-6 mb-12 lg:mb-16 text-center"> 
                    {/* Assuming 'The_Seasons' is your elegant serif font */}
                    <h1 className="text-4xl lg:text-5xl tracking-widest text-gray-800 font-[The_Seasons] uppercase">
                        WORLDWIDE DESTINATIONS
                    </h1>
                    {/* Used a clearer, more readable font for the description, adjusted line height */}
                    <p className="text-lg text-gray-700 font-montserrat max-w-2xl leading-relaxed">
                        Unlock deeper discoveries with our tailored itineraries, designed to immerse you in each destination.
                    </p>

                    <div className="flex justify-center mt-3"> {/* Wrapped in a div to center */}
                    <button className="bg-[#AE835E] text-white px-8 py-3 text-base lg:text-lg tracking-wider hover:bg-[#ba9271] transition-colors duration-300 shadow-lg uppercase">
                        VIEW ALL DESTINATIONS
                    </button>
                </div>
                </div>

                <div className="relative"> {/* Added relative for custom navigation buttons */}
                    <Swiper
                        modules={[Navigation]}
                        navigation={{
                            nextEl: '.swiper-button-next-custom', // Custom class for next button
                            prevEl: '.swiper-button-prev-custom', // Custom class for prev button
                        }}
                        spaceBetween={20} // Reduced spaceBetween for a slightly tighter look
                        slidesPerView={1.2} // Show slightly more of the next slide on smaller screens
                        centeredSlides={true}
                        loop={true}
                        className="w-full h-[500px] lg:h-[600px]" // Gave the swiper a fixed height
                        breakpoints={{
                            768: { // md breakpoint and up
                                slidesPerView: 1.6, // Show more of the next slide on tablet
                                spaceBetween: 30,
                            },
                            1024: { // lg breakpoint and up
                                slidesPerView: 2.2, // Show more of the next slide on desktop
                                spaceBetween: 40, // Increased spacing for desktop
                            },
                            1280: { // xl breakpoint and up
                                slidesPerView: 1.4, // Even more visible slides for very large screens
                                spaceBetween: 20,
                            }
                        }}
                    >
                        {slides.map((slide, idx) => (
                            <SwiperSlide key={idx} className="flex justify-center items-center">
                                {/* Adjusted shadow and added hover scale for interaction */}
                                <div className="relative w-full h-full overflow-hidden rounded-lg shadow-xl group cursor-pointer">
                                    <img
                                        src={slide.image}
                                        alt={slide.title}
                                        loading="lazy"
                                        // Ensured aspect ratio and added hover effect
                                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                    />
                                    {/* Gradient overlay for text readability */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>

                                    {/* Text container, adjusted padding and alignment */}
                                    <div className="absolute bottom-0 left-0 w-full p-6 text-white text-left">
                                        {/* Added a bottom border for visual separation */}
                                        <h3 className="text-2xl lg:text-3xl font-semibold mb-2 border-b-2 border-white/50 pb-2">
                                            {slide.title}
                                        </h3>
                                        <p className="text-sm lg:text-base opacity-90 leading-snug">
                                            {slide.desc}
                                        </p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Custom Navigation Arrows (positioned outside the main carousel for a cleaner look) */}
                    <div className="swiper-button-prev-custom absolute top-1/2 -left-4 transform -translate-y-1/2 z-10 hidden lg:block bg-[#dee]/50 cursor-pointer">
                        {/* Custom SVG for prev arrow (more elegant) */}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10 text-gray-600 ">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                        </svg>
                    </div>
                    <div className="swiper-button-next-custom absolute top-1/2 -right-4 transform -translate-y-1/2 z-10 hidden lg:block bg-[#dee]/50 cursor-pointer">
                        {/* Custom SVG for next arrow (more elegant) */}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10 text-gray-600 ">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5 15.75 12l-7.5 7.5" />
                        </svg>
                    </div>
                </div>


                

            </div>
        </section>
    );
};