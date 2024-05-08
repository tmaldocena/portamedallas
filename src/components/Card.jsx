import { useState } from "react"

const Card = () => {

    const [amount, setAmount] = useState(1);
    const incrementCounter = () => setAmount(amount + 1);
    let decrementCounter = () => setAmount(amount - 1);
    if( amount < 2 ) {
      decrementCounter = () => setAmount(1);
    }

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    Title
                    <div className="badge badge-secondary">Popular!</div>
                </h2>
                <p>$99.999</p>
                <div className="card-actions justify-between items-center">
                    <div>
                        <button className="btn btn-sm btn-square" onClick={ decrementCounter }>-</button>
                        <span className="px-2 bg-base-100">{ amount }</span>
                        <button className="btn btn-sm btn-square" onClick={ incrementCounter }>+</button>
                    </div>
                    <button className="btn btn-outline btn-sm btn-primary">
                    <box-icon name="cart" color="#555" />
                    Agregar
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Card