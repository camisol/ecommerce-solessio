//import { Link } from 'react-router-dom';

function Item({ item }) {

    return (

        <div className="productCard">
            <p>{item.nombre}</p>
            <p>ID:{item.id}</p>
            <p>${item.precio}</p>

            <button>
                ver detalle
                {/* <Link to="/item" >Ver detalle</Link> */}
            </button>
        </div>
    )
}

export default Item;