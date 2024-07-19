import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Spinner from '../components/Spinner';
const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
const url=`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`

const useGif = (tag) => {

    const [gif,setgif]=useState('');
    const [loading,setloading]=useState(false);
    
    async function fetchdata(){
        setloading(true);
        const req= tag?`${url}&tag=${tag}`:url;
       let {data}= await axios.get(req);
       let imgsoure= data.data.images.downsized_large.url;
       setloading(false);
       setgif(imgsoure);
    }

    useEffect(()=>{
        fetchdata();
    },[])

    return {loading,fetchdata,gif};
}

export default useGif