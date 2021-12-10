import { useState } from 'react';
import './scss/ItemCount.scss';



function ItemCount({ stock, stockInicial, onAdd }) {

    const [contador, setContador] = useState(stockInicial);
    //const [stock, setStock] = useState(5);

    const sumar = () => {
        if (contador < stock) {
            setContador(contador + 1);
        }
    }

    const restar = () => {
        if (contador > stockInicial) {
            setContador(contador - 1);
        }
    }

    // const onAdd = () => {
    //     setStock(stock - contador);
    //     if (stock > 0) {
    //         console.log("Agregaste " + contador + " productos al carrito");
    //         setContador(stockInicial);
    //     } else {
    //         setContador(0);
    //         console.log("No hay stock de este producto")
    //     }
    // }

    return (

        <div className="contadorContainer">
            <p>Producto</p>
            <div className="contadorControls">
                <button onClick={sumar}>+</button>
                <p>{contador}</p>
                <button onClick={restar}>-</button>
            </div>
            <button onClick={() => onAdd(contador)} className="contadorBtnAdd" >Agregar </button>
        </div>
    )
}

export default ItemCount;