

export const PromotionSignUp = () => {
    return (
        <div className="">
            <div className="bg-[#051822] py-6 lg:mx-32 lg:flex px-8 hidden font-[Beautifully_Delicious] items-center justify-between mb-16">
                <div className="flex w-1/2">
                    <p className="text-white">SIGN UP TO RECEIVE PROMOTIONS VIA EMAIL</p>

                </div>
                <div className="flex w-1/2">
                    <input type="email" placeholder="YOUR EMAIL ADDRESS" className="bg-white px-4 outline-none py-2 w-full" />
                    <button className="text-white text-baseline sm:text-xs border-2 border-[#AE835E] px-4 py-2 min-w-max bg-[#AE835E] font-semibold cursor-pointer hover:bg-[#ba9271] transition duration-300 hover:border-[#ba9271]">SIGN UP</button>
                </div>

            </div>

            {/* MOBILE */}
            <div className="bg-black text-sm px-8 py-6 flex flex-col lg:hidden font-[Beautifully_Delicious] items-center mb-16 ">
                <div className=" w-full text-center">
                    <p className="text-white didot text-lg tracking-[0.5px]">SIGN UP TO RECEIVE PROMOTIONS </p>

                </div>
                <div className="flex-row flex pt-4 w-full">
                    <input type="email" placeholder="YOUR EMAIL ADDRESS" className="bg-white px-4 outline-none py-2 w-full" />
                    <button className="text-white border-2 border-[#AE835E] px-4 py-2 min-w-max bg-[#AE835E] font-semibold cursor-pointer hover:bg-[#ba9271] transition duration-300 hover:border-[#ba9271]">SIGN UP</button>
                </div>

            </div>
        </div>
    )
}