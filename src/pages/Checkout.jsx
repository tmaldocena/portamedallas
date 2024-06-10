import { useRef } from "react"
import UseCart from "../hooks/useCart"
import { useState } from "react"
import { useEffect } from "react"


const Checkout = () => {
    const { cart, getTotal } = UseCart()
    const [showAlert, setShowAlert] = useState(false);
    const [step, setStep] = useState(1);
    const [regions, setRegions] = useState([]);
    const [discountAlert, setDiscountAlert] = useState({ type: 'alert-success', text: '' });

    const discount = useRef();

    useEffect(() => {

        fetch("https://api-colombia.com/api/v1/Department")
            .then(response => response.json())
            .then(result => setRegions(result))
            .catch(error => console.log('error', error));

    }, []);

    const getCurrency = (price) => {
        return new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'COP', currencyDisplay: 'narrowSymbol' }).format(price);
    }

    const handleDiscount = () => {
        if (discount.current.value === 'CODIGOPRUEBA') {
            // Aplicar el descuento
            setDiscountAlert({ type: 'alert-success', text: 'Código aplicado correctamente' })
        } else {
            setDiscountAlert({ type: 'alert-error', text: 'No existe el código' })
        }

        setTimeout(() => {
            setShowAlert(false)
        }, 2000);
        setShowAlert(true);
    }


    return (
        <section className="px-16 py-24 font-open">
            <div className="flex flex-row justify-center">
                <div className="w-1/2">
                    <span className="flex flex-row">
                        <img src="./assets/logo-portamedallas-1.png" alt="logo portamedallas" width={32} />
                        <h1 className="text-lg font-bold text-primary">Resumen del pedido</h1>
                    </span>
                    <h3 className="my-4 text-xl font-light">Precio de productos: ${getCurrency(getTotal())}</h3>
                    <h5 className="my-2 text-lg font-light">Coste de envío: $99.999</h5>
                    <div className="divider" />
                    <ul className="">
                        {cart.map((prod, index) => {
                            return (
                                <li className='flex flex-row items-center justify-between py-2' key={index}>
                                    <span className='flex flex-row gap-4'>
                                        <div className="avatar">
                                            <div className="w-12 rounded">
                                                <img src={prod.firstImage} />
                                            </div>
                                        </div>
                                        <div className='flex flex-col'>
                                            <span className="text-lg text-primary font-semibold">{prod.tipo}</span>
                                            <span className='text-xs'>${prod.valor}</span>
                                        </div>
                                    </span>
                                    <span>x{prod.quantity}</span>
                                </li>
                            )
                        })}
                    </ul>
                    <div className="collapse">
                        <input type="checkbox" />
                        <div className="collapse-title text-lg font-medium flex flex-row gap-2 items-center">
                            <box-icon type='solid' name='discount'></box-icon> Ingresar código de descuento
                        </div>
                        <div className="collapse-content">
                            <div className="join">
                                <input type="text" ref={discount} placeholder="Tú código de descuento" className="input input-sm input-bordered input-primary w-full max-w-xs join-item" />

                                <button className="btn btn-sm btn-outline btn-primary join-item" onClick={() => handleDiscount()}>Aplicar</button>
                            </div>
                            {
                                showAlert && (
                                    <div className="toast z-10">
                                        <div className={'alert ' + discountAlert.type}>
                                            <span>{discountAlert.text}</span>
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>
                <div className="w-1/2">
                    <h2>Form</h2>
                    <ul className="steps steps-vertical lg:steps-horizontal w-full bg-base-200">
                        <li className={'step transition-colors ' + (step >= 1 ? 'step-primary font-bold' : '')}>Datos Personales</li>
                        <li className={'step transition-colors ' + (step >= 2 ? 'step-primary font-bold' : '')}>Datos de Envío</li>
                        <li className={'step transition-colors ' + (step >= 3 ? 'step-primary font-bold' : '')}>Métodos de Pago</li>
                    </ul>
                    <div className="w-full">
                        <div className={"grid w-full rounded bg-base-200 text-primary-content p-4 " + (step == 1 ? 'grid' : 'hidden')}>
                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text">Correo eléctronico</span>
                                </div>
                                <input type="mail" placeholder="tucorreo@mail.com" className="input input-bordered w-full" />
                            </label>
                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text">Nombre y Apellido</span>
                                </div>
                                <input type="text" placeholder="Juan Perez" className="input input-bordered w-full" />
                            </label>
                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text">Número de Teléfono</span>
                                </div>
                                <input type="tel" placeholder="(+11) 111-111-1111" className="input input-bordered w-full" />
                            </label>
                            <div className="mt-4 w-full flex flex-row justify-between">
                                <button className="btn btn-outline btn-primary" onClick={() => setStep(step - 1)}>Volver</button>
                                <button className="btn btn-wide btn-outline btn-primary" onClick={() => setStep(step + 1)}>Avanzar</button>
                            </div>
                        </div>
                        <div className={"grid w-full rounded bg-base-200 text-primary-content p-4 " + (step == 2 ? 'grid' : 'hidden')}>
                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text">Región</span>
                                </div>
                                <select className="select select-bordered text-primary select-primary">
                                    <option disabled selected>Seleccionar Departmento</option>
                                    {regions.map(region => {
                                        return (
                                            <option key={region.id} >{region.name}</option>
                                        )
                                    })}
                                </select>
                            </label>
                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text">Ciudad</span>
                                </div>
                                <input type="text" placeholder="Bogotá, Medellín, etc." className="input input-bordered w-full" />
                            </label>
                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text">Dirección</span>
                                </div>
                                <input type="text" placeholder="Calles, número, etc." className="input input-bordered w-full" />
                            </label>
                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text">Detalles adicionales</span>
                                </div>
                                <input type="text" placeholder="Número de apartamento, indicaciones adicionales, etc." className="input input-bordered w-full" />
                            </label>
                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text">Código Postal</span>
                                </div>
                                <input type="number" placeholder="0000" className="input input-bordered w-full max-w-xs" />
                            </label>
                            <div className="mt-4 w-full flex flex-row justify-between">
                                <button className="btn btn-outline btn-primary" onClick={() => setStep(step - 1)}>Volver</button>
                                <button className="btn btn-wide btn-outline btn-primary" onClick={() => setStep(step + 1)}>Avanzar</button>
                            </div>
                        </div>
                        <div className={"grid w-full rounded bg-base-200 text-primary-content p-4 " + (step == 3 ? 'grid' : 'hidden')}>
                            <div className="mt-4 w-full flex flex-row justify-between">
                                <div className="mt-4 w-full flex flex-row justify-between">
                                    <button className="btn btn-outline btn-primary" onClick={() => setStep(step - 1)}>Volver</button>
                                    <button className="btn btn-wide btn-outline btn-primary" onClick={() => setStep(step + 1)}>Avanzar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Checkout