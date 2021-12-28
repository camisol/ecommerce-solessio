import ItemCount from './ItemCount';
//import foto from './imagenes/fotoProducto1.jpg';


function ItemDetail({ producto }) {

    const onAdd = (contador) => {
        console.log("Agregaste " + contador + ` ${producto.nombre} ` + "al carrito");

    }

    return (
        <div className="productDetailContainer">
            <p>DETALLE DEL PRODUCTO</p>
            {/* <img src={foto} /> */}
            <p>{producto.nombre}</p>
            <p>{producto.id}</p>
            <p>${producto.precio}</p>
            <ItemCount stock={5} stockInicial={1} onAdd={onAdd} />
        </div>
    )
}

export default ItemDetail;