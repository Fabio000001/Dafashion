import './styles/Home.css';

const Home = () => {
    return (
        <div className="bg-cover bg-center h-[60vh] text-white flex items-center justify-center relative" style={{ backgroundImage: 'url("https://via.placeholder.com/1500x800?text=Fashion+Background")' }}>
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative text-center show">
                <h1 className="text-5xl font-extrabold mt-10 mb-16">Bienvenidos al Mundo de la Moda</h1>
                <div className='mb-16'>
                    <p className="text-lg">Descubre las últimas colecciones.</p>
                    <a href="/collection" className="mt-6 inline-block bg-orange-500 px-8 py-3 rounded-full text-white font-semibold hover:bg-orange-600">Ver Colecciones</a>
                </div>
                <div>
                    <p className="text-lg">Descubre las tendencias más impactantes.</p>
                    <a href="/trends" className="mt-6 inline-block bg-orange-500 px-8 py-3 rounded-full text-white font-semibold hover:bg-orange-600">Ver Tendencias</a>
                </div>
            </div>
        </div>
    );
};

export default Home;