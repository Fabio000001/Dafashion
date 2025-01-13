import './styles/Collection.css'

const Collection = () => {
    const collections = ["Collection 1", "Collection 2", "Collection 3", "Collection 4"];

    return (
        <div className="py-16 px-4 bg-gray-100 background">
            <h2 className="text-4xl font-bold text-center mb-12">Nuestra Colección Exclusiva</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {collections.map((collection, index) => (
                    <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden fade-in">
                        <img className="w-full h-56 object-cover" src={`https://via.placeholder.com/300x200?text=${collection}`} alt={collection} />
                        <div className="p-4">
                            <h3 className="text-xl font-semibold">{collection}</h3>
                            <p className="mt-2 text-gray-600">Explora lo mejor de nuestra colección de moda con diseños únicos.</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Collection;