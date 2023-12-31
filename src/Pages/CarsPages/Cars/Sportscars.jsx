import { useEffect, useState } from "react";
import SingleCard from "../SingleCard";


const Sportscars = () => {
    const [cars ,setCars] = useState([])
    useEffect(() =>{
        fetch(`https://server-forassiignment11.vercel.app/sports`)
        .then(res => res.json())
        .then(data =>setCars(data) )
    },[])
   
    return (
        <div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 sm:grid-cols-1 gap-5 py-8 ">
            {
                cars.map(car => <SingleCard cars={car} key={car._id}/>)
            }
            </div>
        </div>
    );
};

export default Sportscars;