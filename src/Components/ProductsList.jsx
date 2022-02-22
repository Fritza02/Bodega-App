import React from "react";
import '../Components/css/ProductsList.css'

const ProductsList = ({products, setTable, product, setProduct}) => {

    const handleDelete = (id) => {
        // consulta
        const requestInit = {
            method: 'DELETE',
        }

        fetch('http://localhost:9000/api/' + id, requestInit)
        .then(res => res.text())
        .then(res => console.log(res))

        setTable(true);

        window.location.reload()
    }

    let{Producto, Descripcion, Cantidad} = product
    const handleEdit = (id) => {
        Cantidad = parseInt(Cantidad, 10)
        // validación de los datos ingresados
        if(Producto === '' || Descripcion === '' || Cantidad <= 0) {
            alert('todos los campos son obligatorios')
            return 
        }

        // consulta
        const requestInit = {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(product)
        }

        fetch('http://localhost:9000/api/' + id, requestInit)
        .then(res => res.text())
        .then(res => console.log(res))

        setTable(true);

           //reiniciando State de los productos 
        setProduct( {
            Producto: '',
            Descripcion: '',
            Cantidad: 0
        })

    }

    return ( 
        <table className='table'>
            <thead>
                <tr>
                    <td className='tableHeader'>Producto</td>
                    <td className='tableHeader'>Descripción</td>
                    <td className='tableHeader'>Cantidad</td>
                </tr>
            </thead>
            <tbody>
                {products.map((product) => (
                <tr key={product.id}>
                    <td>{product.Producto}</td>
                    <td>{product.Descripcion}</td>
                    <td>{product.Cantidad}</td>
                    <td className='btnEditAndDelete'>
                        <div className='mb-3'>
                            <button onClick={() => handleDelete(product.id)} className='btn btn-danger btnDelete'>Eliminar</button>
                        </div>
                        <div className='mb-3'>
                            <button onClick={() => handleEdit(product.id)} className='btn btnEdit'>Editar</button>
                        </div>
                    </td>
                </tr>
                ))}
            </tbody>
        </table>
    );
}

export default ProductsList;