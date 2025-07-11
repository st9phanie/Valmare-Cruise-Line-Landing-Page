import food from '../../assets/test.jpg'
import service from '../../assets/serv.jpg'
import suite from '../../assets/room.jpg'
import comp from '../../assets/comp.jpg'



import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";



export const WhyUs = () => {
    const slides = [
        { title: "World-Class Chefs", image: food, desc: "Indulge in gourmet dishes crafted by internationally acclaimed culinary experts" },
        { title: "Exceptional Service", image: service, desc: "Enjoy attentive, personalized service that makes you feel truly at home at sea" },
        { title: "Complimentary Luxuries", image: comp, desc: "From fine dining to onboard experiences — enjoy a range of inclusions at no extra cost" },
        { title: "Luxurious Suites", image: suite, desc: "Relax in spacious, elegantly designed suites with breathtaking ocean views" },

    ];

    return (
        <section className=" font-[Beautifully_Delicious]">
            {/* DESKTOP */}
            <div className="px-6 lg:px-32 py-16 lg:block hidden">
                <div>
                    <h1 className="text-5xl text-center font-[The_Seasons]">Why Valmare?</h1>
                </div>
                <div className="py-16 ">
                    <Swiper
                        modules={[Navigation]}
                        navigation
                        spaceBetween={30}
                        slidesPerView={3}
                        centeredSlides={true}
                        loop={true}
                        className="w-full"

                    >
                        {slides.map((slide, idx) => (
                            <SwiperSlide key={idx}>
                                <div className="relative mt-7 overflow-hidden -top-4">
                                    <img
                                        src={slide.image}
                                        className="w-full h-[450px] object-cover "
                                        alt={slide.title}
                                    />
                                    <div className="absolute inset-0 flex flex-col justify-end  text-white">
                                        <div className=' bg-black/40 p-6'>
                                            <h1 className="text-xl font-semibold">{slide.title}</h1>
                                            <p className="text-sm mt-1">{slide.desc}</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>

                        ))}
                    </Swiper>
                </div>
            </div>

            {/* MOBILE */}
            <div className="px-6 block lg:hidden py-8">
                <div>
                    <h1 className="montserrat-regular didot text-4xl">Why Valmare?</h1>
                </div>
                <div className="py-16 ">
                    <Swiper
                        modules={[Navigation]}
                        navigation
                        spaceBetween={30}
                        slidesPerView={1}
                        centeredSlides={true}
                        loop={true}
                        className="w-full"

                    >
                        {slides.map((slide, idx) => (
                            <SwiperSlide key={idx}>
                                <div className="relative mt-7 overflow-hidden -top-4">
                                    <img
                                        src={slide.image}
                                        className="w-full h-[250px] object-cover "
                                        alt={slide.title}
                                        loading="lazy"

                                    />
                                    <div className="absolute inset-0 flex flex-col justify-end  text-white">
                                        <div className=' bg-black/40 p-6'>
                                            <h1 className="text-xl font-semibold">{slide.title}</h1>
                                            <p className="text-sm mt-1">{slide.desc}</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>

                        ))}
                    </Swiper>
                </div>
            </div>


        </section>
    )
}