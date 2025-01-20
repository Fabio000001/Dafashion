import './styles/Trends.css';

const Trends = () => {
    const trends = [
        { name: "Pantalón City beige", imagen: "/public/trends/pantalones-city-beige.jpg" },
        { name: "Vestido Linyer verde", imagen: "/public/trends/vestido-linyer-verde.jpg" },
        { name: "Abrigo de doble botonadura", imagen: "/public/trends/abrigo-doble-botonadura.jpg" },
        { name: "Vestido largo negro de manga larga", imagen: "/public/trends/vestido-largo-negro-manga-larga.avif" },
        { name: "Zapatillas de deporte marrones", imagen: "/public/trends/zapatillas-deporte-marrones.jfif" },
        { name: "Pulsera con cordón de oro", imagen: "/public/trends/pulsera-cordon.jpg" },
    ];

    return (
        <div className="py-16 px-4 bg-white">
            <h2 className="text-4xl font-bold text-center">Últimas Tendencias</h2>
            <h6 className='mt-2 mb-12 text-2xl font-semibold text-center'>Las tendencias más destacadas de esta temporada. ¡No te las puedes perder!</h6>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 slide">
                {trends.map((trend, index) => (
                    <div key={index} className="bg-gray-200 rounded-lg overflow-hidden shadow-lg border">
                        <img className="w-full h-96 object-cover cursor-pointer" src={trend.imagen} alt={trend.name} />
                        <div className="p-5">
                            <h3 className="text-xl font-semibold">{trend.name}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Trends;