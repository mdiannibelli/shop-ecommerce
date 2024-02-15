import React from 'react';
import { Link } from 'react-router-dom';

const categoryList = [
{
imgUrl: 'src/assets/images/category/01.jpg',
imgAlt: 'category rajibraj91 rajibraj',
iconName: 'icofont-brand-windows',
title: 'DSLR Camera',
},
{
imgUrl: 'src/assets/images/category/02.jpg',
imgAlt: 'category rajibraj91 rajibraj',
iconName: 'icofont-brand-windows',
title: 'Shoes',
},
{
imgUrl: 'src/assets/images/category/03.jpg',
imgAlt: 'category rajibraj91 rajibraj',
iconName: 'icofont-brand-windows',
title: 'Photography',
},
{
imgUrl: 'src/assets/images/category/04.jpg',
imgAlt: 'category rajibraj91 rajibraj',
iconName: 'icofont-brand-windows',
title: 'Formal Dress',
},
{
imgUrl: 'src/assets/images/category/05.jpg',
imgAlt: 'category rajibraj91 rajibraj',
iconName: 'icofont-brand-windows',
title: 'Colorful Bags',
},
{
imgUrl: 'src/assets/images/category/06.jpg',
imgAlt: 'category rajibraj91 rajibraj',
iconName: 'icofont-brand-windows',
title: 'Home Decor',
},
]

export default function HomeCategory() {
  return (
    <div className='category-section style-4 padding-tb'>
        <div className='container'>
            {/* section header */}
            <div className='section-header text-center'>
                <span className='subtitle'>Choose Any Products</span>
                <h2 className='title'>Buy Everything With Us</h2>
            </div>  

            {/* section card */}
            <div className='section-wrapper'>
                <div className='row g-4 justify-content-center row-cols-md-3 row-cols-sm-2 row-cols-1'>
                    {
                        categoryList.map((product, i) => <div key={i} className='col'>
                            <Link to='/shop' className='category-item'>
                                <div>
                                    <div className='category-inner'>
                                        {/* image thumbnail */}
                                        <div className='category-thumb'>
                                            <img src={product.imgUrl} alt=''></img>
                                        </div>

                                        {/* content */}
                                        <div className='category-content'>
                                            <div className='cate-icon'>
                                                <i className={product.iconName}></i>
                                            </div>
                                            <h6>{product.title}</h6>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>)
                    }
                </div>
                <div className='text-center mt-5'>
                    <Link to='/shop' className='lab-btn'><span>Get Started Now</span></Link>
                </div>
            </div>
        </div>
    </div>
  )
}
