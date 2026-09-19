import logo from "../assets/logo-text.png";

function Navbar() {

    return (

        <div className="navbar bg-white sticky top-0 z-50 border-b border-gray-100 px-6 lg:px-16">

            {/* Left Logo */}
            <div className="navbar-start">

                <a className="flex items-center">

                    <img
                        src={logo}
                        alt="Dev Stack"
                        className="w-28"
                    />

                </a>

            </div>


            {/* Center Menu */}
            <div className="navbar-center hidden lg:flex">

                <ul className="menu menu-horizontal gap-2">

                    <li>
                        <a className="text-pink-500 font-medium">
                            Home
                        </a>
                    </li>

                    <li>
                        <a>
                            Technologies
                        </a>
                    </li>

                    <li>
                        <a>
                            Projects
                        </a>
                    </li>

                    <li>
                        <a>
                            About
                        </a>
                    </li>

                    <li>
                        <a>
                            Contact
                        </a>
                    </li>

                </ul>

            </div>


            {/* Right Buttons */}
            <div className="navbar-end gap-4">


                <button className="hidden sm:block text-sm text-gray-600">
                    Sign In
                </button>


                <button
                    className="
                    rounded-full 
                    px-6 
                    py-2
                    text-white
                    text-sm
                    font-medium
                    bg-gradient-to-r 
                    from-orange-500 
                    via-pink-500 
                    to-purple-500
                    "
                >
                    Sign Up
                </button>


            </div>


        </div>

    );

}

export default Navbar;