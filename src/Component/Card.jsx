import React from 'react'

function Card({user, handleRemove, id}) {
  return (
    <div className='h-full w-32 rounded-lg bg-zinc-100 p-2 flex flex-col items-center'>
        <div className='w-[5vw] h-[5vw] rounded-full bg-zinc-600 overflow-hidden'>
            <img className='w-full h-full object-cover' src={user.image} />
        </div>
        <h1 className='mt-1 text-xl font-semibold'>{user.name}</h1>
        <h4 className='opacity-60 text-xs font-semibold'>{user.email}</h4>
        <p className='mt-1 text-center text-xs font-semibold leading-1 tracking-tight'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <button onClick={()=>handleRemove(id)} className='px-3 py-1 bg-red-600 text-xs font-semibold text-white mt-4 rounded-lg'>Remove it</button>
    </div>
  )
}

export default Card