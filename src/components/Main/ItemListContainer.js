

import ItemList from './ItemList';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';


const productosIniciales = [{ nombre: `Zapatillas Raven`, id: 1, precio: 12000, tipo: "deporte" }, { nombre: `Zapatillas Space`, id: 2, precio: 10500, tipo: "urbano" }, { nombre: `Zapatillas Black`, id: 3, precio: 13900, tipo: "urbano" }]


function ItemListContainer({ greeting }) {

    let [productos, setProductos] = useState([]);

    const { tipo } = useParams()
    console.log(tipo)

    useEffect(() => {

        const promesa = new Promise((res) => {

            setTimeout(() => {
                res(productosIniciales)
            }, 2000);
        })

        promesa
            .then((elementos) => {
                setProductos(elementos)
            })

            .catch(() => {
                console.log("Error")

            })

    }, [])


    return (
        <main>
            <p>¡{greeting}!</p>
            <ItemList items={productos} />
        </main>
    )
}


export default ItemListContainer;


