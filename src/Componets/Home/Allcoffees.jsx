import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from './Card';

export default function Allcoffees({coffees}) {
   

 

    return (
        <div className="mx-auto my-12 space-y-8">
            <div className="md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
                {coffees.map(coffee => (
                    <Card key={coffee.id} coffee={coffee} />
                ))}
            </div>
        
        </div>
    );
}
