import React, { useEffect, useState } from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';
import Card from './Card';

export default function CategoryCard() {
    const coffees = useLoaderData();
    const { category } = useParams();
    const [categoryWiseCoffee, setCategoryWiseCoffee] = useState([]);
    const navigate = useNavigate();

    const seeAllCoffee = ()=>{
        navigate('/coffees');
    }

    useEffect(() => {
        if (coffees) { // Ensure coffees is defined before filtering
            if (category) {
                const filterCoffee = coffees.filter(coffee => coffee.category === category);
                setCategoryWiseCoffee(filterCoffee);
            } else {
                setCategoryWiseCoffee(coffees.slice(0, 6));
            }
        }
    }, [category, coffees]); // Include coffees in dependencies

    return (
       <div className='flex flex-col justify-center items-center w-full'>
         <div className="md:grid md:grid-cols-2 lg:grid-cols-3 mx-auto my-12 gap-8 justify-items-center">
            {categoryWiseCoffee.map(coffee => (
                <Card key={coffee.id} coffee={coffee} />
            ))}


          
        </div>


        <div className="flex justify-center mt-8">
                    <button onClick={seeAllCoffee} className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-300">
                        Show All
                    </button>
        </div>
       </div>
    );
}
