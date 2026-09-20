import type { Technology } from "../types/technology";


interface TechCardProps {

    tech: Technology;

    handleAddToStack: (tech: Technology) => void;

    isAdded: boolean;

}



function TechCard({
    tech,
    handleAddToStack,
    isAdded
}: TechCardProps) {


    return (

        <div
        className="
        card
        bg-white
        border
        border-gray-200
        rounded-xl
        shadow-sm
        hover:shadow-md
        transition
        "
        >


            <div className="card-body p-5">



                {/* Top Section */}

                <div className="
                flex
                justify-between
                items-start
                ">


                    {/* Icon */}

                    <img
                    src={tech.icon}
                    alt={tech.name}
                    className="
                    w-10
                    h-10
                    object-contain
                    "
                    />



                    {/* Badge */}

                    <span
                    className="
                    badge
                    badge-outline
                    text-xs
                    "
                    >

                    {tech.badge}

                    </span>


                </div>




                {/* Name */}

                <h2
                className="
                card-title
                text-xl
                mt-4
                text-[#111827]
                "
                >

                    {tech.name}

                </h2>




                {/* Description */}

                <p
                className="
                text-sm
                text-gray-500
                leading-relaxed
                min-h-[60px]
                "
                >

                    {tech.description}

                </p>




                {/* Meta */}

                <div
                className="
                flex
                justify-between
                items-center
                mt-4
                "
                >


                    <span
                    className="
                    badge
                    badge-ghost
                    text-xs
                    "
                    >

                    {tech.category}

                    </span>




                    <span
                    className="
                    text-xs
                    text-gray-500
                    "
                    >

                    {tech.difficulty}

                    </span>


                </div>




                {/* Rating */}

                <div
                className="
                mt-3
                text-sm
                "
                >

                ⭐ {tech.rating}


                </div>





                {/* Button */}

                <button

                onClick={() => handleAddToStack(tech)}

                disabled={isAdded}

                className={`
                
                btn
                w-full
                mt-4
                
                ${
                    isAdded

                    ?

                    "bg-gray-300 text-gray-600"

                    :

                    "bg-[#111827] text-white hover:bg-black"

                }

                `}
                
                >


                {
                    isAdded

                    ?

                    "✓ Added to Stack"

                    :

                    "Add to Stack"

                }


                </button>



            </div>


        </div>

    );

}


export default TechCard;