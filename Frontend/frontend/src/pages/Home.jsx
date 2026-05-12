import { useNavigate } from "react-router-dom";
export default function Home(){

const nav=useNavigate();
    return(
<div className="bg-black min-h-screen text-white">
{/*navbar*/}

<div className="flex justify-between items-center p-6">

</div>
{/* Hero section */}
<div className="flex flex-col items-center justify-center text-center h-[80vh] px-4">
<h1 className="text-6xl font-bold mb-6">New Release,
    <span className="text-red-600">{" "}Bookings {" "} and Fun</span>
</h1>
<p className="text-gray-400 text-ml mb-8 max-w-2xl">
    Watach the latest movies, choose theaters,book seats instantly and enjoy a modern cinema experience.

</p>
<button onClick={()=> nav("/register")} className="bg-red-600 hover:bg-red-700 x-8 py-4 text-xl rounded-lg">
Get Started
</button>
</div>
</div>

    );
}