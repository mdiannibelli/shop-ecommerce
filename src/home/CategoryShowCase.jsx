import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const ProductData = [
{
imgUrl: '/images/categoryTab/01.jpg',
cate: 'Shoes',
title: 'Nike Premier X',
author: '/images/course/author/01.jpg',
brand: 'Nike',
price: '$199.00',
id: 1,
},
{
imgUrl: '/images/categoryTab/02.jpg',
cate: 'Bags',
title: 'Asthetic Bags',
author: '/images/course/author/02.jpg',
brand: 'D&J Bags',
price: '$199.00',
id: 2,
},
{
imgUrl: '/images/categoryTab/03.jpg',
cate: 'Phones',
title: 'iPhone 12',
author: '/images/categoryTab/brand/apple.png',
brand: 'Apple',
price: '$199.00',
id: 3,
},
{
imgUrl: '/images/categoryTab/04.jpg',
cate: 'Bags',
title: 'Hiking Bag 15 Nh100',
author: '/images/course/author/04.jpg',
brand: 'Gucci',
price: '$199.00',
id: 4,
},
{
imgUrl: '/images/categoryTab/05.jpg',
cate: 'Shoes',
title: 'Outdoor Sports Shoes',
author: '/images/course/author/05.jpg',
brand: 'Nike',
price: '$199.00',
id: 5,
},
{
imgUrl: '/images/categoryTab/06.jpg',
cate: 'Beauty',
title: 'COSRX Snail Mucin',
author: '/images/course/author/06.jpg',
brand: 'Zaara',
price: '$199.00',
id: 6,
},
{
imgUrl: '/images/categoryTab/07.jpg',
cate: 'Bags',
title: 'Look Less Chanel Bag ',
author: '/images/course/author/01.jpg',
brand: 'Gucci',
price: '$199.00',
id: 7,
},
{
imgUrl: '/images/categoryTab/08.jpg',
cate: 'Shoes',
title: 'Casual Sneakers',
author: '/images/course/author/02.jpg',
brand: 'Bata',
price: '$199.00',
id: 8,
},
]

const categoryList = [
{
imgUrl: '/images/category/01.jpg',
imgAlt: 'category rajibraj91 rajibraj',
iconName: 'icofont-brand-windows',
title: 'DSLR Camera',
},
{
imgUrl: '/images/category/02.jpg',
imgAlt: 'category rajibraj91 rajibraj',
iconName: 'icofont-brand-windows',
title: 'Shoes',
},
{
imgUrl: '/images/category/03.jpg',
imgAlt: 'category rajibraj91 rajibraj',
iconName: 'icofont-brand-windows',
title: 'Photography',
},
{
imgUrl: '/images/category/04.jpg',
imgAlt: 'category rajibraj91 rajibraj',
iconName: 'icofont-brand-windows',
title: 'Formal Dress',
},
{
imgUrl: '/images/category/05.jpg',
imgAlt: 'category rajibraj91 rajibraj',
iconName: 'icofont-brand-windows',
title: 'Colorful Bags',
},
{
imgUrl: '/images/category/06.jpg',
imgAlt: 'category rajibraj91 rajibraj',
iconName: 'icofont-brand-windows',
title: 'Home Decor',
},
]

export default function CategoryShowCase() {
    const [items, setItems] = useState(ProductData);
    /* category baded filtered */
    const filterItem = (categItem) => {
        const updateItems = ProductData.filter((e) => {
            return e.cate === categItem
        });

        setItems(updateItems);
    }
  return (
    /* shapes */
    <div className='course-section style-3 padding-tb'>
        <div className='course-shape one'><img src='/imagess/shape-img/icon/01.png' alt=''></img></div>
        <div className='course-shape two'><img src='/images/shape-img/icon/02.png' alt=''></img></div>

        {/* main section */}
        <div className='container'>
            {/* section header */}
            <div className='section-header'>
                <h2 className='title'>Our Products</h2>
                <div className='course-filter-group'>
                    <ul className='lab-ul'>
                        <li onClick={() => setItems(ProductData)}>All</li>
                        <li onClick={() => filterItem("Shoes")}>Shoes</li>
                        <li onClick={() => filterItem("Bags")}>Bags</li>
                        <li onClick={() => filterItem("Phones")}>Phones</li>
                        <li onClick={() => filterItem("Beauty")}>Beauty</li>
                    </ul>

                </div>
            </div>

                {/* section body */}
                <div className='section-wrapper'>
                    <div className='row g-4 justify-content-center row-cols-xl-4 row-cols-lg-3 row-cols-md-2 row-cols-1 course-filter'>
                        {
                            items.map((product) => <div key={product.id}>
                                <div className='course-item style-4'>
                                    <div className='course-inner'>
                                        <div className='course-thubm'>
                                            <img src={product.imgUrl} alt="" />
                                            <div className='course-category'>
                                                <div className='course-cate'>
                                                    <a href="#">{product.cate}</a>
                                                </div>
                                                <div className='course-reiew'>
                                                    <span className='ratting'>
                                                        <i className='icofont-ui-rating'></i>
                                                        <i className='icofont-ui-rating'></i>
                                                        <i className='icofont-ui-rating'></i>
                                                        <i className='icofont-ui-rating'></i>
                                                        <i className='icofont-ui-rating'></i>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* content  */}
                                        <div className='course-content'>
                                            <Link to={`/shop/${product.id}`}><h6>{product.title}</h6></Link>
                                            <div className='course-footer'>
                                                <div className='course-author'>
                                                <Link to="/" className='ca-name'>{product.brand}</Link>
                                                </div>
                                                <div className='course-price'>
                                                    {product.price}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> )
                        }
                    </div>
                </div>
        </div>
    </div>

  )
}
