import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import MainLayout from "./components/MainLayout";
import Footer from "./components/Footer";

import type { Technology } from "./types/technology";

import {
    ToastContainer,
    toast
} from "react-toastify";

import "react-toastify/dist/ReactToastify.css";


function App() {


    const [technologies, setTechnologies] =
        useState<Technology[]>([]);


    const [stack, setStack] =
        useState<Technology[]>([]);


    const [loading, setLoading] =
        useState(true);



    useEffect(()=>{


        const loadTechnologies = async()=>{


            try{


                const response =
                await fetch("/data.json");


                const data:Technology[] =
                await response.json();


                setTechnologies(data);


            }

            catch(error){

                toast.error(
                    "Failed to load data"
                );

            }

            finally{

                setLoading(false);

            }


        };


        loadTechnologies();


    },[]);





    const handleAddToStack =
    (tech:Technology)=>{


        const exists =
        stack.some(
            item=>item.id===tech.id
        );



        if(exists){


            toast.warning(
                "Already added!"
            );


            return;

        }



        setStack(
            previous=>[
                ...previous,
                tech
            ]
        );


        toast.success(
            `${tech.name} added`
        );


    };






    const handleRemoveFromStack =
    (id:string)=>{


        setStack(
            previous=>
            previous.filter(
                item=>item.id!==id
            )
        );


        toast.info(
            "Technology removed"
        );


    };





    const handleRemoveAll =
    ()=>{


        setStack([]);


        toast.error(
            "All removed"
        );


    };





    return (

        <>


        <Navbar/>

        <Hero/>


        {
            loading

            ?

            <div className="
            text-center
            py-20
            ">

            Loading...

            </div>


            :

            <MainLayout


            technologies={technologies}


            stack={stack}


            handleAddToStack={
                handleAddToStack
            }


            handleRemoveFromStack={
                handleRemoveFromStack
            }


            handleRemoveAll={
                handleRemoveAll
            }


            />

        }


        <Footer/>


        <ToastContainer/>


        </>

    );

}


export default App;