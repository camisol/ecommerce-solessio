
import ItemCount from './ItemCount';



function ItemListContainer({ greeting }) {


    const onAdd = (contador) => {

        console.log("Agregaste " + contador + " productos al carrito");
    }


    return (
        <main>
            <p>¡{greeting}!</p>
            <ItemCount stock={5} stockInicial={1} onAdd={onAdd} />
        </main>
    )
}


export default ItemListContainer;


