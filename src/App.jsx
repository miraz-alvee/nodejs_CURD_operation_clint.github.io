
import './App.css'
import { useLoaderData } from 'react-router-dom'
import CoffeeCard from './components/CoffeeCard'
import { useState } from 'react';

function App() {
  const loadedCoffees = useLoaderData();
  const [coffees,setCoffees] = useState(loadedCoffees);


  return (
    <div className='m-20'>
      <h1 className="mt-20 mb-10 text-center text-3xl font-bold">
        Hot Coffee :{coffees.length}</h1>
      <div className='grid md:grid-cols-2 gap-10'>
        {
          coffees.map(coffee => <CoffeeCard
            key={coffee._id} coffee={coffee} coffees={coffees} setCoffees={setCoffees}></CoffeeCard>)
        }
      </div>
    </div>
  )
}

export default App
