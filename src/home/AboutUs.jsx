import React from 'react';
import CountUp from 'react-countup';
import { Link } from 'react-router-dom';

const countList = [
    {
    iconName: 'icofont-users-alt-4',
    count: '12600',
    text: 'Marchant Enrolled',
    },
    {
    iconName: 'icofont-graduate-alt',
    count: '30',
    text: 'Certified Courses',
    },
    {
    iconName: 'icofont-notification',
    count: '100',
    text: 'Rewards and GitCards',
    },
    ]

export default function AboutUs() {
  return (
    <div className='instructor-section style-2 padding-tb section-bg-ash'>
            <div className='container'>
                <div className='section-wrapper'>
                    <div className='row justify-content-center align-items-center row-cols-1 row-cols-md-2 row-cols-xl-3'>
                        <div className='col'>
                            {
                                countList.map((val,e) => (
                                    <div key={e} className='count-item'>
                                        <div className='count-inner'>
                                            <div className='count-icon'>
                                                <i className={val.iconName}></i>
                                            </div>
                                            <div className='count-content'>
                                                <h2>
                                                    <span><CountUp end={val.count}/></span>
                                                    <span>+</span>
                                                </h2>
                                                <p>{val.text}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>

                        <div className='col'>
                            <div className='instructor-content'>
                                <p className='subtitle'>Why Choose Us</p>
                                <h2 className='title'>Become a Marchant</h2>
                                <p>Take courses on your any device with our app & learn all about business what you want. Just download & install & start to learn</p>
                                <Link to="/sign-up" className='lab-btn'>Apply Now</Link>
                            </div>
                        </div>

                        <div className='col'>
                            <div className='instructor-thumb'>
                                <img src="/images/instructor/01.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}
