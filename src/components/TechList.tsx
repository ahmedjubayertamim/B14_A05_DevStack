import TechCard from "./TechCard";
import type { Technology } from "../types/technology";


interface Props{

technologies:Technology[];

handleAddToStack:(tech:Technology)=>void;

stack:Technology[];

}



function TechList({
technologies,
handleAddToStack,
stack
}:Props){


return(

<div className="
grid
grid-cols-1
md:grid-cols-2
lg:grid-cols-3
gap-6
">


{
technologies.map((tech)=>(

<TechCard

key={tech.id}

tech={tech}

handleAddToStack={handleAddToStack}

isAdded={
stack.some(
(item)=>item.id===tech.id
)
}

/>

))

}


</div>

)

}


export default TechList;