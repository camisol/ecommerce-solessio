
import ItemCount from './ItemCount';
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
                setProductos([...elementos])
            })




    }, [productosIniciales])

    //console.log(productos2)


    const onAdd = (contador) => {
        console.log("Agregaste " + contador + " productos al carrito");
    }


    return (
        <main>
            <p>¡{greeting}!</p>
            <ItemCount stock={5} stockInicial={1} onAdd={onAdd} />
            <ItemList items={productos} />
        </main>
    )
}


export default ItemListContainer;


