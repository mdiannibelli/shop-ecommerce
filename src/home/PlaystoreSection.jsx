import React from 'react'
import { Link } from 'react-router-dom'

export default function PlaystoreSection() {
  return (
    <div className='app-section padding-tb'>
        <div className='container'>
            <div className='section-header text-center'>
                <Link to="/sign-up" className='lab-btn mb-4'>Sign up for Free</Link>
                <h2 className='title'>Shop Anytime, Anywhere</h2>
                <p>Take courses on your any device with our app & learn all time what you want. Just download & install & start to learn</p>
            </div>
        </div>
        <div className='section-wrapper'>
            <ul className='lab-ul'>
                <li><a href='#'><img src="/src/assets/images/app/01.jpg" alt="" /></a></li>
                <li><a href='#'><img src="/src/assets/images/app/02.jpg" alt="" /></a></li>
            </ul>
        </div>
    </div>
  )
}
