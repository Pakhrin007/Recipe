import { useState } from 'react';

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div>
            <nav className="bg-white border-gray-200">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-red-500">
                            RecipeNest
                        </span>
                    </a>

                    {/* Hamburger Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        type="button"
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-black rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                        aria-controls="navbar-default"
                        aria-expanded={isMenuOpen}
                    >
                        <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M1 1h15M1 7h15M1 13h15"
                            />
                        </svg>
                    </button>

                    {/* Menu Items */}
                    <div
                        className={`${isMenuOpen ? 'block' : 'hidden'} w-[100%] md:block md:w-auto`}
                        id="navbar-default"
                    >
                        <ul className="font-medium flex flex-col p-3 md:p-0 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
                            <li>
                                <a
                                    href="#"
                                    className="block py-1.5 px-3 text-white rounded-sm md:bg-transparent md:p-0 dark:text-white"
                                >
                                    Home
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="block py-1.5 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-black"
                                >
                                    About
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="block py-1.5 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-black"
                                >
                                    Services
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="block py-1.5 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-black"
                                >
                                    Pricing
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="block py-1.5 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-black"
                                >
                                    Contact
                                </a>
                            </li>

                            {/* Mobile-only Login & Signup */}
                            <li className="md:hidden text-center mt-1">
                                <button className="w-full block py-1.5 px-3 text-white bg-red-500 rounded-sm hover:bg-red-600 text-center">
                                    Login
                                </button>
                            </li>
                            <li className="md:hidden text-center mt-1">
                                <button className="w-full text-center block py-1.5 px-3 text-white bg-yellow-500 rounded-sm hover:bg-yellow-600">
                                    Signup
                                </button>
                            </li>
                        </ul>
                    </div>

                    {/* Desktop Buttons */}
                    <ul className="hidden md:flex items-center gap-x-4">
                        <li>
                            <button className="inline-flex items-center px-4 py-2 text-white rounded-sm bg-red-500 hover:bg-red-600">
                                Login
                            </button>
                        </li>
                        <li>
                            <button className="inline-flex items-center px-4 py-2 text-white rounded-sm bg-yellow-500 hover:bg-yellow-600">
                                Signup
                            </button>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;