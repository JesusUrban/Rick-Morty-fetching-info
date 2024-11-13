import React from 'react'
import ResidentCard from './ResidentCard'
import './ResidenceList.css'
function ResidenceList({residents}) {


  
  return (
    <div className='cards'>
      
         {residents?.map(resident =>{
                const residentSplit = resident.split('/')
                const id = residentSplit[residentSplit.length -1]

                return(
                   <ResidentCard key={id} url={resident}></ResidentCard>
           )
           })}


    </div>
  )
 
}

export default ResidenceList