import React from 'react'

const Footer = () => {
  return (
    <>
      <div className='Oval2'></div>
      <div className='container6'>
        <div className='cardx'>
          <div className='head3'>
            <h1>
              Subscribe to Newsletter
            </h1>
            <h4>We have a wide experience in experience design and strategy,</h4>
          </div>
          <div className='Slider'>
            <input type='text' placeholder='Enter Your Email Address'></input>
            <button className='send'>Send Now</button>
          </div>
        </div>
        <div className='foot'>
          <div className='logo'>
            <h1>Medi<span>Care+</span></h1>
          </div>
          <div className='foot-menu-list'>
            <ul>
              <li><a href='/home'>Home</a></li>
              <li><a href='/about'>About</a></li>
              <li><a href='/service'>Service</a></li>
              <li><a href='/news'>News</a></li>
            </ul>
          </div>
        </div>
        <div className='media'>
          <ul>
            <li><a href='Facbook'><img src='images\Group 26.png' alt='.'/></a></li>
            <li><a href='Google'><img src='images\google (4).png' alt='.'/></a></li>
            <li><a href='Twitter'><img src='images\Group 26 Copy 2.png' alt='.'/></a></li>
          </ul>
          <h6>©2020 PodPayment - 2020</h6>
        </div>
      </div>
    </>
  )
}

export default Footer
