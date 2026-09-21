import type { Technology } from "../types/technology";


interface TechCardProps{


tech:Technology;

stack:Technology[];

handleAddToStack:
(tech:Technology)=>void;


}



function TechCard({

tech,

stack,

handleAddToStack


}:TechCardProps){



const isAdded =
stack.some(
item=>item.id===tech.id
);



return(

<div className="
card
bg-white
border
rounded-xl
p-5
shadow-sm
">


<img

src={tech.icon}

alt={tech.name}

className="
w-10
h-10
"

/>


<span className="
badge
mt-3
">

{tech.badge}

</span>



<h2 className="
text-xl
font-bold
mt-4
">

{tech.name}

</h2>



<p className="
text-gray-500
text-sm
mt-2
">

{tech.description}

</p>



<div className="
flex
justify-between
mt-4
">


<span className="badge">

{tech.category}

</span>


<span>

⭐ {tech.rating}

</span>


</div>




<button

onClick={()=>
handleAddToStack(tech)
}

disabled={isAdded}

className={`
btn
w-full
mt-5

${
isAdded

?

"bg-gray-300"

:

"bg-black text-white"

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


)


}


export default TechCard;