import React, { useState, useEffect } from 'react';
import './css/GaleryImg.css'

const GaleryImg = ({image}) => {
  const [zoom, setZoom] = useState(false);

  const zoomImg = () => {
    if(!zoom) {
      setZoom(true);
      document.body.style.overflow= 'hidden'
    }
  }
  const zoomOut = () => {
    setZoom(false)
  }

  //if zoom is changed, and true, disable scroll
  useEffect(() => {
    if(zoom) {
      document.body.style.overflowY= 'hidden'
    } else {
      document.body.style.overflowY= 'scroll'
    }
  }, [zoom])

  return (
    <>
    {zoom &&
      <div className='bigImgCont'>
        <img src={image} className='bigImg' alt='Zoomed'/>
        <img src={require('../images/icons/cancel.png')} className='closeIcon' alt='Close Icon' onClick={zoomOut}/>
      </div>
    }

    <div className='body' onClick={zoomImg}>
      <img src={image} alt='Galery' id='thisImg' style={{height: 170, width: 250, objectFit: 'cover'}}/>
      <div className='zoomCont'>
        <img className='zoomIcon' src={require('../images/icons/zoom.png')} alt='zoom Icon'/>
      </div>
    </div>
    </>
  )
}

export default GaleryImg
