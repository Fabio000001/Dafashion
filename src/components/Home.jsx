import './styles/Home.css';
import Magazine from './Magazine.jsx';

const Home = () => {
    return (
        <div className="bg-cover bg-center h-[60vh] text-white flex items-center justify-center relative bgImage">
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative text-center show">
                <h1 className="text-5xl font-extrabold mb-20">Bienvenidos al Mundo de la Moda</h1>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-52'>
                    <div className="bg-gray-800 h-full rounded-lg flex flex-col justify-between mb-12">
                        <Magazine bookUrl="https://online.fliphtml5.com/qppnn/tkkg/" />
                        <div className='p-3'>
                            <p className="text-lg">Descubre las últimas colecciones.</p>
                            <a href="/collection" className="mt-6 inline-block bg-orange-500 px-8 py-3 rounded-full text-white font-semibold hover:bg-orange-600">Ver Colecciones</a>
                        </div>
                    </div>
                    <div className="bg-gray-800 h-full rounded-lg flex flex-col justify-between">
                        <img className="w-full object-cover rounded-lg" src="/public/trends/pantalones-city-beige.jpg" alt="Pantalón City beige" />
                        <div className='p-3'>
                            <p className="text-lg">Descubre las tendencias más impactantes.</p>
                            <a href="/trends" className="mt-6 inline-block bg-orange-500 px-8 py-3 rounded-full text-white font-semibold hover:bg-orange-600">Ver Tendencias</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;