import './styles/Trends.css';

const Trends = () => {
    const trends = ["Trend 1", "Trend 2", "Trend 3"];

    return (
        <div className="py-16 px-4 bg-white">
            <h2 className="text-4xl font-bold text-center mb-12">Últimas Tendencias</h2>
            <div className="flex flex-col sm:flex-row sm:justify-between space-y-6 sm:space-y-0 sm:space-x-6">
                {trends.map((trend, index) => (
                    <div key={index} className="bg-gray-200 rounded-lg overflow-hidden shadow-lg w-full sm:w-1/3 slide">
                        <img className="w-full h-56 object-cover" src={`https://via.placeholder.com/400x300?text=${trend}`} alt={trend} />
                        <div className="p-4">
                            <h3 className="text-xl font-semibold">{trend}</h3>
                            <p className="mt-2 text-gray-600">Las tendencias más destacadas de esta temporada. ¡No te las puedes perder!</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Trends;