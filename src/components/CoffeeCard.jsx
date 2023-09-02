import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const CoffeeCard = ({ coffee,coffees,setCoffees }) => {
    const { _id, name, quantity, supplier, taste, category, detailes, photo } = coffee;

    const handleDelete = (id) => {
        console.log(id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/coffee/${id}`, {
                    method: 'DELETE',
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if(data.deletedCount > 0){
                        Swal.fire(
                            'Deleted!',
                            'Your coffee has been deleted.',
                            'success'
                        )
                        const reamining = coffees.filter(coffee => coffee._id !== _id);
                        setCoffees(reamining);
                    }
                })
            }
        })
    }

    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <figure><img src={photo} alt="Coffee" /></figure>
            <div className="flex justify-between w-full pr-4 mt-10">
                <div className='ml-10'>
                    <h2 className="card-title font-bold">Name: {name}</h2>
                    <p className='font-medium'>{quantity}</p>
                    <p className='font-medium'>{supplier}</p>
                    <p className='font-medium'>{taste}</p>
                </div>
                <div className="card-actions justify-end">
                    <div className="join join-vertical gap-3">
                        <button className="btn btn-active bg-green-400">View</button>
                        <Link to={`updateCoffee/${_id}`}><button className="btn btn-active bg-slate-400">Edit</button></Link>
                        
                        <button onClick={() => handleDelete(_id)} className="btn btn-active bg-red-500">Delet</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;