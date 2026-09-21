import type { Technology } from "../types/technology";


interface SidebarProps {

    stack: Technology[];

    handleRemoveFromStack:
    (id: string) => void;

    handleRemoveAll:
    () => void;

}



function Sidebar({

    stack,

    handleRemoveFromStack,

    handleRemoveAll

}: SidebarProps) {


    return (

        <div
            className="
            card
            bg-white
            border
            border-gray-200
            rounded-xl
            shadow-sm
            "
        >


            <div
                className="
                card-body
                p-5
                "
            >



                <div
                    className="
                    flex
                    justify-between
                    items-center
                    "
                >

                    <h2
                        className="
                        text-xl
                        font-bold
                        "
                    >

                        Your Stack

                    </h2>


                    <span
                        className="
                        badge
                        badge-primary
                        "
                    >

                        {stack.length}

                    </span>


                </div>





                <p
                    className="
                    text-sm
                    text-gray-500
                    "
                >

                    {stack.length}
                    {" "}
                    Technology Selected

                </p>






                {
                    stack.length === 0 ?


                    (

                        <div
                            className="
                            py-10
                            text-center
                            text-gray-400
                            "
                        >

                            Your stack is empty.

                        </div>

                    )


                    :


                    (

                        <div
                            className="
                            space-y-4
                            mt-5
                            "
                        >



                            {
                                stack.map(
                                    (tech) => (


                                        <div
                                            key={tech.id}
                                            className="
                                            flex
                                            items-center
                                            justify-between
                                            border
                                            rounded-lg
                                            p-3
                                            "
                                        >



                                            <div
                                                className="
                                                flex
                                                items-center
                                                gap-3
                                                "
                                            >


                                                <img

                                                    src={tech.icon}

                                                    alt={tech.name}

                                                    className="
                                                    w-9
                                                    h-9
                                                    "
                                                />



                                                <div>


                                                    <h3
                                                        className="
                                                        font-medium
                                                        "
                                                    >

                                                        {tech.name}

                                                    </h3>


                                                    <p
                                                        className="
                                                        text-xs
                                                        text-gray-500
                                                        "
                                                    >

                                                        {tech.category}

                                                    </p>


                                                </div>


                                            </div>





                                            <button

                                                onClick={() =>
                                                    handleRemoveFromStack(
                                                        tech.id
                                                    )
                                                }

                                                className="
                                                text-red-500
                                                text-lg
                                                "
                                            >

                                                ✕

                                            </button>



                                        </div>


                                    )

                                )
                            }




                            <button

                                onClick={handleRemoveAll}

                                className="
                                btn
                                btn-error
                                btn-sm
                                w-full
                                "
                            >

                                Remove All

                            </button>




                        </div>


                    )

                }




            </div>


        </div>


    );

}


export default Sidebar;