import { useState } from "react";

const Filters = () => {


    const [range, setRange] = useState(1000);

    const categories = [
        'Deportes Grupales',
        'Deportes Individuales',
        'Otros',
        'Running',
        'Bike',
        'Natación',
        'Gymnastics',
        'Tenis',
        'Mascotas/Portacollares',
        'Triatlón'
    ]

    const colors = [
        { hex: '#974', name: 'Azul' },
        { hex: '#F09', name: 'Naranja' },
        { hex: '#121', name: 'Negro' },
        { hex: '#EE2', name: 'Rojo' }
    ]

    const handleChange = (e) => {
        setRange(e.target.value)
    }
    return (
        <>
            <div className="lg:hidden collapse">
                <input type="checkbox" />
                <div className="collapse-title text-xl font-medium">
                    <div className="collapse-title text-xl font-medium flex flex-row gap-2 items-center">
                        <h5 className="text-xl font-bold">Filtros</h5>
                        <box-icon name='chevron-down'></box-icon>
                    </div>
                </div>
                <div className="collapse-content">
                    <div className="collapse">
                        <input type="checkbox" />
                        <div className="collapse-title text-xl font-medium flex flex-row gap-2 items-center">
                            <h6>Categorias</h6>
                            <box-icon name='chevron-down'></box-icon>
                        </div>
                        <div className="collapse-content">
                            <div className="flex flex-col items-start">
                                <input type="radio" name="category" aria-label='Todos' className="btn btn-sm btn-link no-underline hover:no-underline" />
                                {categories.map((cat, key) => {
                                    return (
                                        <input type="radio" name="category" key={key} aria-label={cat} className="btn btn-sm btn-link no-underline hover:no-underline" />
                                    )
                                })}
                            </div>
                        </div>
                    </div>

                    <div className="divider"></div>

                    <div className="collapse">
                        <input type="checkbox" />
                        <div className="collapse-title text-xl font-medium flex flex-row gap-2 items-center">
                            <h6>Precio</h6>
                            <box-icon name='chevron-down'></box-icon>
                        </div>
                        <div className="collapse-content">
                            <div className="tooltip tooltip-primary w-full" data-tip={'$' + range}>
                                <input type="range" min={0} max="1000" value={range} className="range range-primary" onChange={handleChange} />
                            </div>
                        </div>
                    </div>

                    <div className="divider"></div>

                    <div className="collapse">
                        <input type="checkbox" />
                        <div className="collapse-title text-xl font-medium flex flex-row gap-2 items-center">
                            <h6>Colores</h6>
                            <box-icon name='chevron-down'></box-icon>
                        </div>
                        <div className="collapse-content">
                            <div className="flex flex-col items-start">
                                {colors.map((color, key) => {
                                    return (
                                        <input type="checkbox" key={key} aria-label={color.name} defaultChecked className='btn btn-sm btn-link no-underline hover:no-underline' />
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="lg:inline hidden w-1/5">
                <h5 className="text-xl font-bold">Filtros</h5>

                <div className="divider"></div>

                <div className="collapse">
                    <input type="checkbox" />
                    <div className="collapse-title text-xl font-medium flex flex-row gap-2 items-center">
                        <h6>Categorias</h6>
                        <box-icon name='chevron-down'></box-icon>
                    </div>
                    <div className="collapse-content">
                        <div className="flex flex-col items-start">
                            <input type="radio" name="category" aria-label='Todos' className="btn btn-sm btn-link no-underline hover:no-underline" />
                            {categories.map((cat, key) => {
                                return (
                                    <input type="radio" name="category" key={key} aria-label={cat} className="btn btn-sm btn-link no-underline hover:no-underline" />
                                )
                            })}
                        </div>
                    </div>
                </div>

                <div className="divider"></div>

                <div className="collapse">
                    <input type="checkbox" />
                    <div className="collapse-title text-xl font-medium flex flex-row gap-2 items-center">
                        <h6>Precio</h6>
                        <box-icon name='chevron-down'></box-icon>
                    </div>
                    <div className="collapse-content">
                        <div className="tooltip tooltip-primary w-full" data-tip={'$' + range}>
                            <input type="range" min={0} max="1000" value={range} className="range range-primary" onChange={handleChange} />
                        </div>
                    </div>
                </div>

                <div className="divider"></div>

                <div className="collapse">
                    <input type="checkbox" />
                    <div className="collapse-title text-xl font-medium flex flex-row gap-2 items-center">
                        <h6>Colores</h6>
                        <box-icon name='chevron-down'></box-icon>
                    </div>
                    <div className="collapse-content">
                        <div className="flex flex-col items-start">
                            {colors.map((color, key) => {
                                return (
                                    <input type="checkbox" key={key} aria-label={color.name} defaultChecked className='btn btn-sm btn-link no-underline hover:no-underline' />
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Filters