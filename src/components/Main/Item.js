

function Item({ item }) {

    return (

        <div className="productCard">
            <p>{item.nombre}</p>
            <p>ID:{item.id}</p>
            <p>${item.precio}</p>
        </div>
    )
}

export default Item;