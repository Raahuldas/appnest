import React from 'react'

function ServicesNav({ai,product,mobile,digital, software, cloud, blockchain, data, it, devOps}) {
  const handleScrollProduct =() =>{
    product.current.scrollIntoView({behaviour:"smooth"});
  }
 
  const handleScrollMobile =() =>{
    mobile.current.scrollIntoView({behaviour:"smooth"});
  }
 
  const handleScrollDigital =() =>{
    digital.current.scrollIntoView({behaviour:"smooth"});
  }
 
  const handleScrollSoftware =() =>{
    software.current.scrollIntoView({behaviour:"smooth"});
  }
 
  const handleScrollCloud =() =>{
    cloud.current.scrollIntoView({behaviour:"smooth"});
  }
 
  const handleScrollBlockchain =() =>{
    blockchain.current.scrollIntoView({behaviour:"smooth"});
  }
 
  const handleScrollData =() =>{
    data.current.scrollIntoView({behaviour:"smooth"});
  }
 
  const handleScrollAI =() =>{
    ai.current.scrollIntoView({behaviour:"smooth"});
  }
 
  const handleScrollIt =() =>{
    it.current.scrollIntoView({behaviour:"smooth"});
  }
 
  const handleScrollDevOps =() =>{
    devOps.current.scrollIntoView({behaviour:"smooth"});
  }
  
  return (

    <div className="bg-black py-1 pt-3 sticky-top">
    <div className="container bg-light sercices-nav-css border border-dark-subtle border-2 mx-auto align-items-center lh-1 text-center mt-5 rounded-4 py-3 row">
      <div className="sections px-1 col pointer hover-shadow" onClick={handleScrollProduct}>Product Design & Ideation</div>
      <div className="sections px-1 col pointer hover-shadow" onClick={handleScrollMobile}>Mobile APP Development</div>
      <div className="sections px-1 col pointer hover-shadow" onClick={handleScrollDigital}>Digital Transformation</div>
      <div className="sections px-1 col pointer hover-shadow" onClick={handleScrollSoftware}>Software Development</div>
      <div className="sections px-1 col pointer hover-shadow" onClick={handleScrollCloud}>Cloud Services</div>
      <div className="sections px-1 col pointer hover-shadow" onClick={handleScrollBlockchain}>Blockchain Services</div>
      <div className="sections px-1 col pointer hover-shadow" onClick={handleScrollData}>Data Science & Analytics</div>
      <div className="sections px-1 col pointer hover-shadow" onClick={handleScrollAI}>AI & ML</div>
      <div className="sections px-1 col pointer hover-shadow" onClick={handleScrollIt}>IT Consulting</div>
      <div className="sections px-1 col pointer hover-shadow" onClick={handleScrollDevOps}>DevOps</div>
    </div>
  </div>  )
}

export default ServicesNav