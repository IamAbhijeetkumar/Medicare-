import React from 'react';

const Clinic = () => {
    return (
        <>
            <div className='clinic'>
                <div className='container'>
                    <div className='Tagline'>
                        <h1>Clinic With Innovative</h1>
                        <p className='msg'>We provide the most full medical services, so every person could heave the oppurtunity to receive qualitative medical help.</p>
                        <button className='Learnmore'>Learn More</button>
                    </div>
                </div>
                <div className='container'>
                    <div className='card1'>
                        <div className='Icon'>
                            <img  src='images\doctor-woman.png' alt='doctor'></img>
                        </div>
                        <h3>Qualified Doctors</h3>
                    </div>
                    <div className='card2'>
                        <div className='Icon'>
                            <img src='images\doctor-woman copy.png' alt='doctor'></img>
                        </div>
                        <h3>24 Hours Service</h3>
                    </div>
                    <div className='card3'>
                        <div className='Icon'>
                            <img  src='images\doctor-woman copy 2.png' alt='doctor'></img>
                        </div>
                        <h3>Emergency Care</h3>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Clinic
