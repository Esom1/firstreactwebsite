import React from 'react'
import '../styles/Jewelry.css'
import useFetch from '../hooks/useFetch'
import { ClipLoader } from "react-spinners/ClipLoader";
import { ToastContainer, toast } from 'react-toastify';
import { Link } from "react-router-dom";
import CartContext from "../hooks/CartContext";
import { useContext } from 'react';



const Jewelry = () => {
  const {data,error,Loading} = useFetch('https://fakestoreapi.com/products/category/jewelery')
 const {handleAddToCart} = useContext(CartContext)
  const notify = () => {
    toast.success('Added to cart!', {
      position: toast.POSITION.TOP_CENTER,
    })
  }
  return (
    <div className='container'>
     <h2> {Loading && <ClipLoader />} </h2>
     <div className='component-title-jewelry'>
      <h2>JEWELRY CATEGORY</h2>
     </div>
     <div className='j-pic'>
      {data.map((datumJewelry)=>{
        const { id,image,price,title} = datumJewelry
        return(
          <div key={id} className='component-data-inner-jewelry'>
             <Link className="text-decoration-none" to ={`/SingleProduct/${id}`}>
                  <img className=" img-fluid w-25" src={image} alt={title} />
                  <p className="fw-bold">${price} </p>
                  </Link>
                  <button onClick={()=> {handleAddToCart(datumJewelry); notify()}} className="btn text-white btn-primary">add to cart</button>
                  <ToastContainer />
          </div>
        )
      })}
     </div>
    </div>
  )
}

export default Jewelry