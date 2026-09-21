import TechList from "./TechList";
import Sidebar from "./Sidebar";

import type { Technology } from "../types/technology";


interface MainLayoutProps{

    technologies:Technology[];

    stack:Technology[];

    handleAddToStack:
    (tech:Technology)=>void;

    handleRemoveFromStack:
    (id:string)=>void;

    handleRemoveAll:
    ()=>void;

}



function MainLayout({

technologies,

stack,

handleAddToStack,

handleRemoveFromStack,

handleRemoveAll

}:MainLayoutProps){


return(

<section className="
max-w-7xl
mx-auto
px-6
py-20
">


<div className="
flex
flex-col
lg:flex-row
gap-8
">


<div className="
flex-1
">


<TechList

technologies={technologies}

stack={stack}

handleAddToStack={
handleAddToStack
}

/>


</div>



<div className="
w-full
lg:w-80
">


<Sidebar

stack={stack}

handleRemoveFromStack={
handleRemoveFromStack
}

handleRemoveAll={
handleRemoveAll
}

/>


</div>


</div>


</section>

)


}


export default MainLayout;