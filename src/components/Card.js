import React from 'react'
import PropTypes from 'prop-types'
import './Cards.css'


function Card({title, imageSource, text, url}) {
  return (
    <div className='card  text-center bg-dark text-white animate__animated animate__bounceInDown' >
        <div className='overFlow'>
        <img src={imageSource} alt="" className='card-img-top'/>
        </div>
        
        <div className='card-body'>
         <h4 className='card-title'>{title}</h4>
         <p className='card-text text-white'>{
                
                text ? text : 'No hay Informacion acerca del artista'
              
              }</p>
         <a href={url} className='btn btn-outline-secondary text-white' target="_blank">
          ir a
         </a>
        </div>
    </div>
     
      
      

      
  )
}

Card.propTypes= {
  text: PropTypes.string
}

export default Card