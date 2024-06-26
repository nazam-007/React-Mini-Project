import { useState } from 'react'
import { FaStar } from 'react-icons/fa'
import './style.css'

export default function StarRating({ noOfStar=5 }){

    const [rating,setRating]= useState(0);
    const [hover,setHover] = useState(0);

    function handleClick(getCurrentIndex){
        // console.log(getCurrentIndex);
        setRating(getCurrentIndex)
    }

    function handleMouseEnter(getCurrentIndex){
        // console.log(getCurrentIndex);
        setHover(getCurrentIndex)
    }

    function handleMouseLeave(){
        // console.log(getCurrentIndex);
        setHover(rating)
    }

    return ( <div className="star-rating">
        {
            [...Array(noOfStar)].map((_,index) => {
                index+=1;

                return <FaStar
                className={index <= (hover || rating)? 'active' : 'inactive'}
                key={index}
                onMouseMove={()=>{handleMouseEnter(index)}}
                onClick={()=>{handleClick(index)}}
                onMouseLeave={()=>{handleMouseLeave()}}
                size={40}

                
                
                />
            })

        }
    
    
    </div>
    )
}