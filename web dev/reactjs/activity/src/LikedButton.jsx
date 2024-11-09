import React, { useState } from 'react'

const LikedButton = () => {
    const [isLike,setIsLike] = useState(false);

    let Styles={
       color: "red"
      };

    function handleLike(){
       setIsLike(!isLike)
    }

  return (
    <div>
      <h1 className='text-2xl font-bold'>Like feature</h1>
      <button onClick={handleLike}> {isLike ? <i className="fa-regular fa-heart"></i> :<i style={Styles} className="fa-solid fa-heart"></i> }</button>
    </div>
  )
}

export default LikedButton
