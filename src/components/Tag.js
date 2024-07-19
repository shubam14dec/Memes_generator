import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Spinner from './Spinner';
import useGif from '../hooks/useGif';
const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const Tag = () => {

    const [tag,settag]=useState('car');

    const {loading,fetchdata,gif}=useGif(tag);

    function clickhandler(){
        fetchdata();
    }
    function changehandler(event){
        settag(event.target.value);
    }

  return (
    <div className='w-1/2 bg-violet-600 flex flex-col items-center rounded-md gap-5 pb-5'>
        <h1 className='font-bold text-2xl underline'>Search for GIF</h1>

        {loading?(<Spinner/>):<img src={gif} className='w-10/12' loading='lazy' alt='gif'/>}

        <input
        className='w-10/12 text-lg py-1 rounded-lg text-center'
        placeholder='Search for GIF'
        onChange={changehandler}
        value={tag}
        />
        <button onClick={clickhandler}
        className="bg-neutral-300 w-10/12 rounded-lg text-lg py-1">
            Generate
        </button>
    </div>
  )
}

export default Tag