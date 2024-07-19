import React from 'react'
import Card from './Card'

function Cards({users, handleRemove}) {
  return (
    <div className='w-full max-h-96 bg-slate-300 flex flex-wrap overflow-auto gap-10 justify-center rounded p-4 absolute top-10'>
      {users.map((item, index) => {
        return <Card handleRemove={handleRemove} user={item} id={index} key={index}/>
      })}
    </div>
  )
}

export default Cards