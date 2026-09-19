import heroImage from "../assets/hero.png";


function Hero() {

    return (

        <section className="
        max-w-7xl
        mx-auto
        px-6
        lg:px-16
        py-20
        ">


            <div className="
            grid
            lg:grid-cols-2
            gap-12
            items-center
            ">


                {/* Left Content */}

                <div>


                    <h1 className="
                    text-5xl
                    lg:text-6xl
                    font-bold
                    leading-tight
                    text-[#111827]
                    ">

                        Build Your Ideal

                        <br />

                        <span
                        className="
                        bg-gradient-to-r
                        from-orange-500
                        via-pink-500
                        to-purple-500
                        bg-clip-text
                        text-transparent
                        "
                        >

                            Development Stack

                        </span>


                    </h1>



                    <p className="
                    mt-6
                    text-gray-500
                    text-lg
                    leading-relaxed
                    max-w-xl
                    ">

                        Explore frontend, backend, database, and tooling options,
                        compare them side by side, and put together the stack that
                        fits your next project.

                    </p>




                    {/* Buttons */}

                    <div className="
                    mt-8
                    flex
                    gap-4
                    flex-wrap
                    ">


                        <button
                        className="
                        rounded-lg
                        px-6
                        py-3
                        text-white
                        font-medium
                        bg-gradient-to-r
                        from-orange-500
                        via-pink-500
                        to-purple-500
                        "
                        >

                            Explore Technologies

                        </button>




                        <button
                        className="
                        rounded-lg
                        px-6
                        py-3
                        border
                        border-gray-200
                        text-gray-600
                        bg-white
                        "
                        >

                            Learn More

                        </button>


                    </div>


                </div>





                {/* Right Image */}

                <div className="
                flex
                justify-center
                ">


                    <img
                    src={heroImage}
                    alt="Development Stack"
                    className="
                    w-[420px]
                    "
                    />


                </div>


            </div>


        </section>

    );

}


export default Hero;