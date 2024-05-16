/* eslint-disable react/prop-types */
import { useState } from "react"
import { Link } from "react-router-dom";

const Card = ({ item }) => {


    const [amount, setAmount] = useState(1);
    const incrementCounter = () => setAmount(amount + 1);
    let decrementCounter = () => setAmount(amount - 1);
    if( amount < 2 ) {
      decrementCounter = () => setAmount(1);
    }

    return (
        <Link to={'/item/' + item.id} className="card lg:w-72 w-80 bg-base-100 shadow-xl">
            <figure><img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title text-base">
                    { item.tipo }
                </h2>
                <p>${ item.valor }</p>
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
        </Link>
    )
}

export default Card