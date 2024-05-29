import React from 'react'
import "./style.css"
const Accordian = ({title,content}) => {
    const [isActive,setIsActive] = React.useState(false)
  return (
     
        <section className='accordion-card'>
            <div className='header' onClick={()=>setIsActive(!isActive)}>
                <div>{title}</div>
                <p className='icon'>{isActive?"-":"+"}</p>
            </div>
          <div className='content'> 
            {isActive&&<p className='card-info'>{content}</p>}
          </div>
            
        </section>
     
  )
}

export default Accordian