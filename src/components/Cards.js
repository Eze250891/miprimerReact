import React from 'react'
import Card from './Card'

import image1 from './imagenes/img1.jpg'
import image2 from './imagenes/img2.jpg'

const cards = [
  {
    id: 1,
    title: 'Paisajes Noche de lluvia',
    image: image1,
    url:'https://www.imagui.com/a/dibujos-de-pinturas-abstractas-iLLrkB4ke',
    text:''
  },
  {
    id: 2,
    title: 'Cabezas abstractas',
    image: image2,
    url:'https://galarteh.com/product/cabezas-abstractas/',
    text:'Cuadro decorativo, enmarcado con moldura de madera, imagen impresa con alta resolución y laminado (texturizado) con un vinilo tipo acrílico o lino fino; el cual consta de un recubrimiento plástico que protege la imagen de agua y polvo y se monta en madera mdf para darle rigidez. Todos nuestros cuadros son fabricados con materiales de la más alta calidad y llegan lístos para colgarse en tu espacio favorito .'
  }
]

function Cards() {
  return (
    <div className='container d-flex justify-content-around align-items-center h-100'>
        <div className='row'>
          {
            cards.map(card => (
              <div className="pt-5 mt-5 mx-5 col-md-4" key={card.id} >
            <Card title={card.title} imageSource={card.image} url={card.url} text={card.text}/>
          </div>
            ) )
          }

        </div>   
    </div>
  )
}
  
 
export default Cards