
const InfoCards = () => {
    return (
        <section className="my-6 font-open">
            <h2 className="text-center text-2xl font-bold">¿Cómo los hacemos?</h2>
            <div className="flex xl:flex-row flex-col justify-center gap-4 mx-6">
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-primary">Material de calidad</h2>
                        <p>Nuestros portamedallas están hechos con metal <strong>CR-TEC</strong>, garantizando durabilidad y resistencia para tus logros deportivos.</p>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-primary">Diseño Preciso</h2>
                        <p>Utilizamos tecnología de corte láser para un acabado impecable en cada pieza, asegurando la perfecta exhibición de tus medallas.</p>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-primary">Estilo duradero</h2>
                        <p>Con recubrimiento de pintura electrostática, nuestros portamedallas no solo lucen elegantes, sino que también resisten el paso del tiempo con estilo.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default InfoCards