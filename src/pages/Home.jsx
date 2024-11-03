import React from 'react'
import Banner from '../Componets/Home/Banner'
import Heading from '../Componets/Home/Heading'
import Category from '../Componets/Home/Category'
import { Outlet, useLoaderData } from 'react-router-dom'

export default function Home() {
    const categories = useLoaderData();
  return (
    <div className='my-12 mx-auto'>
        <Banner/>
        <Heading title="Browse Coffees by Category" subtitle="Choose your desired coffee category to browse through specific coffees that fit in your taste."/>
        <Category categories={categories}/>
        <Outlet/>
    </div>
  )
}
