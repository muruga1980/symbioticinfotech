import React from 'react'
import { Link } from 'react-router-dom'

const InnerHeaderBanner = (props) => {
  return (
    <>        
      <div className="breadcrumbs d-flex align-items-center" style={{ backgroundImage: `url(${props.img})` }}>
         <div className="container position-relative d-flex flex-column align-items-center">
            <h2>{props.name}</h2>
            <ol>
               <li><Link to="/"><i class="bi bi-house-door"></i> Home</Link></li>
               <li>{props.name}</li>
            </ol>
         </div>
      </div>
      
    </>
  )
}

export default InnerHeaderBanner