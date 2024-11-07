import React, { useState, useEffect } from "react";
import Allcoffees from "../Componets/Home/Allcoffees";
import { useLoaderData } from "react-router-dom";

export default function Coffees() {
  const data = useLoaderData();
  const [coffees, setCoffees] = useState([]);
  const [activeButton, setActiveButton] = useState('');

  // Set initial data
  useEffect(() => {
    setCoffees(data);
  }, [data]);

  const sortData = (type) => {
    let sortedData;
    if (type === "Sort by Popularity") {
      setActiveButton("Sort by Popularity");
      sortedData = [...data].sort((a, b) => b.popularity - a.popularity);
    } else if (type === "Sort by Rating") {
      sortedData = [...data].sort((a, b) => b.rating - a.rating);
      setActiveButton("Sort by Rating");
    }
    setCoffees(sortedData); // Update state with sorted data
  };

  return (
    <div>
      <div className="flex gap-4 mb-4 my-12">
        <button
          onClick={() => sortData("Sort by Popularity")}
          className={` text-white py-2 px-4 rounded  ${activeButton === 'Sort by Popularity' ? "bg-yellow-500 hover:bg-yellow-600" : "border-2 border-yellow-500 text-yellow-600"}` }
        >
          Sort by Popularity
        </button>
        <button
          onClick={() => sortData("Sort by Rating")}
          className={`btn  text-white py-2 px-4 rounded  ${activeButton === 'Sort by Rating' ? "bg-yellow-500 hover:bg-yellow-600" : "border-2 border-yellow-500 text-yellow-600"}` }
        >
          Sort by Rating
        </button>
      </div>
      <Allcoffees coffees={coffees} />
    </div>
  );
}
