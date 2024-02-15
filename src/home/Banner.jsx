import React, { useState } from 'react';
/* import product data */
import productData from "../products.json";
import { Link } from 'react-router-dom';
import SelectedCategory from '../components/SelectedCategory';


export default function Banner() {
    const [searchInput, setSearchInput] = useState("");
    const [filterProducts, setFilterProducts] = useState(productData); /* import all products */
    /* console.log(productData) */

    /* search funtionality */
    const handleSearch = e => {
        // console.log(e.target.value) /* value of typing in search input */
        const searchTerm = e.target.value;
        setSearchInput(searchTerm);

        // filtering products based on search
        const filtered = productData.filter((product) => product.name.toLocaleLowerCase().includes(searchTerm.toLowerCase()));

        setFilterProducts(filtered);
    }
  return (
    <div className='banner-section style-4'>
        <div className='container'>
            <div className='banner-content'>
                <h2>Search your one from <span>thousand</span> of products</h2>
                <form>
                    <SelectedCategory select={"all"}/> {/* all = all value of "all categorys" */}
                    <input type="text" name='search' id='search' placeholder='Search your product' value={searchInput} onChange={handleSearch} />
                    <button type='submit'>
                        <i className='icofont-search'></i>
                    </button>
                </form>
                <p>We have the largest collection of products</p>
                <ul className='lab-ul'>
                    {
                        searchInput && filterProducts.map((product, i) => <li key={i}>
                            <Link to={`/shop/${product.id}`}>{product.name}</Link>
                        </li>)
                    }
                </ul>
            </div>
        </div>
    </div>
  )
}
