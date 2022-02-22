import React, {Fragment, useState, useEffect} from 'react';
import Navbar from './Components/Navbar';
import ProductsList from './Components/ProductsList';
import Form from './Components/Form';


function App() {

  const [ products, setProducts] = useState([])
  const [ product, setProduct ] = useState({
    Producto: '',
    Descripcion: '',
    Cantidad: 0
  })
  const [table, setTable] = useState(false)

  useEffect ( () => {
    const getProducts = () => {
      fetch('http://localhost:9000/api')
      .then(res => res.json())
      .then(res => setProducts(res))
    }
    getProducts()
  }, [table])

  return (
  <Fragment>
    <Navbar/>
    <div className='containerFormAndList'>
      <div className='row'>
        <div className='col-5 formClient'>
          <h2 style={{textAlign: 'center'}}>Agrega tus productos</h2>
          <Form product={product} setProduct={setProduct}/>
        </div>
        <div className='col-7 listProduct'>
            <h2 style={{textAlign: 'center'}}>Lista de productos</h2>
            <ProductsList product={product} products={products} setTable={setTable} setProduct={setProduct}/>
        </div>
      </div>
    </div>
  </Fragment>
  );
}

export default App;
