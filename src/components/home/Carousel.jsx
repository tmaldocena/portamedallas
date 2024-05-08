import { useRef } from "react"

const Carousel = () => {

    const lastSlide = useRef(null);
    const firstSlide = useRef(null);

    const focusLast = () => {
        lastSlide.current.focus();
      };

    const focusFirst = () => {
        firstSlide.current.focus();
      };
    

    return (
        <div className="font-open">
            <div className="flex flex-row gap-2 px-16 items-baseline my-4">
                <h3 className="flex-none text-2xl font-bold text-primary">Filtrar por categoría</h3>
                <a href="*" className="flex-none text-gray-500 hover:text-primary">ver todo</a>
                <div className="ml-auto flex gap-2 justify-between">
                    <button onClick={ focusFirst } className="btn btn-sm btn-circle">❮</button>
                    <button onClick={ focusLast } className="btn btn-sm btn-circle">❯</button>
                </div>

            </div>
            <div className="carousel carousel-end gap-4 py-12 w-full">
                <div className="ml-16 carousel-item relative w-1/5 min-h-40">
                    <a href="*" ref={ firstSlide } className="flex flex-col gap-2 rounded-xl border-opacity-30 shadow-xl justify-center w-full items-center text-primary transition-all bg-neutral hover:bg-base-200">
                        <box-icon name='dumbbell' color="#0D0E26" size="lg"></box-icon>
                        <h4 className="font-bold text-center text-primary">Deportes Individuales</h4>
                    </a>

                </div>
                <div id="slide2" className="carousel-item relative w-1/5">
                    <a href="*" className="flex flex-col gap-2 rounded-xl border-opacity-30 shadow-xl justify-center w-full items-center text-primary transition-all bg-neutral hover:bg-base-200">
                        <box-icon name='football' color="#0D0E26" size="lg"></box-icon>
                        <h4 className="font-bold text-center text-primary">Deportes Grupales</h4>
                    </a>
                </div>
                <div id="slide3" className="carousel-item relative w-1/5">
                    <a href="*" className="flex flex-col gap-2 rounded-xl border-opacity-30 shadow-xl justify-center w-full items-center text-primary transition-all bg-neutral hover:bg-base-200">
                        <box-icon name='run' color='#0D0E26' size="lg"></box-icon>
                        <h4 className="font-bold text-center text-primary">Running</h4>
                    </a>
                </div>
                <div id="slide4" className="carousel-item relative w-1/5">
                    <a href="*" className="flex flex-col gap-2 rounded-xl border-opacity-30 shadow-xl justify-center w-full items-center text-primary transition-all bg-neutral hover:bg-base-200">
                        <box-icon name='cycling' color="#0D0E26" size="lg"></box-icon>
                        <h4 className="font-bold text-center text-primary">Bike</h4>
                    </a>
                </div>
                <div id="slide5" className="carousel-item relative w-1/5">
                    <a href="*" className="flex flex-col gap-2 rounded-xl border-opacity-30 shadow-xl justify-center w-full items-center text-primary transition-all bg-neutral hover:bg-base-200">
                    <box-icon name='dumbbell' color="#0D0E26" size="lg"></box-icon>
                        <h4 className="font-bold text-center text-primary">Gymnastics</h4>
                    </a>
                </div>
                <div id="slide6" className="carousel-item relative w-1/5">
                    <a href="*" className="flex flex-col gap-2 rounded-xl border-opacity-30 shadow-xl justify-center w-full items-center text-primary transition-all bg-neutral hover:bg-base-200">
                        <box-icon name='run' color='#0D0E26' size="lg"></box-icon>
                        <h4 className="font-bold text-center text-primary">Triatlon</h4>
                    </a>
                </div>
                <div id="slide7" className="carousel-item relative w-1/5">
                    <a href="*" className="flex flex-col gap-2 rounded-xl border-opacity-30 shadow-xl justify-center w-full items-center text-primary transition-all bg-neutral hover:bg-base-200">
                        <box-icon name='swim' color='#0D0E26' size="lg"></box-icon>
                        <h4 className="font-bold text-center text-primary">Natación</h4>
                    </a>
                </div>
                <div id="slide8" className="carousel-item relative w-1/5">
                    <a href="*" className="flex flex-col gap-2 rounded-xl border-opacity-30 shadow-xl justify-center w-full items-center text-primary transition-all bg-neutral hover:bg-base-200">
                    <box-icon name='tennis-ball' color='#0D0E26' size="lg"></box-icon>
                        <h4 className="font-bold text-center text-primary">Tenis</h4>
                    </a>
                </div>
                <div  className="pr-16 carousel-item relative w-1/5">
                    <a href="*" ref={lastSlide} className="flex flex-col gap-2 rounded-xl border-opacity-30 shadow-xl justify-center w-full items-center text-primary transition-all bg-neutral hover:bg-base-200">
                    <box-icon name='cat' type="solid" color='#0D0E26' size="lg"></box-icon>
                        <h4 className="font-bold text-center text-primary">Mascotas</h4>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Carousel