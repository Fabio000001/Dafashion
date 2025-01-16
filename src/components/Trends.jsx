import './styles/Trends.css';

const Trends = () => {
    const trends = [
        { name: "Pantalón City beige", imagen: "/public/trends/pantalones-city-beige.jpg" },
        { name: "Vestido Linyer verde", imagen: "/public/trends/vestido-linyer-verde.jpg" },
        { name: "Abrigo de doble botonadura", imagen: "/public/trends/abrigo-doble-botonadura.jpg" },
    ];

    return (
        <div className="py-16 px-4 bg-white">
            <h2 className="text-4xl font-bold text-center mb-12">Últimas Tendencias</h2>
            <div className="flex flex-col sm:flex-row sm:justify-between space-y-6 sm:space-y-0 sm:space-x-6">
                {trends.map((trend, index) => (
                    <div key={index} className="bg-gray-200 rounded-lg overflow-hidden shadow-lg w-full sm:w-1/3 slide">
                        <img className="w-full h-96 object-cover" src={trend.imagen} alt={trend.name} />
                        <div className="p-4">
                            <h3 className="text-xl font-semibold">{trend.name}</h3>
                            <p className="mt-2 text-gray-600">Las tendencias más destacadas de esta temporada. ¡No te las puedes perder!</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Trends;