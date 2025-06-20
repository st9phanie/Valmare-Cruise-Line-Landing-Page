

export const PromotionSignUp = () => {
    return (
        <div className="bg-black lg:mx-32 px-10 py-6 flex flex-row montserrat-regular items-center justify-between mb-16">
            <div className="flex w-1/2">
                            <p className="text-white">SIGN UP TO RECEIVE PROMOTIONS VIA EMAIL</p>

            </div>
            <div className="flex w-1/2 min-w-max">
                <input type="email" placeholder="YOUR EMAIL ADDRESS" className="bg-white px-4 outline-none py-2 w-full" />
                <button className="text-white border-2 border-[#c9a14a] px-4 py-2 min-w-max bg-[#c9a14a] font-semibold cursor-pointer hover:bg-[#b88d52] transition duration-300 hover:border-[#b88d52]">SIGN UP</button>
                </div>

        </div>
    )
}