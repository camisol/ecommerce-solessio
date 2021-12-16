

import ItemList from './ItemList';
import { useState } from 'react';
import { useEffect } from 'react';


const productosIniciales = [{ nombre: `Zapatillas Raven`, id: 1, precio: 12000 }, { nombre: `Zapatillas Space`, id: 2, precio: 10500 }, { nombre: `Zapatillas Black`, id: 3, precio: 13900 }]


function ItemListContainer({ greeting }) {

    let [productos, setProductos] = useState([]);


    useEffect(() => {

        const promesa = new Promise((res) => {

            setTimeout(() => {
                res(productosIniciales)
            }, 2000);
        })

        promesa
            .then((elementos) => {
                console.log(elementos)
                setProductos(elementos)
            })

            .catch(() => {
                console.log("Error")

            })




    }, [productosIniciales])


    return (
        <main>
            <p>¡{greeting}!</p>
            <ItemList items={productos} />
        </main>
    )
}


export default ItemListContainer;


