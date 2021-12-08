
import ItemCount from './ItemCount';


function ItemListContainer(props) {


    return (
        <main>
            <p>¡{props.greeting}!</p>
            <ItemCount /*stock={5}*/ stockInicial={1} />
        </main>
    )
}


export default ItemListContainer;


