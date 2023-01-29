import React from 'react'

const Home = () => {
  return (
    <>
      <div className='head'>
        <h1>
          Our Services
        </h1>
      </div>
      <div className='main-window'>
        <h4>We provide the most full medical services, so every person could heave the oppurtunity to receive qualitative medical help.</h4>
        <div className='Element'>
          <div className='card'>
            <div className='Icon'>
              <a href='/'><i class="fa-solid fa-tooth"></i></a>
            </div>
            <h3>Dental Care</h3>
            <button className='active btn' id='Read' event='onhover'>Learn More<i class="fa-solid fa-angle-right"></i></button>
          </div>
          <div className='card'>
            <div className='Icon'>
              <a href='/'><i class="fa-solid fa-lungs"></i></a>
            </div>
            <h3>Pulmonary</h3>
            <button className='active btn' id='Read' event='onhover'>Learn More<i class="fa-solid fa-angle-right"></i></button>
          </div>
          <div className='card'>
            <div className='Icon'>
              <a href='/'><i class="fa-solid fa-brain"></i></a>
            </div>
            <h3>Neurological</h3>
            <button className='active btn' id='Read' event='onhover'>Learn More<i class="fa-solid fa-angle-right"></i></button>
          </div>
          <div className='card'>
            <div className='Icon'>
              <a href='/'><i class="fa-solid fa-clipboard"></i></a>
            </div>            <h3>Prediatrics</h3>
            <button className='active btn' id='Read' event='onhover'>Learn More<i class="fa-solid fa-angle-right"></i></button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
