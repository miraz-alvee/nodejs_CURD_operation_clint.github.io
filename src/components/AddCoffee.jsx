import React from 'react';
import Swal from 'sweetalert2';

const AddCoffee = () => {
    const handleCoffeeAdded = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const detailes = form.detailes.value;
        const photo = form.photo.value;

        const newCoffee = {name, quantity, supplier, taste, category, detailes, photo};
        form.reset();
        console.log(newCoffee);

        //send data to server
        fetch('http://localhost:5000/coffee',{
            method: 'POST',
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedID){
                Swal.fire({
                    title: 'Success!',
                    text: 'Coffee Added Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                })
            }
        })
    }
    return (
        <div className='bg-[#9aa3b56c] p-24'>
            <h2 className='text-3xl text-center font-extrabold'>coffee will be added here</h2>
            <form onSubmit={handleCoffeeAdded} >
                <div className='md:flex gap-20 mt-14'>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-bold">Coffee Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='name' placeholder="Coffee Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text font-bold">Available Quantity</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='quantity' placeholder="Available Quantity" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>

                <div className='md:flex gap-20 mt-5'>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-bold">Supplier</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='supplier' placeholder="Coffee supplier" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="font-bold">Taste</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='taste' placeholder="Taste Quality" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className='md:flex gap-20 mt-5'>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-bold">Category</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='category' placeholder="Coffee Category" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="font-bold">Detailes</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='detailes' placeholder="Coffee detailes" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className='mt-5'>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-bold">Photo URL</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='photo' placeholder="Photo URL" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <input type="submit" value="Add Coffee" className="mt-10 btn btn-block btn-success"/>
            </form>
        </div>
    );
};

export default AddCoffee;