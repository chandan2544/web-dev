import React from 'react'

const Price = ({oldPrice,newPrice}) => {
  let oldStyles={
    textDecorationLine: "Line-through"
  };
  return (
    <div className='bg-yellow-500 mt-3 rounded-b-xl'>
      <span style={oldStyles} className='px-3 '>{oldPrice}</span>

      <span>{newPrice}</span>
    </div>
  )
}

export default Price
