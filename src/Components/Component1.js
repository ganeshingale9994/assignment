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
        padding:'20px'
    
      }}>
        <h3 className='firstHead'
            style={{
            paddingTop:'30px',
            textAlign:'center',
            animation:' article-load 500ms ease-in'
            }}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit
        </h3>  
        <h5 className='heading4.1'
            style={{
            textAlign:'center',
            padding:'20px',
            margin:'20px',
            animation:'ease-out'
        
        }}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?

        </h5>
    </div>

<div className='heading'  style={{
    background: `url(${Background2})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    height:'100vh',
    backgroundRepeat: 'no-repeat',
    margin: '10px',
    paddingTop:'30px'

  }}>
    <h3 className='heading2.2'
        style={{
        paddingTop:'30px',
        paddingRight:'200px',
        paddingLeft:'450px',
        textAlign:'right',}}>
    Lorem, ipsum dolor sit amet consectetur adipisicing elit
    </h3>  
    <h5 className='heading4.2'
        style={{
        textAlign:'right',
        paddingLeft:'450px',
        paddingRight:'200px'    
    }}>
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque? Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque? Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?
    </h5>
</div>
</div>
 
  )
}

export default Component1