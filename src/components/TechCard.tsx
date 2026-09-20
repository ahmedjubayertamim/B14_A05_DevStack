import type { Technology } from "../types/technology";


interface TechCardProps{

tech:Technology;

stack:Technology[];

setStack:
React.Dispatch<
React.SetStateAction<Technology[]>
>;

}



function TechCard({
tech,
stack,
setStack
}:TechCardProps){



const isAdded =
stack.some(
(item)=>item.id===tech.id
);



const handleAdd = ()=>{


if(isAdded){

return;

}



setStack(
(previous)=>[
...previous,
tech
]
);


}



return(


<div className="
card
bg-white
border
border-gray-200
rounded-xl
shadow-sm
hover:shadow-md
transition
">


<div className="card-body p-5">



{/* Top */}

<div className="
flex
justify-between
items-start
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
badge-outline
text-xs
">

{tech.badge}

</span>


</div>





<h2 className="
card-title
mt-4
text-xl
">


{tech.name}


</h2>




<p className="
text-sm
text-gray-500
leading-relaxed
">

{tech.description}

</p>





<div className="
flex
justify-between
items-center
mt-4
">


<span className="
badge
badge-ghost
">

{tech.category}

</span>



<span className="
text-xs
text-gray-500
">

{tech.difficulty}

</span>


</div>





<div className="
mt-3
text-sm
">

⭐ {tech.rating}

</div>






<button

onClick={handleAdd}

disabled={isAdded}

className={`
btn
w-full
mt-5

${
isAdded

?

"bg-gray-300 text-gray-600"

:

"bg-[#111827] text-white"

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


)


}


export default TechCard;