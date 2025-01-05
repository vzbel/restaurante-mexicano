function ItemCard({imageURL, name, price}){
    return (
        <div>
            {/* Item Picture */}
            <img src={imageURL} alt="" width="" height="" className="mb-5 object-cover block min-w-96 max-w-96 h-96"/>

            {/* Item Name and Price */}
            <div className="text-amber-50 font-mono">
                <h3 className="text-xl font-semibold">{name}</h3>
                <p className="text-lg">${price}</p>
            </div>
        </div>
    );
}

export default ItemCard