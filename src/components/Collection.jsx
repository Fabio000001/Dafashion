import './styles/Collection.css';
import Magazine from './Magazine';

const Collection = () => {
    // Define URLs para los libros interactivos
    const collections = [
        { name: "ELLE 2021", bookUrl: "https://online.fliphtml5.com/qppnn/tkkg/" },
        { name: "ELLE 2023", bookUrl: "https://online.fliphtml5.com/qppnn/mtsp/" },
        { name: "Vogue Niños", bookUrl: "https://online.fliphtml5.com/qppnn/rmpa/" },
        { name: "Innovamoda", bookUrl: "https://online.fliphtml5.com/qppnn/vxrb/" },
    ];

    return (
        <div className="py-16 px-4 bg-gray-100 background">
            <h2 className="text-4xl font-bold text-center mb-12">Nuestras Colecciones Exclusivas</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-12">
                {collections.map((collection, index) => (
                    <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden fade-in">
                        <Magazine bookUrl={collection.bookUrl} />
                        <div className="p-4">
                            <h3 className="text-xl font-semibold">{collection.name}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Collection;