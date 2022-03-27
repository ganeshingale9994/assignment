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
            height:'600px',
            width:'500px',
            paddingTop:'130px',
            margin:'20px'}}>
            <img src={image1} style={{height:'450px',
            width:'450px',}}  />
            <div style={{padding:'10px',
                        margin:'10px',
                        width:'450px'}}>
            <h4>Lorem, ipsum dolor sit amet </h4>
            <h6 >
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?Molestias aut, repellat 
            </h6>
            </div>
            
        </div>
        <div style={{
            display:'flex',
            flexDirection:'column',
            height:'600px',
            width:'500px',
            paddingTop:'130px',
            margin:'5px',}}>
            <img src={image2} style={{height:'450px',
            width:'450px',}} />
            <div style={{padding:'10px',
                        margin:'10px',
                        width:'450px'}}>
            <h4>Lorem, ipsum dolor sit amet </h4>
            <h6 >
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?Molestias aut, 
            </h6>
            </div>
            
        </div>
    </div>
  )
}

export default Component2