import { useEffect, useState } from 'react';
import products from '../utils/products.json';
import { useLocation } from 'react-router-dom';
import ViewImage from '../components/product/ViewImage';
import { Link } from 'react-router-dom';


const ViewItem = () => {

    const [item, setItem] = useState({});
    const location = useLocation();


    useEffect(() => {
        setItem(products.find((item) => item.id === location.pathname.slice(6)));
    }, []);

    return (
        <div className="min-h-screen bg-base-200 px-16 py-24">
            <div className="flex flex-col lg:flex-row gap-x-12 items-center justify-evenly pb-8">
                <div>
                    <div className="text-sm breadcrumbs">
                        <ul>
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/tienda'>Tienda</Link></li>
                            <li>Ver {item.tipo} </li>
                        </ul>
                    </div>

                    <ViewImage item={item} />
                </div>
                
                <div>
                    <h1 className="text-4xl font-bold">{item.tipo || 'Product'}</h1>
                    <span>{item.id}</span>
                    <h3 className='my-4 text-3xl'>${item.valor}</h3>
                    <label className="w-auto flex flex-row my-4">
                        <div className="label">
                            <span className="label-text">Cantidad:</span>
                        </div>
                        <input type="number" name="amount" min={1} className="input input-bordered w-1/4" />
                    </label>
                    <div className='flex flex-col gap-4'>
                        <button className='btn btn-primary'><box-icon name="cart" color="#FFF" />Agregar al carrito</button>
                        <button className='btn btn-secondary'>Comprar ahora</button>
                    </div>
                </div>
            </div>
            <p className='collapse-title'>Organiza y exhibe tus medallas de una manera práctica y con buen gusto. Por su diseño original es agradable en cualquier tipo de ambiente y no daña paredes.</p>
            <div className="collapse collapse-plus bg-none">
                <input type="checkbox" />
                <div className="collapse-title text-xl font-medium">
                    Instrucciones de Instalación
                </div>
                <div className="collapse-content">
                    <ul>
                        <li><strong>Limpie la superficie:</strong> Certifique que la superficie esté lisa, libre de poros y humedad. Limpie con detergente, luego alcohol y deje secar.</li>
                        <li><strong>Presione firme:</strong> Quite la parte posterior de la cinta adhesiva y presione firmemente el portamedallas en la pared.</li>
                        <li><strong>Espere:</strong> Deje pasar 24 horas antes de colgar sus medallas.</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ViewItem