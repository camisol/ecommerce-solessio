import ItemDetail from './ItemDetail';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const productos1 = [{ nombre: `Zapatillas Raven`, id: 1, precio: 12000, tipo: "deporte" }, { nombre: `Zapatillas Space`, id: 2, precio: 10500, tipo: "urbano" }, { nombre: `Zapatillas Black`, id: 3, precio: 13900, tipo: "urbano" }]


function ItemDetailContainer() {


    let [producto, setProducto] = useState({});
    const { id } = useParams();

    console.log(productos1)


    useEffect(() => {

        const getItem = new Promise((res) => {

            setTimeout(() => {
                res(productos1)
            }, 2000);
        })


        getItem
            .then((elementos) => {
                if (elementos.id !== "undefined") {
                    let detalle = elementos.filter((elementos) => elementos.id === id)
                    setProducto(detalle)
                }
            })

            .catch(() => {
                console.log("Error")

            })

    }, [id])

    return (
        <ItemDetail producto={producto} />
    )
}

export default ItemDetailContainer;