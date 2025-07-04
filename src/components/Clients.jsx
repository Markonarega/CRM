import React,{useState} from 'react'

const Clients = ({clients,addClient}) => {
  
    const [isModalOpen,setIsModalOpen]=useState(false)
    const[newClient,setNewClient]=useState({name:'',email:'',phone:''})

    const handleInputChange=(e)=>{
      const{name,value}= e.target
      setNewClient({...newClient,[name]:value})
    }

    const handleSubmit=(e) =>{
      e.preventDefault()
      addClient(newClient)
      setNewClient({name:'',email:"",phone:''})
      setIsModalOpen(false)
    }
  
  
  return (
    <div>
      <div className='flex justify-between items-center mb-6'>
        <h1 className='text-2xl font-bold text-gray-800'>
Clients
        </h1>
        <button onClick={()=>setIsModalOpen(true)}
          className='bg-blue-950  hover: shadow-black text-white px-4 py-2 rounded-lg 
          flex items-center '>
          +ADD Client
        </button>
      </div>

      {/* client lists sample */}
      <div className='bg-white rounded-xl shadow overflow-hidden'>
        <table className='min-w-full divide-y divide-gray-200'>
          <thead className='bg-gray-50'>
<tr>
  <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
Name
  </th>
   <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
Email
  </th>
   <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
Phone
  </th>
   <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
Actions
  </th>
</tr>
          </thead>
          <tbody className='bg-white divide-y divide-gray-200'>
{clients.map(client => (
  <tr key={client.id} >
    <td className='px-6 py-4 whitespace-nowrap'>
<div className='flex items-center'>
  <div className='flex-shrink-0 h-10 w-10 bg-blue-950 rounded-full flex items-center justify-center text-white'>
{client.name.charAt(0)}
  </div>
  <div className='ml-4'>
    <div className='text-sm font-medium text-gray-900'>
{client.name}
    </div>
  </div>
</div>
    </td>
    <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
{client.email}
    </td>
     <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
{client.phone}
    </td>
    <td className='px-6 py-4 whitespace-nowrap text-sm font-medium '>
      <button className='text-blue-600 hover:text-blue-950'>Edit</button>
      <hr  className='text-gray-400'/>
      <button className='text-red-600 hover:text-red-900'>Delete</button>
    </td>
  </tr>
))}
          </tbody>
        </table>
      </div>
      {/* Adding Client modal */}
      
      <div className='bg-white rounded-lg w-full max-w-md'>
        <div className='border-b p-4 flex justify-between items-center'>
          <h3 className='text- font-semibold'> Add new Client </h3>
            <button onClick={()=>setIsModalOpen(false)} className='text-gray-500'>X</button>
        
        </div>

        <form onSubmit={handleSubmit} className='p-4'>
          <div className='mb-4'>
<label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='name'>
  name
</label>
<input type="text"
id='name'
name='name'
value={newClient.name}
onChange={handleInputChange}
className='shadow appearance-none border rounded w-full py-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
required
/>
          </div>
             <div className='mb-4'>
<label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='email'>
  Email
</label>
<input type="text"
id='email'
name='email'
value={newClient.email}
onChange={handleInputChange}
className='shadow appearance-none border rounded w-full py-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'

/>
          </div>
             <div className='mb-4'>
<label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='name'>
 Phone
</label>
<input type="tel"
id='phone'
name='phone'
value={newClient.phone}
onChange={handleInputChange}
className='shadow appearance-none border rounded w-full py-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'

/>
          </div>
          <div className='flex justify-end'>
            <button type='button'
            onClick={()=>setIsModalOpen(false)} 
            className='mr-3 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded'
            >
              Cancel
            </button>
            <button type='submit'
            className='bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
              Save Client
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Clients