import React, {useState, useEffect} from 'react'
import axios from 'axios'

export default function Main() {
  
    const [data, setData] = useState ([]);
    const [edit, setedit] = useState (null);

    const getData = () => {
        axios.get('http://localhost:3001/trello')
        .then(hasil => {
            setData(hasil.data)
            setData(hasil.data)
            console.log(hasil.data)
        })

    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const value = e.target.list.value
        axios.post('http://localhost:3001/trello', { name: value })
          .then(() => {
            console.log('post')
            getData()
          })
    
        e.target.list.value = ''
    }
    const handleDelete = (id) => {
        axios.delete(`http://localhost:3001/trello/${id}`).then(() => {
          console.log('delete')
          getData()
        })
    }
    const handleEdit = (e) => {
        e.preventDefault()
        console.log('index edit', edit, data[edit].id)
        axios.patch(`http://localhost:3001/trello/${data[edit].id}`, { name: e.target.listedit.value })
          .then(() => { 
            getData() 
            setedit(null)
          })
      }


    useEffect (() => {
        getData()
    }, [])
  return (
    <div>
        <div className='rounded overflow-hidden shadow-lg flex'>
            <div className='px-6 py-4 bg-blue-300 m-8 border-rounded'>
                <h1>Trello</h1>
                <div>
                    <form onSubmit={handleSubmit}>
                        <input type='text' name='list' ></input>
                        <button type='submit' className=' inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out'>Save</button>
                    </form>
                </div>
                <div>
                    {data.map((trel, i) => {
                        return <li key={i} name='list1'>
                        {edit === i ? 
                            <form className='gap-4' onSubmit={(e) => handleEdit(e)}>
                                <input className='py-2.5' name ='listedit'></input>
                                <button type='submit' className='inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out'>Save</button>
                            </form>
                            : trel.name
                        }
                        <div className='col row gap-4'>
                            <button className='inline-block px-6 py-2.5 bg-green-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out' onClick = {() => setedit(i)}>Edit</button>
                            <button className='inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out' onClick = {() => handleDelete(trel.id)}>Delete</button>
                        </div>
                        </li>
                    })}
                </div>
            </div>
            <div className='px-6 py-4 bg-blue-300 m-8 border-rounded'>
                <h1>Trello</h1>
                <div>
                    <form onSubmit={handleSubmit}>
                        <input type='text' name='list' ></input>
                        <button type='submit' className=' inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out'>Save</button>
                    </form>
                </div>
                <div>
                    {data.map((trel, i) => {
                        return <li key={i} name='list1'>
                        {edit === i ? 
                            <form className='gap-4' onSubmit={(e) => handleEdit(e)}>
                                <input className='py-2.5' name ='listedit'></input>
                                <button type='submit' className='inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out'>Save</button>
                            </form>
                            : trel.name
                        }
                        <div className='col row gap-4'>
                            <button className='inline-block px-6 py-2.5 bg-green-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out' onClick = {() => setedit(i)}>Edit</button>
                            <button className='inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out' onClick = {() => handleDelete(trel.id)}>Delete</button>
                        </div>
                        </li>
                    })}
                </div>
            </div>
            <div className='px-6 py-4 bg-blue-300 m-8 border-rounded'>
                <h1>Trello</h1>
                <div>
                    <form onSubmit={handleSubmit}>
                        <input type='text' name='list' ></input>
                        <button type='submit' className=' inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out'>Save</button>
                    </form>
                </div>
                <div>
                    {data.map((trel, i) => {
                        return <li key={i} name='list1'>
                        {edit === i ? 
                            <form className='gap-4' onSubmit={(e) => handleEdit(e)}>
                                <input className='py-2.5' name ='listedit'></input>
                                <button type='submit' className='inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out'>Save</button>
                            </form>
                            : trel.name
                        }
                        <div className='col row gap-4'>
                            <button className='inline-block px-6 py-2.5 bg-green-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out' onClick = {() => setedit(i)}>Edit</button>
                            <button className='inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out' onClick = {() => handleDelete(trel.id)}>Delete</button>
                        </div>
                        </li>
                    })}
                </div>
            </div>
        </div>
        
        {/* <div>
            <div class="container flex mx-auto w-full items-center justify-center">
 
                <ul class="flex flex-col bg-gray-300 p-4">
                    <li class="border-gray-400 flex flex-row mb-2">
                        <div class="select-none cursor-pointer bg-gray-200 rounded-md flex flex-1 items-center p-4  transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
                        <div class="flex flex-col rounded-md w-10 h-10 bg-gray-300 justify-center items-center mr-4">💧</div>
                        <div class="flex-1 pl-1 mr-16">
                            <div class="font-medium">Cup of water</div>
                            <div class="text-gray-600 text-sm">200ml</div>
                        </div>
                        <div class="text-gray-600 text-xs">6:00 AM</div>
                        </div>
                    </li>
                        <li class="border-gray-400 flex flex-row mb-2">
                        <div class="select-none cursor-pointer bg-gray-200 rounded-md flex flex-1 items-center p-4  transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
                        <div class="flex flex-col rounded-md w-10 h-10 bg-gray-300 justify-center items-center mr-4">⚽️</div>
                        <div class="flex-1 pl-1 mr-16">
                            <div class="font-medium">Training</div>
                            <div class="text-gray-600 text-sm">1h</div>
                        </div>
                        <div class="text-gray-600 text-xs">10:00 AM</div>
                        </div>
                    </li>
                        <li class="border-gray-400 flex flex-row mb-2">
                        <div class="select-none cursor-pointer bg-gray-200 rounded-md flex flex-1 items-center p-4  transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
                        <div class="flex flex-col rounded-md w-10 h-10 bg-gray-300 justify-center items-center mr-4">📖</div>
                        <div class="flex-1 pl-1 mr-16">
                            <div class="font-medium">Study</div>
                            <div class="text-gray-600 text-sm">4h</div>
                        </div>
                        <div class="text-gray-600 text-xs">1:00 PM</div>
                        </div>
                    </li>
                </ul>
            
            </div>
        </div> */}
    </div>
  )
}
