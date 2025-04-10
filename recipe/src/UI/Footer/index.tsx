
const Footer= () => {
  return (
    <footer className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg shadow-lg m-4">
      <div className="w-full max-w-screen-xl mx-auto p-6 md:py-10">
        {/* Main Footer Content */}
        <div className="sm:flex sm:items-center sm:justify-between">
          {/* Logo/Brand */}
          <a
            href="https://flowbite.com/"
            className="flex items-center mb-6 sm:mb-0 space-x-3 transition-transform transform hover:scale-105"
          >
            <span className="self-center text-3xl font-bold text-[#EA4335] tracking-tight hover:text-black transition-colors">
              RecipeNest
            </span>
          </a>

          {/* Navigation Links */}
          <ul className="flex flex-wrap items-center gap-6 text-sm font-medium text-gray-600 sm:mb-0">
            <li>
              <a
                href="#"
                    className="relative text-[#EA4335] hover:text-black transition-colors duration-300 after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-red-600 after:left-0 after:bottom-[-4px] after:transition-all after:duration-300 hover:after:w-full"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="relative text-[#EA4335] hover:text-black transition-colors duration-300 after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-red-600 after:left-0 after:bottom-[-4px] after:transition-all after:duration-300 hover:after:w-full"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="#"
                className="relative text-[#EA4335] hover:text-black transition-colors duration-300 after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-red-600 after:left-0 after:bottom-[-4px] after:transition-all after:duration-300 hover:after:w-full"
              >
                Licensing
              </a>
            </li>
            <li>
              <a
                href="#"
                className="relative text-[#EA4335] hover:text-black transition-colors duration-300 after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-red-600 after:left-0 after:bottom-[-4px] after:transition-all after:duration-300 hover:after:w-full"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Divider */}
        <hr className="my-8 border-gray-200 sm:mx-auto lg:my-10 opacity-50" />

        {/* Copyright Text */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <span className="text-sm text-gray-600 sm:text-center">
            © {new Date().getFullYear()}{' '}
            <a
              href="https://flowbite.com/"
              className=" text-[#EA4335] hover:text-black transition-colors"
            >
              RecipeNest™
            </a>
            . All Rights Reserved.
          </span>

          {/* Social Media Icons (Optional Addition) */}
          <div className="flex gap-4  sm:justify-start">
            <a
              href="#"
              className=" text-[#EA4335] hover:text-black transition-colors"
              aria-label="Facebook"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
              </svg>
            </a>
            <a
              href="#"
              className=" text-[#1DA1F2] hover:text-black transition-colors"
              aria-label="Twitter"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124-4.09-.205-7.719-2.165-10.148-5.144-.424.722-.666 1.561-.666 2.457 0 1.695.863 3.188 2.175 4.065-.802-.026-1.558-.247-2.215-.616v.062c0 2.367 1.684 4.342 3.918 4.788-.41.111-.843.171-1.287.171-.314 0-.621-.03-.921-.086.622 1.943 2.427 3.357 4.565 3.396-1.674 1.311-3.781 2.092-6.073 2.092-.394 0-.785-.021-1.17-.061 2.173 1.394 4.755 2.209 7.525 2.209 9.027 0 13.97-7.478 13.97-13.957 0-.213-.005-.426-.014-.637.961-.695 1.797-1.562 2.457-2.549z" />
              </svg>
            </a>
            <a
              href="#"
              className=" text-[#C13584] hover:text-black transition-colors"
              aria-label="Instagram"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.326 3.608 1.301.975.975 1.24 2.242 1.301 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.326 2.633-1.301 3.608-.975.975-2.242 1.24-3.608 1.301-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.326-3.608-1.301-.975-.975-1.24-2.242-1.301-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.326-2.633 1.301-3.608.975-.975 2.242-1.24 3.608-1.301 1.266-.058 1.646-.07 4.85-.07m0-2.163c-3.259 0-3.667.014-4.947.072-1.627.073-3.043.468-4.142 1.567-1.099 1.099-1.494 2.515-1.567 4.142-.058 1.28-.072 1.688-.072 4.947s.014 3.667.072 4.947c.073 1.627.468 3.043 1.567 4.142 1.099 1.099 2.515 1.494 4.142 1.567 1.28.058 1.688.072 4.947.072s3.667-.014 4.947-.072c1.627-.073 3.043-.468 4.142-1.567 1.099-1.099 1.494-2.515 1.567-4.142.058-1.28.072-1.688.072-4.947s-.014-3.667-.072-4.947c-.073-1.627-.468-3.043-1.567-4.142-1.099-1.099-2.515-1.494-4.142-1.567-1.28-.058-1.688-.072-4.947-.072zm0 5.838c-3.313 0-6 2.687-6 6s2.687 6 6 6 6-2.687 6-6-2.687-6-6-6zm0 10c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4zm4.958-10.958c-.774 0-1.4.626-1.4 1.4s.626 1.4 1.4 1.4 1.4-.626 1.4-1.4-.626-1.4-1.4-1.4z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;