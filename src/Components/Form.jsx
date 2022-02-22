import React from "react";
import '../Components/css/Form.css'

const Form = ({product, setProduct}) => {

    const handleChange = (e) => {
        setProduct({
            ...product,
            [e.target.name]: e.target.value

        })
    }
//...product, una coipia del state que estaba inicialmente y luego se agrega lo que se modifica 

    let{Producto, Descripcion, Cantidad} = product

    const handleSubmit = () => {
        Cantidad = parseInt(Cantidad, 10)
        // validación de los datos ingresados
        if(Producto === '' || Descripcion === '' || Cantidad <= 0) {
            alert('todos los campos son obligatorios')
            return 
        }

        // consulta
        const requestInit = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(product)
        }

        fetch('http://localhost:9000/api', requestInit)
        .then(res => res.text())
        .then(res => console.log(res))

        //reiniciando State de los productos 
        setProduct( {
            Producto: '',
            Descripcion: '',
            Cantidad: 0
        })


    }

    return ( 
        <form onSubmit={handleSubmit} className='formPut'>
            <div className='mb-3'>
                <label htmlFor='product'className='form-label tableHeader'>Producto</label>
                <input value={Producto} name='Producto' onChange={handleChange} type='text' id='product'className='form-control'/>
            </div>
            <div className='mb-3'>
                <label htmlFor='description'className='form-label tableHeader'>Descripción</label>
                <input value={Descripcion} name='Descripcion' onChange={handleChange} type='text' id='description'className='form-control'/>
            </div>
            <div className='mb-3'>
                <label htmlFor='count'className='form-label tableHeader'>Cantidad</label>
                <input value={Cantidad} name='Cantidad' onChange={handleChange} type='number' id='count'className='form-control'/>
            </div>
            <div className= 'content-formBtn'>
                <button type='submit' className='btn btn-primary formBtn'>Agregar Producto</button>
            </div>
        </form>
    );
}

export default Form;