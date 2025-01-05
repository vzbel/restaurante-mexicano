function Hero(){
    return (
        <section className="mb-16">
            <div className="flex flex-wrap mx-auto items-center justify-center gap-10 max-w-7xl">
                <img src="https://plus.unsplash.com/premium_photo-1680086984214-5def94faad1c?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" height="100px" width="450px" className="block w-full h-72 md:w-xl md:h-96 lg:h-auto lg:max-w-lg object-cover"/>
                <div className="max-w-xl flex-1 font-serif p-5 md:p-0">
                    <h1 className="text-8xl mb-5 max-w-sm">Sabor Mexicano</h1>
                    <p className="text-2xl mb-5 text-lime-800">Bienvenidos a Sabor Mexicano, donde cada plato cuenta una historia de tradición y pasión. Aquí celebramos los auténticos sabores de México con recetas que combinan ingredientes frescos y técnicas tradicionales.</p>
                    <button className="text-3xl bg-lime-800 text-yellow-50 py-3 px-12 rounded-md">Menu</button>
                </div>
            </div>
        </section>
    );
}

export default Hero