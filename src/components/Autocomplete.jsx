import { useState } from 'react';
import { Link } from 'react-router-dom';
import products from '../utils/products.json'

function Autocomplete() {
    const [searchItem, setSearchItem] = useState('')
    const [filteredItems, setFilteredItems] = useState(products)

    const handleInputChange = (e) => {
        const searchTerm = e.target.value;
        setSearchItem(searchTerm)

        const filteredItems = products.filter((user) =>
            user.tipo.toLowerCase().includes(searchTerm.toLowerCase())
        );

        setFilteredItems(filteredItems);
    }


    return (
        <div className='autocomplete-container' style={{ position: 'relative' }}>
            <li className="form-control">
                <label className="input input-bordered flex items-center gap-2" id='searchBar'>
                    <input type="text" className="grow " placeholder="Search" onChange={handleInputChange} value={searchItem} />
                    <box-icon name='search' />
                </label>
            </li>
            {searchItem.length >= 3 && (
                <div className="autocomplete-results">
                    {filteredItems.length > 0 ? (
                        <ul>
                            {filteredItems.map((result, index) => (
                                <Link to={'/item/' + result.id} key={index}>
                                    <li className='py-2 '>
                                        <span className='flex flex-row hover:bg-base-200 hover:text-primary'>
                                            <div className="avatar">
                                                <div className="w-8 rounded">
                                                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="Tailwind-CSS-Avatar-component" />
                                                </div>
                                            </div>
                                            <div className='flex flex-col'>
                                                <span>{result.tipo}</span>
                                                <span className='text-xs'>${result.valor}</span>
                                            </div>
                                        </span>
                                    </li>
                                </Link>
                            ))}
                        </ul>
                    ) : (
                        <div>No se encontraron resultados</div>
                    )}
                </div>
            )}
        </div>
    );
}

export default Autocomplete;