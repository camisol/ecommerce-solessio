

import ItemList from './ItemList';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
//import { BrowserRouter, Routes, Route } from "react-router-dom";


const productosIniciales = [{ nombre: `Zapatillas Raven`, id: 1, precio: 12000, tipo: "deporte" }, { nombre: `Zapatillas Space`, id: 2, precio: 10500, tipo: "urbano" }, { nombre: `Zapatillas Black`, id: 3, precio: 13900, tipo: "urbano" }]


function ItemListContainer() {

    let [productos, setProductos] = useState([]);

    const { tipo } = useParams()


    useEffect(() => {

        const promesa = new Promise((res) => {


            res(productosIniciales)

        })

        promesa
            .then((elementos) => {
                if (elementos.tipo !== "undefined" && tipo !== "todos") {
                    let categorias = elementos.filter((elementos) => elementos.tipo === tipo)
                    setProductos(categorias)
                } else {
                    setProductos(elementos)
                }
            })

            .catch(() => {
                console.log("Error")
            })

    }, [tipo])


    return (

        <main>
            <ItemList items={productos} />

        </main>

    )
}


export default ItemListContainer;


