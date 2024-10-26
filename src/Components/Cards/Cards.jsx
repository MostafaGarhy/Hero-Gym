
import React from 'react'
import "./Cards.css"
import Card from './Card'
function Cards() {
  return (
    <>
    
    <div>
      <div className='gym-cards'>
        <div className='container'>
            <div className='row p-5'>
                <div className='col-12'>
                    <span className='text-red-600'> OUR PLAN </span>
                    <h2> Choose your pricing plan </h2>
                </div>
            </div>
            <div className='row'>
                <div className='col-lg-4 col-sm-12'>
                <Card price="39" title="Class drop-in" />
                </div>
                <div className='col-lg-4 col-sm-12'>
                    <Card price="99" title="12 Month unlimited" />
                </div>
                <div className='col-lg-4 col-sm-12'>
                    <Card price="59" title="6 Month unlimited" />
                </div>
            </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Cards


