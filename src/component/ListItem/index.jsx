import React from 'react'

const ListItem = (props) => {
    const {eachItem}=props
    const {id,thumbnailUrl,title,url}=eachItem
  return (
    <li id={id} className='h-[330px] w-[380px] border-2 rounded border-white flex flex-col justify-center items-center  m-[12px] p-[2px]'>
        <div className='h-[275px] w-[350px] border-2 border-yellow-300'>
        <img className='h-[100%] w-[100%]' src={url} alt={title}  />

        </div>
        <p className=' overflow-hidden w-[100%] my-[10px] text-sm text-center text-white font-semibold'>{title.slice(0,50)}</p>

    </li>
  )
}

export default ListItem