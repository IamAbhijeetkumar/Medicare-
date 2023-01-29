import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Review = () => {
    const [data,setData] = useState([])

    useEffect(()=>{
        axiosdata()
    },[])

  function axiosdata () { axios.get('https://admin.tomedes.com/api/v1/get-reviews?page=1')
  .then(function (response) {
    console.log(response.data.data,"response");
    setData(response.data.data)
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(function () {
  });}

    return (
        <>
            <div className='heads'>
                <h1>
                    What Our Customers Say
                </h1>
            </div>

            <div className='container5'>
                {data.map((datas)=>(
                     <div className='mcard'>
                     <img src='images\Group 4 Copy.png' alt='.' />
                     <div className='comment-box'>
                         <h5>{datas.Reviews ? datas.Reviews.slice(0,155) : ""}</h5>
                         <div className='patient'>
                             <div className='avtar'>
                                 <img src='images\doctor-woman.png' alt='.'></img>
                             </div>
                             <div className='Name'>
                                 <h3>{datas.Name}</h3>
                                 <h6>Patient</h6>
                             </div>
                         </div>
                     </div>
                 </div>
                ))}
            </div>
        </>
    )
}

export default Review
