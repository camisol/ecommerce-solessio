import ItemCount from './ItemCount';
import foto from './imagenes/fotoProducto1.jpg';
import { useParams } from 'react-router-dom';

function ItemDetail({ producto }) {

    const onAdd = (contador) => {
        console.log("Agregaste " + contador + ` ${producto.nombre} ` + "al carrito");
    }

    const { id } = useParams();


    console.log(id)


    return (
        <div className="productDetailContainer">
            <p>DETALLE DEL PRODUCTO</p>
            <img src={foto} />
            <p>{producto.nombre}</p>
            <p>{producto.id}</p>
            <p>${producto.precio}</p>
            <ItemCount stock={5} stockInicial={1} onAdd={onAdd} />
        </div>
    )
}

export default ItemDetail;