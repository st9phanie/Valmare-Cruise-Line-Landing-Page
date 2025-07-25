import { useState } from "react";


export const Navbar = () => {
    const navitems1 = [
        { href: "#", text: "HOME" },

        { href: "#", text: "FIND A CRUISE" },
        { href: "#", text: "DESTINATIONS" },
    ];

    const navitems2 = [
        { href: "#", text: "OFFERS" },
        { href: "#", text: "CONTACT US" },
    ];

    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <header className="w-full bg-[#051822] shadow shadow-xl flex flex-row text-white sticky top-0 z-22 font-[Beautifully_Delicious]">

            <div className="lg:px-32 lg:py-4 lg:w-full lg:flex hidden">

                <nav className="flex items-center justify-between relative w-full">
                    <div className="flex gap-x-12 flex-1 justify-start">
                        <ul className="flex gap-x-12  tracking-[0.8px] items-center">
                        {/* Left Nav */}
                       {navitems1.map((item, key) => (
                            <li className="text-[13px] hover:underline " key={key}>
                                <a href={item.href}>{item.text}</a>
                            </li>
                        ))}
                    </ul>
                    </div>

                    <div className="flex flex-col items-center flex-shrink-0 ">
                        {/* Center Logo */}
                        <a href="#">
                            <p className="text-4xl carattere-regular tracking-[2px] text-center">Valmare</p>
                            <p className="text-[10px] font-[Beautifully_Delicious] text-center">SEVEN SEAS CRUISES</p>
                        </a>
                    </div>

                    <div className="flex gap-x-12 flex-1 justify-end">
                         <ul className="flex gap-x-12  tracking-[0.8px] font-[Beautifully_Delicious] items-center">

                        {navitems2.map((item, key) => (
                            <li className="text-[13px] hover:underline " key={key}>
                                <a href={item.href}>{item.text}</a>
                            </li>
                        ))}

                        <li className=" text-[13px] flex flex-row gap-x-1/2 items-center hover:underline">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="30" viewBox="0 0 50 50"><path fill="currentColor" d="M25.1 42c-9.4 0-17-7.6-17-17s7.6-17 17-17s17 7.6 17 17s-7.7 17-17 17zm0-32c-8.3 0-15 6.7-15 15s6.7 15 15 15s15-6.7 15-15s-6.8-15-15-15z" /><path fill="currentColor" d="m15.3 37.3l-1.8-.8c.5-1.2 2.1-1.9 3.8-2.7c1.7-.8 3.8-1.7 3.8-2.8v-1.5c-.6-.5-1.6-1.6-1.8-3.2c-.5-.5-1.3-1.4-1.3-2.6c0-.7.3-1.3.5-1.7c-.2-.8-.4-2.3-.4-3.5c0-3.9 2.7-6.5 7-6.5c1.2 0 2.7.3 3.5 1.2c1.9.4 3.5 2.6 3.5 5.3c0 1.7-.3 3.1-.5 3.8c.2.3.4.8.4 1.4c0 1.3-.7 2.2-1.3 2.6c-.2 1.6-1.1 2.6-1.7 3.1V31c0 .9 1.8 1.6 3.4 2.2c1.9.7 3.9 1.5 4.6 3.1l-1.9.7c-.3-.8-1.9-1.4-3.4-1.9c-2.2-.8-4.7-1.7-4.7-4v-2.6l.5-.3s1.2-.8 1.2-2.4v-.7l.6-.3c.1 0 .6-.3.6-1.1c0-.2-.2-.5-.3-.6l-.4-.4l.2-.5s.5-1.6.5-3.6c0-1.9-1.1-3.3-2-3.3h-.6l-.3-.5c0-.4-.7-.8-1.9-.8c-3.1 0-5 1.7-5 4.5c0 1.3.5 3.5.5 3.5l.1.5l-.4.5c-.1 0-.3.3-.3.7c0 .5.6 1.1.9 1.3l.4.3v.5c0 1.5 1.3 2.3 1.3 2.4l.5.3v2.6c0 2.4-2.6 3.6-5 4.6c-1.1.4-2.6 1.1-2.8 1.6z" /></svg>
                            <a href="#" className="pl-2">MY ACCOUNT</a>

                        </li>
                    </ul>
                    </div>
                </nav>

            </div>

            <div className="lg:hidden flex px-10 justify-between w-full items-center ">
                <div className="flex flex-col">
                    <a href="#" className="">
                        <p id="" className="text-[36px] carattere-regular tracking-[2px]">Valmare</p>
                        <p className="text-[10.5px] -mt-2.5 montserrat-regular">SEVEN SEAS CRUISES</p></a>
                </div>
                {/* MOBILE MENU BUTTON */}
                <div className="flex">
                    <button
                        className=""
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            {menuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* MOBILE MENU */}
            {menuOpen && (
                <div className="absolute top-full left-0 w-full bg-black text-white p-8 flex flex-col gap-4 ml-60 lg:hidden">
                    <a href="#" className="text-sm font-semibold hover:underline">HOME</a>
                    {navitems1.concat(navitems2).map((item, idx) => (
                        <a key={idx} href={item.href} className="text-sm font-semibold hover:underline">
                            {item.text}
                        </a>
                    ))}
                    <a href="#" className="text-sm font-semibold hover:underline">MY ACCOUNT</a>
                </div>
            )}
        </header>
    );
};