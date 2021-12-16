import ItemDetail from './ItemDetail';
import { useState } from 'react';
import { useEffect } from 'react';

const productoInicial = { nombre: `Zapatillas Raven`, id: 1, precio: 12000 };


function ItemDetailContainer() {


    let [producto, setProducto] = useState({});


    useEffect(() => {

        const getItem = new Promise((res) => {

            setTimeout(() => {
                res(productoInicial)
            }, 3000);
        })

        getItem
            .then((elemento) => {
                console.log(elemento)
                setProducto(elemento)
            })

            .catch(() => {
                console.log("Error")

            })

    }, [])

    return (
        <ItemDetail producto={producto} />
    )
}

export default ItemDetailContainer;