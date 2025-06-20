
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import galapagos from '../../assets/galapagos.jpg';
import mediterranean from '../../assets/mediterranean.jpg';
import arctic from '../../assets/arctic.jpg';
import bi from '../../assets/BI.jpg';
import ant from '../../assets/ant2.jpg';
import afr from '../../assets/afr.jpg';





export const Destinations = () => {

    const slides = [
        { title: "GALÁPAGOS ISLANDS", image: galapagos, desc:"Discover the enchanting Galápagos Islands, where untouched nature, rare wildlife, and dramatic volcanic landscapes create a once-in-a-lifetime expedition"},
        { title: "MEDITERRANEAN", image:mediterranean,desc:"Sail through the sun-kissed Mediterranean, where timeless coastal cities, vibrant cultures, and crystal-clear waters offer an unforgettable journey of elegance and history" },
        { title: "ARCTIC", image:arctic,desc:"Embark on a breathtaking Arctic journey where towering glaciers, elusive wildlife, and the mesmerizing dance of the Northern Lights illuminate a truly unforgettable expedition" },
        { title: "NORTHERN EUROPE & THE BRITISH ISLES", image:bi,desc:"Discover the charm of cobblestone streets, dramatic fjords, and timeless castles on a breathtaking cruise through Northern Europe and the British Isles" },
        { title: "ANTARCTICA", image:ant,desc:"Embark on the ultimate adventure to Antarctica, where towering icebergs, pristine wilderness, and unforgettable wildlife encounters await at the edge of the world." },
        { title: "AFRICA", image:afr,desc:"Experience the vibrant heart of Africa, where stunning landscapes, iconic wildlife safaris, and rich cultural heritage create a journey like no other." },

    ];

    return (
        <section id="#destinations" className="bg-[#f8f4f0] montserrat-regular">
            <div className="px-6 lg:px-32 py-16 montserrat-regular">
                <div className="flex flex-col lg:flex-row items-center">
                    <h1 className="text-4xl didot tracking-[0.5px] text-center">WORLDWIDE DESTINATIONS</h1>
                    <div className="flex flex-col items-start gap-2">
                        <p>Truly immersing yourself in your destination requires a brand-new experience. Our tailored itineraries allow you to go deeper</p>
                        <button className="mt-3 bg-[#c9a14a] text-white px-4 py-2 text-sm font-medium hover:bg-[#b88d52] transition">VIEW ALL DESTINATIONS</button>
                    </div>
                </div>


                <div className="py-16 ">
                    <Swiper
                        modules={[Navigation]}
                        navigation
                        spaceBetween={30}
                        slidesPerView={1.4}
                        centeredSlides={true}
                        loop={true}
                        className="w-full max-w-6xl"

                    >
                        {slides.map((slide, idx) => (
                            <SwiperSlide key={idx}>
                                <div className="relative  mt-7 overflow-hidden shadow-md">
                                    <img
                                        src={slide.image}
                                        alt={slide.title}
                                        className="w-full h-[450px] object-cover"
                                    />                                </div>

                                <div className=" py-6 text-center">
                                    <h3 className=" text-3xl tracking-[1px]">{slide.title}</h3>
                                    <p className="py-4 didot text-baseline text-gray-800 px-4">{slide.desc}</p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    )
}