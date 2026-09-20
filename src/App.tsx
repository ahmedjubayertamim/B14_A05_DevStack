import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechList from "./components/TechList";

import type { Technology } from "./types/technology";


import {
  ToastContainer,
  toast
} from "react-toastify";

import "react-toastify/dist/ReactToastify.css";



function App() {


  // Technology data state

  const [technologies, setTechnologies] =
    useState<Technology[]>([]);



  // Selected stack state

  const [stack, setStack] =
    useState<Technology[]>([]);



  // Loading state

  const [loading, setLoading] =
    useState(true);





  // Fetch JSON Data

  useEffect(() => {


    const loadData = async () => {


      try {


        const response =
          await fetch("/data.json");



        const data: Technology[] =
          await response.json();



        setTechnologies(data);



      }

      catch(error) {


        console.log(error);


        toast.error(
          "Failed to load technologies"
        );


      }

      finally {


        setLoading(false);


      }


    };



    loadData();


  }, []);





  // Add Technology To Stack

  const handleAddToStack = (
    tech: Technology
  ) => {



    const isAlreadyAdded =
      stack.some(
        (item) => item.id === tech.id
      );



    if (isAlreadyAdded) {


      toast.warning(
        "Already added!"
      );


      return;


    }





    setStack(
      (previousStack) => [
        ...previousStack,
        tech
      ]
    );



    toast.success(
      `${tech.name} added to stack`
    );


  };






  return (

    <>


      <Navbar />


      <Hero />



      <section
        className="
        max-w-7xl
        mx-auto
        px-6
        lg:px-16
        py-20
        "
      >



        <h2
          className="
          text-4xl
          font-bold
          "
        >

          Explore the

          <span
            className="
            ml-2
            bg-gradient-to-r
            from-orange-500
            via-pink-500
            to-purple-500
            bg-clip-text
            text-transparent
            "
          >

            Technologies

          </span>


        </h2>





        {
          loading ?


          (

            <div
              className="
              text-center
              mt-10
              "
            >

              Loading Technologies...

            </div>

          )


          :


          (

            <TechList

              technologies={technologies}

              stack={stack}

              setStack={setStack}

            />


          )


        }



      </section>





      <ToastContainer />



    </>

  );

}


export default App;