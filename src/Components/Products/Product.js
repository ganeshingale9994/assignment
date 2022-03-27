import React from 'react'
import Product1 from './Product1'
import Product2 from './Product2'
import Product3 from './Product3'

function Product() {
  return (
    <div>
        <h1
        style={{
          paddingTop: "10px",
          textAlign: "center",
        }}
      >
        Shop Home Bars
      </h1>
      <h4 style={{ textAlign: "center",
                    paddingBottom:"30px" }}>
        Choose from a variety of different styles to suit your home
      </h4>
      <div style={{display:'flex',
                    flexDirection:'row',
                    justifyContent:'center',
                    height:'60vh'}}>
          <Product1 />
          <Product2 />
          <Product3 />
      </div>
    </div>
  )
}

export default Product