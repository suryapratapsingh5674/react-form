import { data } from 'autoprefixer'
import React from 'react'
import { useForm } from 'react-hook-form'

function Form({handleFormSubmitData}) {
  const {register, handleSubmit, reset} = useForm()
  const handleFormSubmit = (data) => {
    handleFormSubmitData(data);
    reset();
  }
  return (
    <div className='mt-10 flex justify-center'>
      <form className='flex gap-10' onSubmit={handleSubmit(handleFormSubmit)}>
        <input {...register('name')} className='rounded-md px-2 py-1 text-base font-semibold outline-none' type="text" autocomplete="off" placeholder='name' />
        <input {...register('email')} className='rounded-md px-2 py-1 text-base font-semibold outline-none' type="email" autocomplete="off" placeholder='email' />
        <input {...register('image')} className='rounded-md px-2 py-1 text-base font-semibold outline-none' type="text" />
        <input className='px-5 py-1 rounded-md bg-blue-500 text-white font-semibold' type="submit" />
      </form>
    </div>
  )
}

export default Form