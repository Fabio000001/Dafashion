const Magazine = ({ bookUrl }) => {
    return (
        <div className="text-center max-w-full">
            <h1 className="text-3xl font-bold mb-4">ELLE 2021</h1>
            <div className="relative w-full pb-[56.25%] mb-8">
                <iframe
                    src={bookUrl}
                    className="absolute top-0 left-0 w-full h-full border-none"
                    allowFullScreen
                    title="ELLE 2021"
                >
                    Este contenido requiere un navegador que soporte iframes.
                </iframe>
            </div>
        </div>
    );
}

export default Magazine;