import React from 'react'
import Products from './products'

const Home = () => {
    return (
        <div className="hero">
            <div class="card bg-dark text-white border-0">
                <img src="/assets/b.jpeg" class="card-img" alt="fondo"/>
                    <div class="card-img-overlay d-flex flex-column  justify-content-center">
                        <div className="container">

                        
                            <h5 class="card-title display-3 fw-bolder mb-0">NEW SEASON</h5>
                            <p className='card-text lead fs-2'>CHECK OUT ALL THE THENDS</p>
                        </div>
                    </div>
            </div>
            <Products/>
        </div>
    )
}

export default Home