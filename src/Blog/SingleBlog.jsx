import React, { useState } from 'react'
import blogList from "../utilis/blogdata"
import { useParams } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import OurPopularTags from '../shop/OurPopularTags'
import PopularPost from '../shop/PopularPost'
export default function SingleBlog() {
    const [blog, setBlog] = useState(blogList);
    const {id} = useParams();
    
    const result = blog.filter((e) => e.id === Number(id));
    console.log(result[0]);
    
    //social medias icon
    const socialList = [ { link: "#", iconName: "icofont-facebook", className: "facebook", }, { link: "#", iconName: "icofont-twitter", className: "twitter", }, { link: "#", iconName: "icofont-linkedin", className: "linkedin", }, { link: "#", iconName: "icofont-instagram", className: "instagram", }, { link: "#", iconName: "icofont-pinterest", className: "pinterest", }, ];
  return (
    <div>
        <PageHeader  title='Single Blog Pages' currentpage='Blog / Blog Details'/>

        <div className='blog-section blog-single padding-tb section-bg'>
            <div className="container">
                <div className="row justify-content-center">
                    <div className='col-lg-8 col-12'>
                        <article>
                            <div className='section-wrapper'>
                                <div className="row row-cols-1 justify-content-center g-4">
                                    <div className='col'>
                                        <div className='post-item style-2'>
                                            <div className="post-inner">
                                                {
                                                    result.map((item) => (
                                                        <div key={item.id}>
                                                            <div className='post-thumb'>
                                                                <img src={item.imgUrl} alt="" className='w-100'/>
                                                            </div>
                                                            <div className='post-content'>
                                                                <h3>{item.title}</h3>
                                                                <div className='meta-post'>
                                                                    <ul className='lab-ul'>
                                                                        {item.metaList.map((val,i) => (
                                                                            <li key={i}>
                                                                            <i className={val.iconName}></i>{" "}
                                                                                {val.text}
                                                                            </li>
                                                                        ))}
                                                                    </ul>
                                                                </div>
                                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa cupiditate pariatur quam necessitatibus saepe deserunt. Commodi distinctio quo sequi, in repudiandae officiis aut mollitia voluptatibus atque! Architecto voluptas corporis dolorem facere at laboriosam voluptatum, magnam ut eos obcaecati explicabo praesentium nam molestiae dolore maxime soluta animi consequatur hic quam. Ab unde similique earum natus facilis fuga quisquam nesciunt. Earum dicta suscipit molestias fugiat fuga tempore aut laboriosam dignissimos praesentium odit, nostrum libero reprehenderit repellendus doloribus delectus blanditiis voluptatibus porro natus veniam, vero ex placeat. Magni suscipit nam illo enim totam eveniet sapiente accusantium itaque, optio blanditiis numquam et quo sequi.</p>
                                                                <blockquote>
                                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam beatae fuga porro dignissimos? Facilis nulla autem asperiores earum sunt amet quo inventore recusandae vel ut quaerat eligendi ullam, temporibus nisi?</p>
                                                                    <cite>
                                                                        <a href="#">...Melissa Hunter</a>
                                                                    </cite>
                                                                </blockquote>
                                                                <p>
                                                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis officia minus vel repudiandae nobis laborum amet repellat quod porro voluptatum illum sint eligendi rem asperiores iusto velit nemo maiores, exercitationem facilis illo distinctio. Eum obcaecati harum labore officia eius quia?
                                                                </p>
                                                                <img src="/images/blog/single/01.jpg" alt="" />
                                                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque qui at voluptate fugit tenetur? Aspernatur minus veritatis et molestiae odit nam voluptate ut voluptatem nesciunt, repellat distinctio, voluptates id iusto alias expedita repudiandae fuga mollitia atque itaque, perspiciatis quisquam molestias. Facere placeat non recusandae iusto quibusdam soluta atque, in quaerat velit, quam, excepturi quos! Cumque, fuga iure? Saepe, fugiat nostrum?</p>
                                                                <div className='video-thumb'>
                                                                    <img src="/images/blog/single/02.jpg" alt="" />
                                                                    <a href="https://www.youtube.com" className='video-button popup' target='_blank'>
                                                                        <i className='icofont-ui-play'></i>
                                                                    </a>
                                                                </div>
                                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, fuga laborum illo aspernatur sunt suscipit cumque saepe deserunt eligendi quas aliquam sequi iste dignissimos dolore incidunt placeat maxime? Optio rerum natus architecto distinctio, fugiat consequatur!</p>
                                                                <div className='tags-section'>
                                                                    <ul className='tags lab-ul'>
                                                                        <li>
                                                                            <a href="#">Agency</a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="#">Business</a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="#">Personal</a>
                                                                        </li>
                                                                    </ul>
                                                                    <ul className='lab-ul social-icons'>
                                                                        {
                                                                            socialList.map((val,i) => (
                                                                                <li key={i}>
                                                                                    <a href={val.link} className= {val.className}>
                                                                                        <li className={val.iconName}></li>
                                                                                    </a>
                                                                                </li>
                                                                            ))
                                                                        }
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ))
                                                }
                                            </div>
                                        </div>
                                    </div>
                                    <div className='navigations-part'>
                                        <div className='left'>
                                            <a href="#" className='prev'>
                                                <i className='icofont-double-left'></i> Previeous Blog
                                            </a>
                                            <a href="" className='title'>
                                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet, ipsam.
                                            </a>
                                        </div>
                                        <div className='right'>
                                            <a href="#" className='next'>
                                                <i className='icofont-double-left'></i> Next Blog
                                            </a>
                                            <a href="" className='title'>
                                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet, ipsam.
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </div>
                    <div className='col-lg-4 col-12'>
                        <aside>
                            <OurPopularTags></OurPopularTags>
                            <PopularPost></PopularPost>
                        </aside>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
