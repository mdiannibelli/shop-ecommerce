import React from 'react';
import { Link } from 'react-router-dom';

const addressList = [
    {
        iconName: 'icofont-google-map',
        text: 'New York, USA.',
    },
    {
        iconName: 'icofont-phone',
        text: '+880 123 456 789',
    },
    {
        iconName: 'icofont-envelope',
        text: 'info@shopcart.com',
    },
]

const socialList = [
    {
        iconName: 'icofont-facebook',
        siteLink: '#',
        className: 'facebook',
    },
    {
        iconName: 'icofont-twitter',
        siteLink: '#',
        className: 'twitter',
    },
    {
        iconName: 'icofont-linkedin',
        siteLink: '#',
        className: 'linkedin',
    },
    {
        iconName: 'icofont-instagram',
        siteLink: '#',
        className: 'instagram',
    },
    {
        iconName: 'icofont-pinterest',
        siteLink: '#',
        className: 'pinterest',
    },
]

const ItemList = [
    {
        text: 'All Products',
        link: '/shop',
    },
    {
        text: 'Shop',
        link: '/shop',
    },
    {
        text: 'Blog',
        link: '/blog',
    },
    {
        text: 'About',
        link: '/about',
    },
    {
        text: 'Policy',
        link: '#',
    },
    {
        text: 'FAQs',
        link: '/about',
    }
]

const quickList = [
    {
        text: 'Summer Sessions',
        link: '#',
    },
    {
        text: 'Events',
        link: '#',
    },
    {
        text: 'Gallery',
        link: '#',
    },
    {
        text: 'Forums',
        link: '#',
    },
    {
        text: 'Privacy Policy',
        link: '#',
    },
    {
        text: 'Terms of Use',
        link: '#',
    },
]

const tweetList = [
    {
        iconName: 'icofont-twitter',
        desc: <p>Aminur islam <a href="#">@ShopCart Greetings!  #HTML_Template</a> Grab your item, 50% Big Sale Offer !!</p>,
    },
    {
        iconName: 'icofont-twitter',
        desc: <p>Somrat islam <a href="#">@ShopCart Hey! #HTML_Template</a> Grab your item, 50% Big Sale Offer !!</p>,
    },
]

const footerbottomList = [
    {
        text: 'Faculty',
        link: '#',
    },
    {
        text: 'Staff',
        link: '#',
    },
    {
        text: 'Students',
        link: '#',
    },
    {
        text: 'Alumni',
        link: '#',
    },
]

export default function Footer() {
  return (
    <footer className='style-2'>
        <div className='footer-top dark-view padding-tb'>
            <div className='container'>
                <div className='row g-4 row-cols-xl-4 row-cols-sm-2 row-cols-1 justify-content-center'>
                    <div className='col'>
                        <div className='footer-item our-adress'>
                            <div className='footer-inner'>
                                <div className='footer-content'>
                                    <div className='title'>
                                        <h4>About ShopCart</h4>
                                    </div>
                                    <div className='content'>
                                        <p>Theme of Eduaid, the number one world-class university in the world. There are students who always study at this university forever.</p>
                                        <ul className='lab-ul office-adress'>
                                            {
                                                addressList.map((val, e) => (
                                                    <li key={e}>
                                                        <i className={val.iconName}>{val.text}</i>
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                        <ul className='lab-ul social-icons'>
                                            {
                                                socialList.map((val, e) => (
                                                    <li key={e}>
                                                        <a href='#' className={val.className} style={{paddingLeft:'10px'}}><i className={val.iconName}></i></a>
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col'>
                        <div className='footer-item our-adress'>
                            <div className='footer-inner'>
                                <div className='footer-content'>
                                    <div className='title'>
                                        <h4>Categories</h4>
                                    </div>
                                    <div className='content'>
                                        <ul className='lab-ul office-adress'>
                                            {
                                                ItemList.map((val, e) => (
                                                    <li key={e}>
                                                        <a href="#">{val.text}</a>
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col'>
                        <div className='footer-item our-adress'>
                            <div className='footer-inner'>
                                <div className='footer-content'>
                                    <div className='title'>
                                        <h4>Quick Links</h4>
                                    </div>
                                    <div className='content'>
                                        <ul className='lab-ul office-adress'>
                                            {
                                                quickList.map((val, e) => (
                                                    <li key={e}>
                                                        <a href="#">{val.text}</a>
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='col'>
                        <div className='footer-item our-adress'>
                            <div className='footer-inner'>
                                <div className='footer-content'>
                                    <div className='title'>
                                        <h4>Recent Tweets</h4>
                                    </div>
                                    <div className='content'>
                                        <ul className='lab-ul office-adress'>
                                            {
                                                tweetList.map((val, e) => (
                                                    <li key={e}>
                                                        <i className={val.iconName}></i>
                                                        {val.desc}
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* footer bottom */}
        <div className='footer-bottom'>
            <div className='container'>
                <div className='section-wrapper'>
                    <p>&copy; 2023 <Link to="/">Shop Cart</Link>Designed by <a href='/' target='_blank'>IANNIBELLI MARCOS</a></p>
                    <div className='footer-bottom-list'>    
                        {
                            footerbottomList.map((val,e) => (
                                <a href='#' key={e}>{val.text}</a>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}
