import React, { useEffect, useState } from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';
import nutrition from '../../public/nutrition.png';
import { setItemToLocalStorage, getItems } from '../utils/storeCardToLocal';

export default function CoffeeDetails() {
    const { id } = useParams();
    const coffees = useLoaderData();
    const coffee = coffees.find((coffee) => coffee.id == id);
    const navigate = useNavigate();
    const [isFavorited, setIsFavorited] = useState(false);

    const {
        name,
        image,
        category,
        ingredients,
        nutrition_info,
        origin,
        type,
        description,
        making_process,
        rating,
        popularity
    } = coffee;

    // Check if the coffee is already in the favorites list
    useEffect(() => {
        const favorites = getItems();
        const alreadyFavorited = favorites.some((fav) => fav.id === coffee.id);
        setIsFavorited(alreadyFavorited);
    }, [coffee.id]);

    // Function to add coffee to favorites
    const handleAddToFavorites = () => {
        setItemToLocalStorage(coffee);
        setIsFavorited(true); // Disable the button after adding
    };

    return (
        <div className="flex flex-col items-center max-w-4xl mx-auto my-12 bg-white rounded-lg shadow-lg overflow-hidden">
            <img src={image} alt={`${name} image`} className="w-full h-96 object-cover" />
            
            <div className="p-8 space-y-4">
                <h1 className="text-3xl font-bold text-gray-800">{name}</h1>
                <p className="text-gray-500 text-lg italic">Category: {category}</p>
                <p className="text-gray-600">{description}</p>

                <div className="flex items-center justify-between text-gray-700 mt-4">
                    <span>⭐ {rating}</span>
                    <span>Popularity: {popularity}%</span>
                    <span>Origin: {origin}</span>
                    <span>Type: {type}</span>
                </div>

                <div className="lg:flex justify-around items-center">
                    <div className="flex-1">
                        <div className="mt-4">
                            <h2 className="text-xl font-semibold text-gray-800">Ingredients</h2>
                            <ul className="list-disc list-inside">
                                {ingredients.map((ingredient, index) => (
                                    <li key={index} className="text-gray-600">{ingredient}</li>
                                ))}
                            </ul>
                        </div>

                        <div className="mt-4">
                            <h2 className="text-xl font-semibold text-gray-800">Nutrition Information</h2>
                            <p className="text-gray-600">Calories: {nutrition_info.calories} kcal</p>
                            <p className="text-gray-600">Fat: {nutrition_info.fat}g</p>
                            <p className="text-gray-600">Carbohydrates: {nutrition_info.carbohydrates}g</p>
                            <p className="text-gray-600">Protein: {nutrition_info.protein}g</p>
                        </div>
                    </div>

                    <div className="flex-1">
                        <img src={nutrition} alt="" />
                    </div>
                </div>

                <div className="mt-4">
                    <h2 className="text-xl font-semibold text-gray-800">Making Process</h2>
                    <p className="text-gray-600">{making_process}</p>
                </div>

                <div className="flex gap-2">
                    <button
                        onClick={handleAddToFavorites}
                        disabled={isFavorited}
                        className={`btn mt-8 w-fit py-3 rounded-md text-white transition-colors duration-300 ${isFavorited ? 'bg-gray-400 cursor-not-allowed' : 'bg-yellow-500 hover:bg-yellow-600'}`}
                    >
                        {isFavorited ? 'Added to Favorites' : 'Add to Favorites'}
                    </button>
                    <button
                        onClick={() => navigate(-1)}
                        className="btn mt-8 w-fit bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-md transition-colors duration-300"
                    >
                        Back
                    </button>
                </div>
            </div>
        </div>
    );
}
