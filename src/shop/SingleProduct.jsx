import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import PopularPost from '../shop/PopularPost';
import OurPopularTags from '../shop/OurPopularTags';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import {Autoplay} from "swiper/modules";
import ProductDisplay from './ProductDisplay';
import Review from './Review';
/* import asd from '/src/products.json' */ 

export default function SingleProduct() {
    const [product, setProduct] = useState([]);
    const {id} = useParams();
    /* console.log(id); */
    useEffect(() => {
        fetch('../../products.json')
        .then(res => {
            if(!res.ok) {
                throw new Error('Network response was not ok')
            }
            return res.json();
        })
        .then(data => setProduct(data)) /* return all products */
        .catch(error => {
            console.log('Fetch error',error)
        }) 
    }, [])

    /* console.log(product); */
    
    /* filter all products for ID */
    const results = product.filter((p) => p.id === id);
    /* console.log(results) */
  return (
    <div>
        <PageHeader title={"Our Shop Single"} currentpage={"Shop / Single Product"}/>
        <div className='shop-single padding-tb aside-bg'>
            <div className='container'>
                <div className="row justify-content-center">
                    {/* left side */}
                    <div className='col-lg-8 col-12'>
                        <article>
                            <div className='product-details'>
                                <div className='row align-items-center'>
                                    {/* img */}
                                    <div className='col-md-6 col-12'>
                                        <div className='product-thumb'>
                                            <div className='swiper-container pro-single-ti'>
                                            <Swiper 
                                            spaceBetween={30}
                                            slidesPerView={1}
                                            
                                            autoplay={{
                                                delay: 2000,
                                                disableOnInteraction: false
                                            }}
                                            modules={[Autoplay]}
                                            navigation={
                                                {
                                                    prevEl: ".pro-single-prev", 
                                                    nextEl: ".pro-single-next", 
                                                }
                                            }
                                            
                                            className="mySwiper">
                                               {
                                                results.map((item) => (
                                                    <SwiperSlide key={item.id}>
                                                        <div className='single-thumb'>
                                                        <img src={item.img} alt={item.name} />
                                                        </div>
                                                    </SwiperSlide>
                                                ))
                                               }
                                            </Swiper>
                                            <div className='pro-single-prev'>
                                                <i className='icofont-rounded-right'>
                                                </i>
                                            </div>
                                            <div className='pro-single-next'>
                                                <i className='icofont-rounded-left'>
                                                </i>
                                            </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    {/* details */}
                                    <div className='col-md-6 col-12'>
                                        <div className='post-content'>
                                            <div>
                                               {
                                                results.map(item => <ProductDisplay key={item.id} item={item}></ProductDisplay>)
                                               }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* reviews */}
                            <div className='review'>
                                <Review/>
                            </div>
                        </article>

                    </div>
                        
                    {/* right side */}
                    <div className='col-lg-4 col-12'>
                        <aside className='ps-lg-4'>
                            <PopularPost/>
                            <OurPopularTags/>
                        </aside>
                    </div>
                </div>
            </div>
        </div>
    </div>

  )
}
