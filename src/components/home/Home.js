import React, { useEffect, useState } from 'react';

const Home = () => {
    const [data,setData] = useState({})
    useEffect(()=>{
        fetch(`https://api.tvmaze.com/search/shows?q=all`)
        .then(res=>res.json())
        .then(datam =>{
            setData(datam)
        })
    },[])
    console.log(data);

    
    return (
        <div>
            <h1> this is Home </h1>
            
            
        </div>
    );
};

export default Home;