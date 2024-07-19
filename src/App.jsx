import { useState } from 'react'
import Cards from './Component/Cards'
import Form from './Component/Form'

 
function App() {
  const [users, setUsers] = useState([]);

  const handleFormSubmitData = (data) => {
    setUsers([...users, data]);
  }

  const handleRemove = (id) => {
    setUsers(() => users.filter((item, index) => index!=id))
  }


  return (
    <>
     <div className='w-full h-screen bg-slate-300 flex items-center justify-center'>
      <div className='container mx-4'>
      <Cards handleRemove={handleRemove} users={users} />
      <Form handleFormSubmitData={handleFormSubmitData} />
      </div>
     </div>
    </>
  )
}

export default App
