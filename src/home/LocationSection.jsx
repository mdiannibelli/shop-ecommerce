import React from 'react';
import { Link } from 'react-router-dom';

const clientsList = [
    {
    imgUrl: '/src/assets/images/clients/avater.jpg',
    imgAlt: 'education thumb rajibraj91 rajibraj',
    text: 'Join with Us',
    },
    {
    imgUrl: '/src/assets/images/clients/avater.jpg',
    imgAlt: 'education thumb rajibraj91 rajibraj',
    text: 'Join with Us',
    },
    {
    imgUrl: '/src/assets/images/clients/avater.jpg',
    imgAlt: 'education thumb rajibraj91 rajibraj',
    text: 'Join with Us',
    },
    {
    imgUrl: '/src/assets/images/clients/avater.jpg',
    imgAlt: 'education thumb rajibraj91 rajibraj',
    text: 'Join with Us',
    },
    {
    imgUrl: '/src/assets/images/clients/avater.jpg',
    imgAlt: 'education thumb rajibraj91 rajibraj',
    text: 'Join with Us',
    },
    {
    imgUrl: '/src/assets/images/clients/avater.jpg',
    imgAlt: 'education thumb rajibraj91 rajibraj',
    text: 'Join with Us',
    },
    {
    imgUrl: '/src/assets/images/clients/avater.jpg',
    imgAlt: 'education thumb rajibraj91 rajibraj',
    text: 'Join with Us',
    },
    ]

export default function LocationSection() {
  return (
    <div className='clients-section style-2 padding-tb'>
        <div className='container'>
            <div className='section-header text-center'>
              <h2 className='title'>More Then 60,000 Customers</h2>
              <p>"Buy products on your any device with our app & enjoy your time what you want. Just download & install & start to shopping</p>
            </div>

            {/* main content */}
            <div className='section-wrapper'>
                <div className='clients'>
                    {
                      clientsList.map((val, e) => (
                        <div key={e} className='client-list'>
                          <Link to="/sign-up" className='client-content'>
                            <span>{val.text}</span>
                          </Link>
                          <div className='client-thumb'>
                            <img src={val.img} alt="" />
                          </div>
                        </div>
                      ))
                    }
                </div>
            </div>
        </div>
    </div>
  )
}
