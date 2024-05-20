import { useState } from "react";
import Filters from "../components/shop/Filters"
import Items from "../components/shop/Items"
import products from '../utils/products.json';




const Shop = () => {
    
    const [searchItem, setSearchItem] = useState('')
    const [filteredItems, setFilteredItems] = useState(products)

    const [filters, setFilters] = useState({
        category: 'all',
        maxPrice: 150001,
        colors: ['blue', 'orange', 'black', 'pink']
    });

    const handleInputChange = (e) => {
        const searchTerm = e.target.value;
        setSearchItem(searchTerm)
        const filteredItems = products.filter((user) =>
            user.tipo.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredItems(filteredItems);
    }

    const filterProducts = () => {
        return filteredItems.filter((prod) => 
            prod.valor <= filters.maxPrice
        )
    }


    let fiProd = filterProducts()

    fiProd = filteredItems.filter((prod) =>  prod.category === filters.category || filters.category === 'all')

    return (
        <section className={"w-full pt-[4.8rem] text-primary font-open"} >
            <div className="w-full bg-accent py-8">
                <h2 className="text-center text-3xl">Portamedallas</h2>
            </div>
            <div className="flex lg:flex-row flex-col items-center">
                <h2 className="lg:w-1/5 w-auto p-8 text-3xl font-bold">Tienda</h2>
                <div className="lg:w-4/5 w-full lg:px-8 md:px-6 px-4 flex lg:flex-row flex-col lg:gap-0 gap-4 items-center justify-center">
                    <label className="lg:w-3/4 w-full input input-bordered flex items-center gap-2">
                        <input type="text" className="grow" value={searchItem} placeholder="Buscar..." onChange={handleInputChange} />
                        <box-icon name='search'></box-icon>
                    </label>
                    <div className="dropdown lg:w-1/4 w-full">
                        <div tabIndex={0} role="button" className="btn w-full m-1">
                            Ordenar por
                            <box-icon name='chevron-down'></box-icon>
                        </div>
                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                            <li>Precio más bajo</li>
                            <li>Precio más alto</li>
                            <li>Por nombre (A-Z)</li>
                            <li>Por nombre (Z-A)</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="p-8 min-h-[80vh] flex lg:flex-row flex-col">
                <Filters setFilters={setFilters} />
                <Items products={fiProd} />
            </div>
        </section>
    )
}

export default Shop