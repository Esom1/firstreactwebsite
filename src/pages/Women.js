import React from 'react'
import '../styles/Women.css'
import useFetch from '../hooks/useFetch'
import { ClipLoader } from "react-spinners/ClipLoader";
import { ToastContainer, toast } from 'react-toastify';
import { Link } from "react-router-dom";
import CartContext from "../hooks/CartContext";
import { useContext } from 'react';

const Women = () => {
  const {data,error,Loading} = useFetch( "https://fakestoreapi.com/products/category/women's clothing")
 const {handleAddToCart} = useContext(CartContext)
  const notify = () => {
    toast.success('Added to cart!', {
      position: toast.POSITION.TOP_CENTER,
    })
  }
  return (
    <div className='container'>
     <h2> {Loading && <ClipLoader />} </h2>
     <div className='women'>
      <h2 className='text-center mt-4'>WOMEN CATEGORY</h2>
     </div>
     <div className='women-pic'>
      {data.map((datumWomen)=>{
        const { id,image,price,title} = datumWomen
        return(
          <div key={id} className='component-data-inner-women h-100 p-1 text-center card-inner shadow-sm border border-3 rounded mt-5'>
             <Link className="text-decoration-none" to ={`/SingleProduct/${id}`}>
                  <img className=" img-fluid w-50 mt-5" src={image} alt={title} />
                  <p className="fw-bold">${price} </p>
                  </Link>
                  <button onClick={()=> {handleAddToCart(datumWomen); notify()}} className="btn text-white btn-primary">add to cart</button>
                  <ToastContainer />
          </div>
        )
      })}
     </div>
    </div>
  )
}

export default Women