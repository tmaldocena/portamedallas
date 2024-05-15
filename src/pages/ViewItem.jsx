import { useEffect } from 'react';
import products from '../utils/products.json';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';

const ViewItem = () => {

    const [item, setItem] = useState({});
    const location = useLocation();


    useEffect(() => {
        setItem(products.find((item) => item.id === location.pathname.slice(6)));
        console.log(item);
    }, []);

    return (
        <div className="hero min-h-screen bg-base-200 px-16">
            <div className="flex flex-col lg:flex-row gap-4 justify-center">
                <img src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" className="rounded-lg shadow-2xl" />
                <div className=''>
                    <h1 className="text-5xl font-bold">{item.tipo || 'Product'}</h1>
                    <span>{item.id}</span>
                    <h3>${item.valor}</h3>
                    <label className="w-auto">
                        <div className="label">
                            <span className="label-text">Cantidad</span>
                        </div>
                        <input type="number" name="amount" className="input input-bordered w-full" />
                    </label>
                    <div className='flex flex-col gap-4'>
                        <button className='btn btn-primary'><box-icon name="cart" color="#FFF" />Agregar al carrito</button>
                        <button className='btn btn-secondary'>Comprar ahora</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewItem