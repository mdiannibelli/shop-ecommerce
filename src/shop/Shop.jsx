import React, { useState } from 'react'
import PageHeader from '../components/PageHeader'

/* import products */
import Data from '../products.json';
import ProductCard from './ProductCard';
import Pagination from './Pagination';
import Search from './Search';
import ShopCategory from './ShopCategory';
import PopularPost from './PopularPost';
import OurPopularTags from './OurPopularTags';

export default function Shop() {
    const [GridList, setGridList] = useState(true);
    const [products, setProducts] = useState(Data);
    /* console.log(products); */

    /* pagination */
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 12;
    
    const indexOfLastProduct = currentPage * productsPerPage; /* define last page */
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage; /* define first page */
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

    /* function to change the current page */
    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber)
    };

    /* filter products based on category */
    const [selectedCategory, setSelectedCategory] = useState("All");
    const menuItems = [...new Set(Data.map((Val) => Val.category))];

    const filterItem = (curcat) => {
        const newItem = Data.filter((newValue) => {
            return newValue.category === curcat
        })

        setSelectedCategory(curcat);
        setProducts(newItem);
    }
  return (
    <div>
        <PageHeader title='Shop Page' currentpage='Shop'/>
        {/* shop page */}
        <div className='shop-page padding-tb'>
            <div className="container">
                <div className="row">
                    <div className="row justify-content-center">
                        {/* left side */}
                        <div className="col-lg-8 col-12">
                            {/* layout and title here */}
                            <article>
                                <div className='shop-title d-flex flex-warp justify-content-between'>
                                    <p>Showing 01 - 12 of 139 Results</p>
                                    <div className={`product-view-mode ${GridList ? "gridActive" : "listActive"}`}>
                                        <a className='grid' onClick={() => setGridList(!GridList)}>
                                            <i className='icofont-ghost'></i>
                                        </a>
                                        <a className='list' onClick={() => setGridList(!GridList)}>
                                            <i className='icofont-listine-dots'></i>
                                        </a>

                                    </div>
                                </div>
                                
                                    {/* products card */}
                                    <div>
                                        <ProductCard GridList={GridList} products={/* products before done the pagination */currentProducts}/>
                                    </div>

                                    {/* pagination */}
                                    <Pagination productsPerPage={productsPerPage} 
                                    totalProducts={products.length} 
                                    paginate={paginate}
                                    activePage = {currentPage}>
                                    
                                    </Pagination>
                            </article>
                        </div>
                        {/* right side */}
                        <div className="col-lg-4 col-12">
                            <aside>
                                <Search products={products} GridList={GridList}/>
                                <ShopCategory 
                                filterItem={filterItem}
                                setItem = {setProducts}
                                menuItems = {menuItems}
                                setProducts = {setProducts}
                                selectedCategory = {selectedCategory}
                                />
                                <PopularPost/>
                                <OurPopularTags/>
                            </aside>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
