import Item from './Item';

function ItemList({ items }) {


    return (

        <div className="productCardContainer">
            {items.map((elemento) => {
                return <Item item={elemento} key={elemento.id} />
            })}
        </div>

    )

}

export default ItemList;