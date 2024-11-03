import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Category({categories}) {
    console.log(categories)
  return (
    <div role="tablist" className="tabs tabs-lifted">

    {
        categories.map((category, index) => <NavLink
        className={({ isActive }) => (isActive ? "active bg-slate-200 tab " : "tab")}
        to={`/category/${category.category}`}
        key={index}
        type="radio"
        name="my_tabs_2"
        role="tab"
        aria-label={category.category}
      >
        {category.category}
      </NavLink>
      )
    }

    
  </div>
  )
}
