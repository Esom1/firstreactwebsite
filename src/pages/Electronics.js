import React from 'react'
import '../styles/Electronics.css'
import useFetch from '../hooks/useFetch'
import { ClipLoader } from "react-spinners/ClipLoader";
import { ToastContainer, toast } from 'react-toastify';
import { Link } from "react-router-dom";
import CartContext from "../hooks/CartContext";
import { useContext } from 'react';

const Electronics = () => {
  const {data,error,Loading} = useFetch('https://fakestoreapi.com/products/category/electronics')
  const {handleAddToCart} = useContext(CartContext)
   const notify = () => {
     toast.success('Added to cart!', {
       position: toast.POSITION.TOP_CENTER,
     })
   }
   return (
     <div className='container'>
      <h2> {Loading && <ClipLoader />} </h2>
      <div className='component-title-electronics'>
       <h2 className='text-center mt-4'>ELECTRONICS CATEGORY</h2>
      </div>
      <div className='electronics'>
       {data.map((datumElectronics)=>{
         const { id,image,price,title} = datumElectronics
         return(
           <div key={id} className='component-data-inner-electronics h-100 p-1 text-center card-inner shadow-sm border border-3 rounded mt-5'>
              <Link className="text-decoration-none" to ={`/SingleProduct/${id}`}>
                   <img className=" img-fluid w-50 mt-5" src={image} alt={title} />
                   <p className="fw-bold mt-3">${price} </p>
                   </Link>
                   <button onClick={()=> {handleAddToCart(datumElectronics); notify()}} className="btn text-white btn-primary">add to cart</button>
                   <ToastContainer />
           </div>
         )
       })}
      </div>
     </div>
   )
}

export default Electronics