import type {Technology} from "../types/technology";

import TechCard from "./TechCard";


interface Props{

technologies:Technology[];

stack:Technology[];

setStack:
React.Dispatch<
React.SetStateAction<Technology[]>
>;

}


function TechList({
technologies,
stack,
setStack
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
technologies.map(
(tech)=>(

<TechCard

key={tech.id}

tech={tech}

stack={stack}

setStack={setStack}

/>

)

)

}


</div>


)


}


export default TechList;