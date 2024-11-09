import React from 'react'
import Price from './Price'

const ProductTab = ({tittle,idx}) => {
    let oldPrices = ["12,495","11,900","1,599","599"];
    let newPrices = ["8,999","9,199","899","278"];
    let description1 = ["8,000 DPI",
        "intutive surface",
        "designed for ipad pro",
        "wireless",
    ];

    let description2 = ["5 Programmable buttons",
      "designed for iPad pro",
      "intutive surface",
      "optical orientation",
  ];
  return (
    <>    
    <div className=' border border-black rounded-xl'>
      <p className='font-semibold mt-1 px-2'>{tittle}</p>
      <p className='mt-3'>{description1 [idx] }</p>
      <p className='mt-3 px-2'>{description2 [idx] }</p> 
      <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]}/>
    </div>
    </>

  )
}

export default ProductTab
