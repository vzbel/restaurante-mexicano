import ItemCard from "./ItemCard";

function Favorites(){
    return (
        <section className="bg-lime-900 pl-20 py-5" id="favorites">
            <h2 className="text-4xl text-amber-50 font-regular font-mono mb-3">LOS FAVORITOS</h2>
            <div className="flex gap-10 overflow-x-auto pb-2 cursor-grab">
                <ItemCard imageURL="https://images.unsplash.com/photo-1552332386-f8dd00dc2f85?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" name={"TACOS"} price={"7.99"}/>
                <ItemCard imageURL="https://images.unsplash.com/photo-1647545401800-bd8f77e670ed?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" name={"QUESADILLAS"} price={"4.79"}/>
                <ItemCard imageURL="https://images.unsplash.com/photo-1707528903761-f63b970bd612?q=80&w=2030&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" name={"BREAKFAST BURRITOS"} price={"4.79"}/>
            </div>
        </section>
    );
}

export default Favorites