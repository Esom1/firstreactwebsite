import React from 'react';
import { dataFooter } from '../FooterDb'

const Footer = () => {
  return (
    <div className='footrer mt-5 bg-dark text-white'>
      <div className='container d-flex justify-content-between align-items-center p-4'>
        {dataFooter.map((datumFooter)=>{
          const { id,title,contact,about,careers,blog } = datumFooter
          return(
            <div className=''key={id}>
              <h2> {title} </h2>
              <ul className=' list-unstyled lh-lg'>
                <li>{contact}</li>
                <li>{about}</li>
                <li>{careers}</li>
                <li>{blog}</li>
              </ul>
            </div>
          )
        })}
        <p>Copyright @&</p>
      </div>
    </div>
  )
}

export default Footer