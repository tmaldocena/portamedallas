import { useEffect, useState } from 'react';
import products from '../utils/products.json';
import { useLocation } from 'react-router-dom';
import ViewImage from '../components/product/ViewImage';
import { Link } from 'react-router-dom';
import UseCart from '../hooks/useCart';


const ViewItem = () => {

    const { addToCart } = UseCart()

    const [item, setItem] = useState({});
    const location = useLocation();

    const [amount, setAmount] = useState(1);
    const [showAlert, setShowAlert] = useState(false);
    const incrementCounter = () => setAmount(amount + 1);
    let decrementCounter = () => setAmount(amount - 1);
    if (amount < 2) {
        decrementCounter = () => setAmount(1);
    }

    const addItem = (item, amount) => {
        addToCart(item, amount)
        setTimeout(() => {
            setShowAlert(false)
        }, 2000);
        setShowAlert(true);
    }

    useEffect(() => {
        setItem(products.find((item) => item.id === location.pathname.slice(6)));
    }, []);

    return (
        <div className="min-h-screen bg-base-200 px-16 py-24">
            {
                showAlert && (
                    <div className="toast z-10">
                        <div className="alert alert-success">
                            <span>Item agregado al carrito!</span>
                        </div>
                    </div>
                )
            }
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
                    <label className="w-auto flex flex-row items-center my-4">
                        <div className="label">
                            <span className="label-text">Cantidad:</span>
                        </div>
                        <div className='flex flex-row items-center'>
                            <button className="btn btn-square" onClick={decrementCounter}><box-icon name='minus'></box-icon></button>
                            <span className="px-2 bg-base-200">{amount}</span>
                            <button className="btn btn-square" onClick={incrementCounter}><box-icon name='plus'></box-icon></button>
                        </div>                    
                    </label>
                    <div className='flex flex-col gap-4'>
                        <button className='btn btn-primary' onClick={ () => addItem(item, amount) }><box-icon name="cart" color="#FFF"/>Agregar al carrito</button>
                        <Link to='/cart' className='btn btn-secondary' onClick={ () => addItem(item, amount) }>Comprar ahora</Link>
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