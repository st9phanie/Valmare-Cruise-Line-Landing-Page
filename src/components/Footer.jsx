import { PromotionSignUp } from "./parts/PromotionSignUp";

export const pac = [
    { title: "FIND A CRUISE", href: "#" },
    { title: "VALMARE SOCIETY", href: "#" },
    { title: "REQUEST A BROCHURE", href: "#" },
    { title: "SPECIAL OFFERS", href: "#" },
]

export const resources = [
    { title: "MY ACCOUNT", href: "#" },
    { title: "FREQUENTLY ASKED QUESTIONS", href: "#" },
    { title: "UPDATE MARKETING PREFERENCES", href: "#" },
    { title: "DIGITAL BROCHURES", href: "#" },
    { title: "GIFT ORDER FORM", href: "#" },
    { title: "CHARTERS, MEETINGS & INCENTIVES", href: "#" },
]

export const company = [
    { title: "ABOUT US", href: "#" },
    { title: "CONTACT US", href: "#" },
    { title: "GLOBAL PARTNERSHIPS", href: "#" },
    { title: "PRESS & MEDIA", href: "#" },
    { title: "LEGAL", href: "#" },
    { title: "SITE MAP", href: "#" },
    { title: "ACCESSIBILITY STATEMENT", href: "#" },
    { title: "CAREERS", href: "#" },]


export const Footer = () => {
    return (
        <div className="bg-[#051822] flex flex-col " >
            <footer className="px-6 lg:px-32 py-16 w-full text-white font-[Beautifully_Delicious] flex flex-col lg:flex-row gap-y-10 lg:gap-y-0 lg:gap-x-8 justify-between">
                {/* PLAN A CRUISE */}
                <div className="w-full lg:w-1/4">
                    <ul className="flex flex-col gap-y-4">
                        <div className="flex flex-col">
                            <p className="font-[The_Seasons] text-baseline">PLAN A CRUISE</p>
                            <hr className="border-white" />
                        </div>
                        {pac.map((plan, key) => (
                            <li className="text-[11px] font-semibold list-none hover:underline" key={key}>
                                <a href={plan.href}>{plan.title}</a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* RESOURCES */}
                <div className="w-full lg:w-1/4">
                    <ul className="flex flex-col gap-y-4">
                        <div className="flex flex-col">
                            <p className="font-[The_Seasons] text-baseline">RESOURCES</p>
                            <hr className="border-white" />
                        </div>
                        {resources.map((res, key) => (
                            <li className="text-[11px] font-semibold list-none hover:underline" key={key}>
                                <a href={res.href}>{res.title}</a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* COMPANY */}
                <div className="w-full lg:w-1/4">
                    <ul className="flex flex-col gap-y-4">
                        <div className="flex flex-col">
                            <p className="font-[The_Seasons] text-baseline">COMPANY INFORMATION</p>
                            <hr className="border-white" />
                        </div>
                        {company.map((com, key) => (
                            <li className="text-[11px] font-semibold list-none hover:underline" key={key}>
                                <a href={com.href}>{com.title}</a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* SOCIAL MEDIA */}
                <div className="w-full lg:w-1/4">
                    <div className="flex flex-col">
                        <p className="font-[The_Seasons] text-baseline">FOLLOW US</p>
                        <hr className="border-white" />
                    </div>

                    <div className="flex flex-wrap gap-3 mt-4 justify-start max-w-[300px]">
                        <a href="#" className="p-1.5 border border-white rounded-full flex items-center justify-center transition-colors duration-300 hover:bg-white hover:text-black group">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" className="text-white group-hover:text-black">
                                <path fill="currentColor" d="M17.34 5.46a1.2 1.2 0 1 0 1.2 1.2a1.2 1.2 0 0 0-1.2-1.2Zm4.6 2.42a7.59 7.59 0 0 0-.46-2.43a4.94 4.94 0 0 0-1.16-1.77a4.7 4.7 0 0 0-1.77-1.15a7.3 7.3 0 0 0-2.43-.47C15.06 2 14.72 2 12 2s-3.06 0-4.12.06a7.3 7.3 0 0 0-2.43.47a4.78 4.78 0 0 0-1.77 1.15a4.7 4.7 0 0 0-1.15 1.77a7.3 7.3 0 0 0-.47 2.43C2 8.94 2 9.28 2 12s0 3.06.06 4.12a7.3 7.3 0 0 0 .47 2.43a4.7 4.7 0 0 0 1.15 1.77a4.78 4.78 0 0 0 1.77 1.15a7.3 7.3 0 0 0 2.43.47C8.94 22 9.28 22 12 22s3.06 0 4.12-.06a7.3 7.3 0 0 0 2.43-.47a4.7 4.7 0 0 0 1.77-1.15a4.85 4.85 0 0 0 1.16-1.77a7.59 7.59 0 0 0 .46-2.43c0-1.06.06-1.4.06-4.12s0-3.06-.06-4.12ZM20.14 16a5.61 5.61 0 0 1-.34 1.86a3.06 3.06 0 0 1-.75 1.15a3.19 3.19 0 0 1-1.15.75a5.61 5.61 0 0 1-1.86.34c-1 .05-1.37.06-4 .06s-3 0-4-.06a5.73 5.73 0 0 1-1.94-.3a3.27 3.27 0 0 1-1.1-.75a3 3 0 0 1-.74-1.15a5.54 5.54 0 0 1-.4-1.9c0-1-.06-1.37-.06-4s0-3 .06-4a5.54 5.54 0 0 1 .35-1.9A3 3 0 0 1 5 5a3.14 3.14 0 0 1 1.1-.8A5.73 5.73 0 0 1 8 3.86c1 0 1.37-.06 4-.06s3 0 4 .06a5.61 5.61 0 0 1 1.86.34a3.06 3.06 0 0 1 1.19.8a3.06 3.06 0 0 1 .75 1.1a5.61 5.61 0 0 1 .34 1.9c.05 1 .06 1.37.06 4s-.01 3-.06 4ZM12 6.87A5.13 5.13 0 1 0 17.14 12A5.12 5.12 0 0 0 12 6.87Zm0 8.46A3.33 3.33 0 1 1 15.33 12A3.33 3.33 0 0 1 12 15.33Z" />
                            </svg>
                        </a>
                        {/* Facebook */}
                        <a href="#" className="p-1.5 border border-white rounded-full flex items-center justify-center transition-colors duration-300 hover:bg-white hover:text-black group">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 224 432" className="text-white group-hover:text-black">
                                <path fill="currentColor" d="M145 429H66V235H0v-76h66v-56q0-48 27-74t72-26q36 0 59 3v67l-41 1q-22 0-30 9t-8 27v49h76l-10 76h-66v194z" />
                            </svg>
                        </a>

                        {/* YouTube */}
                        <a href="#" className="p-1.5 border border-white rounded-full flex items-center justify-center transition-colors duration-300 hover:bg-white hover:text-black group">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 1024 768" className="text-white group-hover:text-black">
                                <path fill="currentColor" d="M928 736q-222 32-416 32q-86 0-190-8t-165-16l-61-8q-27-5-47.5-37.5t-30-78.5t-14-86T0 461V307Q0 52 96 32Q318 0 512 0q86 0 190 8t165 16l61 8q29 4 49.5 36.5T1007 148t13 86t4 73v154q0 36-3 73t-12 85t-30 80t-51 37zM693 359L431 199q-11-10-29-5.5T384 208v352q0 11 18 15t29-6l262-160q11-10 11-25t-11-25z" />
                            </svg>
                        </a>

                        {/* Twitter (X) */}
                        <a href="#" className="p-1.5 border border-white rounded-full flex items-center justify-center transition-colors duration-300 hover:bg-white hover:text-black group">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" viewBox="0 0 251 256" className="text-white group-hover:text-black">
                                <path fill="currentColor" d="M149.079 108.399L242.33 0h-22.098l-80.97 94.12L74.59 0H0l97.796 142.328L0 256h22.1l85.507-99.395L175.905 256h74.59L149.073 108.399zM118.81 143.58l-9.909-14.172l-78.84-112.773h33.943l63.625 91.011l9.909 14.173l82.705 118.3H186.3l-67.49-96.533z" />
                            </svg>
                        </a>
                    </div>
                </div>

            </footer>
           
            <div>
                <p className="text-xs text-[#ddd] py-4 text-center bg-[#011] px-6 font-[Beautifully_Delicious]">© 2025 Valmare Cruises Ltd. All Rights Reserved. See Terms & Conditions and Privacy Policy.</p>
            </div>
        </div>
    );
};
