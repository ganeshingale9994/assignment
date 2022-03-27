import React from 'react'
import Component1 from './Components/Component1';
import Component2 from './Components/Component2';
import Component3 from './Components/Component3';
import Form from './Components/Form';
import Product from './Components/Products/Product';
import Table1 from './Components/Tables/Table1';



function Home() {
  return (
    <div>
        < Component1 />
        < Product />
        < Component2 />
        < Component3 />
        < Form />
        <Table1 />
    </div>
  )
}

export default Home