import React, { useState } from 'react';
import Ratting from '../components/Ratting';
let ReviewList = [ { imgUrl: "/images/instructor/01.jpg", imgAlt: "Client thumb", name: "Ganelon Boileau", date: "Posted on Jun 10, 2022 at 6:57 am", desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.", }, { imgUrl: "/images/instructor/02.jpg", imgAlt: "Client thumb", name: "Morgana Cailot", date: "Posted on Jun 10, 2022 at 6:57 am", desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.", }, { imgUrl: "/images/instructor/03.jpg", imgAlt: "Client thumb", name: "Telford Bois", date: "Posted on Jun 10, 2022 at 6:57 am", desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.", }, { imgUrl: "/images/instructor/04.jpg", imgAlt: "Client thumb", name: "Cher Daviau", date: "Posted on Jun 10, 2022 at 6:57 am", desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.", }, ];
export default function Review() {
    const [reviewShow, setReviewShow] = useState(true);
  return (
    <>
    <ul className={`review-nav lab-ul ${reviewShow ? "RevActive" : "DescActive"}`}>
        <li className='desc' onClick={() => setReviewShow(!reviewShow)}>Description</li>
        <li className='rev' onClick={() => setReviewShow(!reviewShow)}>Reviews</li>
    </ul>

    {/* desc & review content */}
    <div className={`review-content ${reviewShow ? "review-content-show" : "description-show"}`}>
        <div className='review-showing'>
            <ul className='content lab-ul'>
                {
                    ReviewList.map((review,i) => (
                        <li key={i}>
                            <div className='post-thumb'>
                                <img src={review.imgUrl} alt="" />
                            </div>
                            <div className='post-content'>
                                <div className='entry-meta'>
                                    <div className='posted-on'>
                                        <a href="#">{review.name}</a>
                                        <p>{review.date}</p>
                                    </div>
                                </div>
                                <div className='entry-content'>
                                    <p>{review.desc}</p>
                                </div>
                            </div>
                        </li>
                    ))
                }
            </ul>

                {/* add review field */}
                <div className='client-review'>
                    <div className='review-form'>
                        <div className='review-title'>
                            <h5>Add a Review</h5>
                        </div>

                        <form action="action" className='row'>
                            <div className='col-md-4 col-12'>
                                <input type="text" name="name" id="name" placeholder='Full Name *' />
                            </div>
                            <div className='col-md-4 col-12'>
                                <input type="email" name="email" id="email" placeholder='Email *' />
                            </div>
                            <div className='col-md-4 col-12'>
                                <div className='rating'>
                                    <span className='me-2'>Your Rating</span>
                                    <Ratting/>
                                </div>
                            </div>
                                <div className='col-md-12 col-12'>
                                    <textarea name="message" id="message" rows="8" placeholder='Type here your message'></textarea>
                                </div>
                                <div className='col-12'>
                                    <button className='default-button' type='submit'>
                                        <span>Submit</span>
                                    </button>
                                </div>
                        </form>
                    </div>
                </div>
        </div>

        {/* description */}
        <div className='description'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, quas possimus. Repellat recusandae dolor explicabo amet ad veritatis reprehenderit maiores ullam magnam labore, eos possimus doloribus minus eligendi quas odit blanditiis nobis dolorum nemo, nesciunt cum eveniet? Pariatur quae quisquam tenetur, perspiciatis vitae dignissimos totam cum adipisci harum accusantium qui?</p>

            <div className='post-item'>
                <div className='post-thumb'>
                    <img src="/images/shop/01.jpg" alt="" />
                </div>
                <div className='post-content'>
                    <ul className='lab-ul'>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, repellendus?</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, repellendus?</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, repellendus?</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, repellendus?</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, repellendus?</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, repellendus?</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, repellendus?</li>
                    </ul>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, quas possimus. Repellat recusandae dolor explicabo amet ad veritatis reprehenderit maiores ullam magnam labore, eos possimus doloribus minus eligendi quas odit blanditiis nobis dolorum nemo, nesciunt cum eveniet? Pariatur quae quisquam tenetur, perspiciatis vitae dignissimos totam cum adipisci harum accusantium qui?</p>
            </div>
        </div>
    </div>
    </>
  )
}
