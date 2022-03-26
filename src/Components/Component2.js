import React from 'react'
import image1 from '../Images/squre1.jpg'
import image2 from '../Images/squre2.jpg'

function Component2() {
  return (
    <div style={{display:'flex',
                flexDirection:'row',
                alignItems:'center',
                justifyContent:'center'}}>
        <div style={{
            display:'flex',
            flexDirection:'column',
            height:'700px',
            width:'700px',
            padding:'20px',
            margin:'20px'}}>
            <img src={image1}  />
            <div style={{padding:'20px',
                        margin:'10px'}}>
            <h2>Lorem, ipsum dolor sit amet </h2>
            <h4 >
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?
            </h4>
            </div>
            
        </div>
        <div style={{
            display:'flex',
            flexDirection:'column',
            height:'700px',
            width:'700px',
            padding:'20px',
            margin:'5px',}}>
            <img src={image2}  />
            <div style={{padding:'20px',
                        margin:'10px'}}>
            <h2>Lorem, ipsum dolor sit amet </h2>
            <h4 >
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?Molestias aut, 
            </h4>
            </div>
            
        </div>
    </div>
  )
}

export default Component2