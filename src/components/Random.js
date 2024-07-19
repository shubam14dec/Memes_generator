import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Spinner from '../components/Spinner';
import useGif from '../hooks/useGif';
const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const Random = () => {

    const {loading,fetchdata,gif}=useGif();

    function clickhandler(){
        fetchdata();
    }

  return (
    <div className='w-1/2 bg-green-500 flex flex-col items-center rounded-md gap-5 pb-5'>
        <h1 className='font-bold text-2xl underline'>Random GIF</h1>
        {loading?(<Spinner/>):<img src={gif} className='w-10/12' loading='lazy' alt='gif'/>}
        <button onClick={clickhandler}
        className="bg-neutral-300 w-10/12 rounded-lg text-lg py-1">
            Generate
        </button>
    </div>
  )
}

export default Random