/* eslint-disable react/prop-types */
import Card from "../Card";


// eslint-disable-next-line react/prop-types
const Items = ({ products }) => {

    console.log(products);

    return (
        <div className="w-4/5 px-8 flex flex-wrap gap-4">
                { products.map((prod,key) => {
                    return (
                        <Card item={prod} key={key} />

                    )
                })}
        </div>
    )
}

export default Items