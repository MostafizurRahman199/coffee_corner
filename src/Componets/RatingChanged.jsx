import React from 'react'
import { FaStar } from "react-icons/fa";



const RatingChanged = ({rating}) => {
    // console.log(typeof parseFloat(rating))
    // console.log(typeof parseFloat(rating))
    
    const ratingHandler = (rating)=>{
        const ratings = [];
        console.log(parseFloat(rating))

        for (let i = 1; i <= 5; i++) {
            if(i <= rating){
                ratings.push(<li><FaStar   className="text-yellow-500 " /></li>);

            }else{

                ratings.push(<li><FaStar className="text-gray-400"  /></li>);
            }
        }
        return ratings;
       

    }
  return (
  <>
    <ul className='flex gap-1'>
        {
           ratingHandler(parseFloat(rating))
          
        }
    </ul>
  </>
  )
}

export default RatingChanged;