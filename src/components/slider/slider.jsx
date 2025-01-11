import { useState } from 'react';
import './slider.scss'

function Slider({images}) {

  // Inicializamos el estado 'imageIndex' con un valor inicial de null.
// Este estado será utilizado para rastrear el índice de la imagen actualmente visible.
const [imageIndex, setImageIndex] = useState(null); 

// Función que maneja el cambio de diapositivas (imágenes) en una dirección específica.
const changeSlide = (direction) => {   

    // Verificamos si la dirección es hacia la izquierda.
    if (direction === 'left') {     

        // Si estamos en la primera imagen (índice 0), volvemos a la última imagen.
        if (imageIndex === 0) {      
            setImageIndex(images.length - 1);
        } else {
            // Si no estamos en la primera imagen, retrocedemos una posición en el índice.
            setImageIndex(imageIndex - 1);
        }
    } else {
        // Si la dirección no es 'left', asumimos que es hacia la derecha.
        // Si estamos en la última imagen (índice igual a la longitud de 'images' - 1),
        // volvemos al inicio de la lista de imágenes (índice 0).
        if (imageIndex === images.length - 1) {
            setImageIndex(0);
        } else {
            // Si no estamos en la última imagen, avanzamos una posición en el índice.
            setImageIndex(imageIndex + 1);
        }
    }
};
    return(
     <div className='slider'>

        {imageIndex !== null && (<div className="fullSlider">
            <div className="arrow" onClick={()=>changeSlide('left')}>
                <img src="/arrow.png" alt="" />
            </div>
                <div className="imageContainer">
                    <img src={images[imageIndex]} alt="" />
                </div> 
            <div className="arrow"onClick={()=>changeSlide('Right')}>
                <img src="/arrow.png" className='right' alt="" />
            </div>
            <div className="close" onClick={()=>setImageIndex(null)}>x</div>
        </div>)}
        <div className="bigImage">
            <img src={images[0]} alt="" onClick={()=>setImageIndex(0)}/>
         </div>
<div className="smallImages">
        {images.slice(1).map((image, index) => (
          <img
            src={image}
            alt=""
            key={index} onClick={()=>setImageIndex(index + 1)}/>
        ))}
        
        </div>
    </div>
    );
}

export default Slider;