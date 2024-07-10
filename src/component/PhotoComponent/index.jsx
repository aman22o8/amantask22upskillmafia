import React from 'react'
import useFetchHook from '../useFetchHook'
import ListItem from '../ListItem'


const PhotoComponent = () => {
    const fetchedContent=useFetchHook("https://jsonplaceholder.typicode.com/photos")
    console.log(fetchedContent)
    const { data, loading, error }=fetchedContent
    // console.log(loading)
    console.log(data)
    const newData=data.slice(0, 100);
    if (loading) return <div className='h-screen flex justify-center items-center'>
        <p className='text-xl text-white font-semibold'>Loading...</p>
    </div>;
    if (error) return <div className='h-screen flex justify-center items-center'>
        <p className=' text-xl text-red-600 font-semibold'>
        Error: {error.message}

        </p>
        </div>;

  return (
    <div className='min-h-screen flex flex-col items-center  w-full'>
        <h1 className='text-2xl  text-white font-bold'>Photos</h1>

        <ul className='w-full list-none m-[0px] p-[0px] justify-center flex flex-wrap'>
        {
            newData.map((each)=>{
                return <ListItem key={each.id} eachItem={each}/>
            })
        }
        </ul>
    </div>
  )
}

export default PhotoComponent