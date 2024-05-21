import UseCart from "../hooks/useCart"


const CheckCart = () => {
    const { cart } = UseCart()

    return (
        <div className="hero min-h-80">
            <h2>Ver carrito</h2>
            <ul>

            { cart.map((prod, index) => {
                return (
                    <li key={index}>{prod.tipo}</li>
                )
            })}
            </ul>
        </div>
    )
}

export default CheckCart