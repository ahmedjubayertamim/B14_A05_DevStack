import {useEffect,useState} from "react";

import type {Technology} from "./types/technology";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechList from "./components/TechList";


function App(){


const [technologies,setTechnologies]
=
useState<Technology[]>([]);


const [stack,setStack]
=
useState<Technology[]>([]);


const [loading,setLoading]
=
useState(true);



useEffect(()=>{


const loadData = async()=>{


try{

const response =
await fetch("/data.json");


const data:Technology[] =
await response.json();


setTechnologies(data);


}

catch(error){

console.log(error);

}

finally{

setLoading(false);

}


};


loadData();


},[]);




return(

<>

<Navbar/>

<Hero/>


<section className="max-w-7xl mx-auto px-6 py-20">


{
loading ?

<h2>
Loading...
</h2>

:

<TechList

technologies={technologies}

stack={stack}

setStack={setStack}

/>

}


</section>


</>


)

}


export default App;