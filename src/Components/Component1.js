import React from 'react'
import Background1 from '../Images/tvunit.jpg';
import Background2 from '../Images/sofa.jpg';

function Component1() {
   


  return (
      <div>   <div className='heading'  style={{
        background: `url(${Background1})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        height:'100vh',
        backgroundRepeat: 'no-repeat',
        margin: '10px',
    
      }}>
        <h2 className='firstHead'
            style={{
            paddingTop:'30px',
            textAlign:'center',}}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit
        </h2>  
        <h4 className='heading4.1'
            style={{
            textAlign:'center',
        
        }}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?

        </h4>
    </div>

<div className='heading'  style={{
    background: `url(${Background2})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    height:'100vh',
    backgroundRepeat: 'no-repeat',
    margin: '10px',

  }}>
    <h2 className='heading2.2'
        style={{
        paddingTop:'100px',
        paddingRight:'200px',
        paddingLeft:'450px',
        textAlign:'right',}}>
    Lorem, ipsum dolor sit amet consectetur adipisicing elit
    </h2>  
    <h4 className='heading4.2'
        style={{
        textAlign:'right',
        paddingLeft:'450px',
        paddingRight:'200px'    
    }}>
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque? Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque? Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?
    </h4>
</div>
</div>
 
  )
}

export default Component1