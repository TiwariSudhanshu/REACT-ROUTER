import React, { useEffect, useState } from 'react';

function Github(){
    const [data, setData] = useState([])
    useEffect(()=>{
        fetch("https://api.github.com/users/sudhanshu9836")
        .then(response=> response.json())
        .then(data =>{
            console.log(data);
            setData(data);
        })
    },[])
    return(
        <>
        <div className='text-center m-4 bg-gray-600 text-white
        p-4 text-3xl'>Github followers : {data.followers}
                <img src={data.avatar_url} alt="Git-Picture" with={300} className='mt-10 mx-auto' />
    </div>
        </>
    )
}
export default Github;