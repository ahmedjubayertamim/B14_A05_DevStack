import logo from "../assets/logo-text.png";
import hamburger from "../assets/hamburger.png";


function Navbar(){

return(

<div className="
navbar
bg-white
sticky
top-0
z-50
border-b
border-gray-100
px-5
lg:px-16
">


{/* Mobile Hamburger */}

<div className="lg:hidden">

<button className="btn btn-ghost btn-circle">

<img
src={hamburger}
alt="menu"
className="w-5"
/>

</button>

</div>



{/* Logo */}

<div className="navbar-start">

<img
src={logo}
alt="Dev Stack"
className="w-28"
/>

</div>



{/* Desktop Menu */}

<div className="
navbar-center
hidden
lg:flex
">

<ul className="menu menu-horizontal gap-3">

<li>
<a className="text-pink-500">
Home
</a>
</li>

<li>
<a>
Technologies
</a>
</li>

<li>
<a>
Projects
</a>
</li>

<li>
<a>
About
</a>
</li>

<li>
<a>
Contact
</a>
</li>


</ul>

</div>




{/* Buttons */}

<div className="navbar-end gap-3">

<button className="
hidden
sm:block
text-sm
text-gray-600
">

Sign In

</button>


<button
className="
rounded-full
px-5
py-2
text-white
bg-gradient-to-r
from-orange-500
via-pink-500
to-purple-500
"
>

Sign Up

</button>


</div>


</div>

)

}


export default Navbar;