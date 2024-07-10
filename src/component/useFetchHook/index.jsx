import React, { useEffect, useState } from 'react'



const useFetchHook = (url) => {
    
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        const options={
            method:"GET",
            headers: {
                  'Content-Type': 'application/json',
                } 
        }

      
      const getFetchData=async()=>{
        try {
            const response=await fetch(url,options)
            if (!response.ok) {
                throw new Error('Something Went wrong');
              }
            const result=await response.json();
            setData(result)
            
        } catch (error) {
            setError(error);
            
        }finally {
            setLoading(false);
          }
      }
      getFetchData()
    }, [url])
  return { data, loading, error };
  
}

export default useFetchHook
